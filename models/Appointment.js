const mongoose = require("mongoose");

const AppointmentsSchema = mongoose.Schema({
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
    required: true,
  },
});

const Appointments = mongoose.model("Appointments", AppointmentsSchema);

module.exports = Appointments;
