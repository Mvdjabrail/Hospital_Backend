const mongoose = require('mongoose')

const drugSchema = mongoose.Schema({
    g,
    title: String,
    recept: {
        type: Boolean,
        default: false,
    },
    price: Number,
    category: {
        ref: "Category",
        type: mongoose.SchemaTypes.ObjectId,
    },
    image: String
})

const Drug = mongoose.model("Drug", drugSchema)
module.exports = Drug