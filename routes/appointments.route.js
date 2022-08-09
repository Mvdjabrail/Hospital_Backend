const Router = require("express");
const { appointmentController } = require("../controllers/appointments.controller");

const route = Router();

route.get("/appointments/fetch", appointmentController.getAppointment);
route.post("/appointments/add", appointmentController.postAppointment);
route.patch("/appointments/update/:id", appointmentController.patchAppointment);
route.delete("/appointments/delete/:id", appointmentController.deleteAppointment);

module.exports = route;