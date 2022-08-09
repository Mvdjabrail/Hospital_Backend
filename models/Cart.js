const { default: mongoose } = require("mongoose")
const mogoose = require("mongoose")

const cartSchema = mogoose.Schema({
    products: [{
        amount: {
            type: Number,
        },
        productId: {
            ref: "Drug",
            type: mongoose.SchemaTypes.ObjectId
        },
    }],
    user: {
        ref: "User",
        type: mongoose.SchemaTypes.ObjectId
    }
})

const Cart = mongoose.model("Cart", cartSchema)
module.exports = Cart