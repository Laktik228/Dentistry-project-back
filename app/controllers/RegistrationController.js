const RegistrationService = require('../services').UserService
const bcrypt = require("bcrypt")

const saltRounds = 10

const save = async (request) => {
    try {
        let payload = request.body

        bcrypt.hash(payload.password, saltRounds, async (err, hash) => {
            if(err) return {error:err}

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
                password: hash,
                createdAt,
                type: payload.type
            }
            const {success} = await RegistrationService.create(toSave)

            return {success}
        })

    }
    catch(err){
        console.error(err)
        return {error: err}
    }
}

module.exports = {
    save
}