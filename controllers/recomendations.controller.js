const Recommendation = require('../models/Recommendation')

module.exports.recommendationController = {
    postRecom: async (req, res) =>{
        try {
            const data = await Recommendation.create({
                text: req.body.text,
                doctor: req.body.doctor,
                user: req.body.user
            })
            res.json(data)
        } catch (error) {
            res.json(error.message)
        }
    },
    getRecom: async (req, res) =>{
        try {
            const data = await Recommendation.find()
            res.json(data)
        } catch (error) {
            res.json(error.message)
        }
    },
    delRecom: async (req, res)=>{
        try {
            const data = await Recommendation.findByIdAndRemove(req.params.id)
            res.json(data)
        } catch (error) {
            res.json(error.message)
        }
    },
    getRecomsById: async (req, res) =>{
        try {
            const data = await Recommendation.findById({user: req.params.id})
            res.json(data)
        } catch (error) {
            res.json(error.json)
        }
    }
}