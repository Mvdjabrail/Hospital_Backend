const { default: mongoose } = require("mongoose")
const mogoose = require("mongoose")

const cartSchema = mogoose.Schema({
    drugs: [{
        ref: "Drug",
        type: mongoose.SchemaTypes.ObjectId
    }],
    summa: {
        type: Number,
        default: 0
    }
})

const Cart = mongoose.model("Cart", cartSchema)
module.exports = Cart