const mongoose = require("mongoose");

const appointmentsSchema = mongoose.Schema({
  doctorId: {
    ref: "user",
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
  },
  user: {
    ref: "user",
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
  },
  service: {
    ref: "service",
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
  },
  dateAndTime: { 
    type: Date,
    default: "",
  },
});

const Appointments = mongoose.model("Appointments", appointmentsSchema);

module.exports = Appointments;
