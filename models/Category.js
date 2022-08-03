const mongoose = require("mongoose")


const categoryShema = mongoose.Schema({
    title: String

})

const Category = mongoose.model("Category", categoryShema)

module.exports = Category