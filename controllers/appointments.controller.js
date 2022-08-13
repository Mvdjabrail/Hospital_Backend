const Appointment = require("../models/Appointment")

module.exports.appointmentController = {
    getAppointment: async (req, res) =>{
        try {
           const appointment = await Appointment.find().populate("service")
           res.json(appointment);

        } catch (error) {
            res.status(401).json({
                error: "ошибка при получении записей на телемедицину " + error.toString()
            });
        }
    },

    postAppointment: async (req, res) => {
        const { doctorId } = req.body;
        const { user } = req.body;
        const { service } = req.body;
        const { roomId } = req.body;

        try {
            const appointment = await Appointment.create({
                doctorId,
                user,
                service,
                roomId,

            })
            res.json(appointment)

        } catch (error) {
            res.status(401).json({
                error: "ошибка при добавлении записи " + error.toString()
            });
        }
    },

    patchAppointment: async (req, res) => {
        const { id } = req.params;
        const { dateAndTime } = req.body;

        try {
            const appointment = await Appointment.findByIdAndUpdate(id, {
                dateAndTime
            }, {new: true})
            res.json(appointment)

        } catch (error) {
            res.status(401).json({
                error: "ошибка при добавлении записи " + error.toString()
            });
        }
    },

    deleteAppointment: async (req, res) => {
        const { id } = req.params;

        try {
            const appointment = await Appointment.findByIdAndDelete(id)
            
            res.json("запись удалена")

        } catch (error) {
            res.status(401).json({
                error: "ошибка при удалении записи " + error.toString()
            });
        }
    },
}