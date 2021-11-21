const UserService = require('../services').UserService
const save = async (request) => {
    try {
        let patientId = payload.hasOwnProperty("patientId") ? payload.patientId : null
        let doctorId = payload.hasOwnProperty("doctorId") ? payload.doctorId : null
        let staffId = payload.hasOwnProperty("staffId") ? payload.staffId : null

        let toSave = {
            patientId,
            doctorId,
            staffId
        }
        const {success} = await UserService.create(toSave)

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