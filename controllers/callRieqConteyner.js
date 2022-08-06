const CallRieq = require("../models/CallRieq");
const {validationResult} = require('express-validator')

module.exports.callRieqController = {
  postCallRieq: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json("Неправильный e-mail");
    }
    try {
      const { name, email, message } = req.body;
      const сallmessage = await CallRieq.create({
        name,
        email,
        message,
      });
      const data = await res.json(сallmessage);
    } catch (error) {
      res.json(error.message);
    }
  },

  getCallRieq: async (req, res) => {
    try {
      const сallmessage = await CallRieq.find();
      const data = await res.json(сallmessage);
    } catch (error) {
      res.json(error.message);
    }
  },

  getCallRieqId: async (req, res) => {
    try {
      const сallmessage = await CallRieq.findById(req.params.id);
      const data = await res.json(сallmessage);
    } catch (error) {
      res.json(error.message);
    }
  },



  deleteCallRieq: async (req, res) => {
    try {
      const сallmessage = await CallRieq.findByIdAndRemove(req.params.id);
      res.json("Сообшение удаленно");
    } catch (error) {
      res.json(error.message);
    }
  },
};
