const mongoose = require('mongoose')

const drugSchema = mongoose.Schema({
    title: String,
    recept: {
        type: Boolean,
        default: false,
    },
    price: Number,
    category: {
        ref: "Category",
        type: mongoose.SchemaTypes.ObjectId,
    }
})

const Drug = mongoose.model("Drug", drugSchema)
module.exports = Drug