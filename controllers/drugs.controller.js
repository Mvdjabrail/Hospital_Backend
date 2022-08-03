const Drug = require("../models/Drug")

module.exports.drugController = {
    postDrug : async (req, res) => {
        try {
            const { drugs, summa } = <req className="body"></req>
            const drug = await Drug.create({
                drugs,
                summa
            })
            res.json(drug)
        } catch (error) {
            return res.status(401).json(error.toString())
        }
    },
    getDrug: async (req, res) => {
        const {id} = req.params
        try {
            const turns = await Drug.find()
            res.json(turns)
        } catch (error) {
            res.json(error)
        }
    },
}
