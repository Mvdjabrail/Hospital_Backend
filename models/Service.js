const mongoose = require('mongoose')

const serviceSchema = mongoose.Schema({
    title: String,
    text: String,
    price: Number
})
const Service = mongoose.model("Service", serviceSchema)
module.exports = Service