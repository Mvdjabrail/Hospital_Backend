const Drug = require("../models/Drug")

module.exports.drugController = {
    postDrug: async (req, res) => {
        try {
            const { text, title, recept, price, category } = req.body
            const drug = await Drug.create({
                title,
                text,
                price,
                category,
                image: req.file.path,
                recept,
            })
            res.json(drug)
        } catch (error) {
            return res.status(401).json(error.toString())
        }
    },
    getDrug: async (req, res) => {
        try {
            const turns = await Drug.find()
            res.json(turns)
        } catch (error) {
            res.json(error)
        }
    },
    delDrug: async (req, res) => {
        try {
            const delDrug = Drug.findByIdAndRemove(req.params.id)
            res.json('Лекарство удалено')
        } catch (error) {
            res.json(error)
        }
    }
}
