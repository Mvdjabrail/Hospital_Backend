const Service = require("../models/Service")

module.exports.serviceController = {
    postService: async (req, res) => {
        try {
            const data = await Service.create({
               title: req.body.title,
               text: req.body.text,
               price: req.body.price
            })
            res.json(data)
        } catch (error) {
            res.json(error.message)
        }
    },
    getService: async (req, res) =>{
        try {
           const data = await Service.find() 
           res.json(data)
        } catch (error) {
            res.json(error.message)
        }
    }
}