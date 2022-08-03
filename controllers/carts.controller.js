const Cart = require("../models/Cart")
const Drug = require("../models/Drug")
const User = require("../models/User")

module.exports.cartController = {
    addDrugs: async (req, res) => {
        try {
            const cart = await Cart.findById(req.params.id)
            const drug = await Drug.findById(req.body.products)
            const user = await User.findById(req.user.id)
            if (drug.recept) {
                if (user.isRecepte) {
                    await Cart.findByIdAndUpdate(req.params.id, {
                        $push: { products: req.body.products },
                        $set: { amount: cart.amount + drug.price },
                    })
                    res.json('Лекарство добавлено в корзину')
                } else {
                    res.json('У вас нет рецепта на это лекарство')
                }
            } else {
                await Cart.findByIdAndUpdate(req.params.id, {
                    $push: { products: req.body.products },
                    $set: { amount: cart.amount + drug.price },
                })
                res.json('Лекарство добавлено в корзину')
            }
        } catch (error) {
            res.json(error.message)
        }
    },
    clearnCart: async (req, res) => {
        try {
            await Cart.findByIdAndUpdate(req.params.id, {
                products: [],
                amount: 0
            })
            res.json('Корзина очищена')
        } catch (error) {
            res.json(error)
        }
    },
    buyDrugs: async (req, res) => {
        try {
            const cart = await Cart.findById(req.params.id)
            const user = await User.findById(req.params.userId)
            if (cart.amount > user.total) {
                return res.json('У вас не достаточно средств')
            }
            console.log(cart.amount);

            await User.findByIdAndUpdate(req.params.userId, {
                total: user.total - cart.amount
            })
            await Cart.findByIdAndUpdate(req.params.id, {
                products: [],
                amount: 0
            })
            res.json('Покупка успешно совершена')
        } catch (error) {
            res.json(error)
        }
    },
    topUpCash: async (req, res) => {
        try {
            const user = await User.findById(req.params.id)
            await User.findByIdAndUpdate(req.params.id, {
                total: user.total + req.body.total
            })
            res.json('Баланс успешно пополнен')
        } catch (error) {
            res.json(error)
        }
    },
    getCart: async (req, res) => {
        try {
            const users = await Cart.find();
            res.json(users);
        } catch (error) {
            res.json(error);
        }
    },

}