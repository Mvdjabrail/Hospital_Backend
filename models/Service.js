const mongoose = require('mongoose')

const serviceSchema = mongoose.Schema({
    title: String,
    text: String,
    price: Number,
    image:String,
})
const Service = mongoose.model("Service", serviceSchema)
module.exports = Service