const LoginService = require('../services').LoginService
// const helper = require('../utils/helper');
// const send = require('../../Connectors/SengGridConnector')
const save = async (request) => {
    try {
        let toSave = {
            name: payload.name,
            // surname: payload.surname,
            // phone: payload.phoneNumber,
            // createdAt: payload.createdAt,
            // email: payload.email,
            // type: payload.type,
            // doctorId: payload.doctorId,
            // customerId: payload.customerId,
            password: payload.password
        }
        const {success} = await LoginService.findOne(toSave)
        return {success}
    } catch (err) {
        console.error(err)
        return {success: null, error: err}
    }
}

module.exports = {
    save
}