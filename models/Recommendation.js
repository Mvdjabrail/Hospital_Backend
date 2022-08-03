const mongoose = require("mongoose")

const recommendationShema = mongoose.Schema({
    text: String,
    doctor: {
        ref: "User",
        type: mongoose.SchemaTypes.ObjectId
    },
    user: {
        ref: "User",
        type: mongoose.SchemaTypes.ObjectId
    }
})

const Recommendation = mongoose.model("Recommendation", recommendationShema)

module.exports = Recommendation