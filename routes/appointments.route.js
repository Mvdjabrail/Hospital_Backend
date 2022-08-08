const Router = require("express");
const { appointmentController } = require("../controllers/appointments.controller");

const route = Router();

route.get("/appointments", appointmentController.getAppoinment);
route.post("/appointments", appointmentController.postAppoinment);
route.get("/appointments/:id", appointmentController.patchAppoinment);
route.delete("/appointments/:id", appointmentController.deleteAppoinment);

module.exports = router;