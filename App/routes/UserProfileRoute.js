const controllers = require("../controllers");
const joi = require('joi');
const helper = require('../utils/helper');

const schema = joi.object().keys({
    patientId: joi.string().optional(),
    doctorId: joi.string().optional(),
    staffId: joi.string().optional()
});

module.exports = app => {

    app.post("/api/user/:userId", helper.validateScheme(schema), async (req, response, next) => {
        const {success, error} = await controllers.UserProfileController.save(req)
        if(error){
            return response.status(400).send({
                message: error.message || "Bad Request"
            })
        }
        return response.send({success})
    });

}