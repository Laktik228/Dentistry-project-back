const booking = require("../controllers");
const joi = require('joi');
const helper = require('../utils/helper');

const schema = joi.object().keys({
    startDate: joi.string().required(),
    selectedTime: joi.string().required(),
    fullName: joi.string().required(),
    email: joi.string().email().required(),
    phoneNumber: joi.string().length(10).pattern(/^\d+$/).required(),
    description: joi.string().optional(),
    reservationId: joi.string().optional(),
    customerId: joi.string().optional()
});

module.exports = app => {
    app.post("/api/reserve", helper.validateScheme(schema), async (req, response, next) => {
        const {success, error} = await booking.ReservationController.save(req)
        if(error){
            return response.status(400).send({
                message: error.message || "Bad Request"
            })
        }
        return response.send({success})
    });

    app.patch("/api/reserve/:id", helper.validateScheme(schema), async (req, response, next) => {
        const {success, error} = await booking.ReservationController.updateAppointment(req)
        if(error){
            return response.status(400).send({
                message: error.message || "Bad Request"
            })
        }
        return response.send({success})
    });

    app.get("/api/reserve/:id", helper.validateScheme(schema), async (req, response, next) => {
        const {success, error} = await booking.ReservationController.getAppointments(req)
        if(error){
            return response.status(400).send({
                message: error.message || "Bad Request"
            })
        }
        return response.send({success})
    });
}