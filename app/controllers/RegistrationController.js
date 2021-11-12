const RegistrationService = require('../services').RegistrationService
const save = async (request) => {
    try {
        let payload = request.body
        let createdAt = new Date() 
        let doctorId = payload.hasOwnProperty("doctorId") ? payload.doctorId : null
        let staffId = payload.hasOwnProperty("staffId") ? payload.staffId : null

        let toSave = {
            name: payload.name,
            surname: payload.surname,
            address: payload.address,
            phone: payload.phone,
            pps: payload.pps,
            doctorId,
            staffId,
            email: payload.email,
            password: payload.password,
            createdAt,
            type: payload.type
        }
        const {success} = await RegistrationService.create(toSave)

        return {success}
    }
    catch(err){
        console.error(err)
        return {error: err}
    }
}

module.exports = {
    save
}