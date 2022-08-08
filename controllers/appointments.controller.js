const Appointment = require("../models/Appointment")

module.exports.appointmentController = {
    getAppoinment: async (req, res) =>{
        try {
           const appoinment = await Appointment.find() 
           res.json(appoinment);

        } catch (error) {
            res.status(401).json({
                error: "ошибка при получении записей на телемедицину " + error.toString()
            });
        }
    },

    postAppoinment: async (req, res) => {
        const { user } = req.body.user;
        const { service } = req.body.service;
        const { dateAndTime } = req.body.user;

        try {
            const appoinment = await Appointment.create({
                user,
                service,
                dateAndTime,
            })
            res.json(appoinment)

        } catch (error) {
            res.status(401).json({
                error: "ошибка при добавлении записи " + error.toString()
            });
        }
    },

    patchAppoinment: async (req, res) => {
        const { id } = req.params;
        const { dateAndTime } = req.body.dateAndTime;

        try {
            const appoinment = await Appointment.findByIdAndRemove({ service: id, 
                dateAndTime
            })
            res.json(appoinment)

        } catch (error) {
            res.status(401).json({
                error: "ошибка при добавлении записи " + error.toString()
            });
        }
    },

    deleteAppoinment: async (req, res) => {
        const { id } = req.params;

        try {
            const appoinment = await Appointment.findByIdAndDelete(id)
            
            res.json("запись удалена")

        } catch (error) {
            res.status(401).json({
                error: "ошибка при удалении записи " + error.toString()
            });
        }
    },
}