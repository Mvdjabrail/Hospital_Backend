const Service = require("../models/Service")

module.exports.serviceController = {
    postService: async (req, res) => {
        try {
            const { title, text, price } = req.body
            const data = await Service.create({
                title,
                text,
                price,
                image:req.file.path
            })
            res.json(data)
        } catch (error) {
            res.json(error.message)
        }
    },
    getService: async (req, res) => {
        try {
            const data = await Service.find()
            res.json(data)
        } catch (error) {
            res.json(error.message)
        }
    }
}