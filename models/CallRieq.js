const mongoose = require("mongoose");

const callRieqShema = mongoose.Schema({
  name: String,
  email: { 
    type: String,
    required: true,
  },
  message: String,
});

const CallRieq = mongoose.model("CallRieq", callRieqShema);

module.exports = CallRieq;
