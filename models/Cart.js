const { default: mongoose } = require("mongoose")
const mogoose = require("mongoose")

const cartSchema = mogoose.Schema({
    products: [{
        ref: "Drug",
        type: mongoose.SchemaTypes.ObjectId
    }],
    amount: {
        type: Number,
        default: 0
    },
    user: {
        ref: "User",
        type: mongoose.SchemaTypes.ObjectId
    }
})

const Cart = mongoose.model("Cart", cartSchema)
module.exports = Cart