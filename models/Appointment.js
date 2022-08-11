const mongoose = require("mongoose");

const appointmentsSchema = mongoose.Schema({
  doctorId: {
    ref: "User",
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
  },
  user: {
    ref: "User",
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
  },
  service: {
    ref: "Service",
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
  },
  dateAndTime: { 
    type: Date,
    default: "",
  },
  roomId: {
    type: String,
    required: true,
  }
});

const Appointments = mongoose.model("Appointments", appointmentsSchema);

module.exports = Appointments;
