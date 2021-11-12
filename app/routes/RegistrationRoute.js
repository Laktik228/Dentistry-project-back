const controllers = require("../controllers");
const joi = require('joi');
const helper = require('../utils/helper');

const schema = joi.object().keys({
    name: joi.string().optinal(),
    surname: joi.string().optional(),
    phone: joi.string().length(10).pattern(/^\d+$/).optional(),
    createdAt: joi.date().required(),
    email: joi.string().email().required(),
    type: joi.string().required(),
    doctorId: joi.string().optional(),
    customerId: joi.string().optional(),
    password: joi.string().required()

});

module.exports = app => {

    app.post("/api/user/register", helper.validateScheme(schema), async (req, response, next) => {
        const {success, error} = await controllers.RegistrationController.save(req)
        if(error){
            return response.status(400).send({
                message: error.message || "Bad Request"
            })
        }
        return response.send({success})
    });

}