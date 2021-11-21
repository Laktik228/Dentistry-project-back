const LoginService = require('../services').UserService
const bcrypt = require("bcrypt")


const save = async (request) => {
    try {
        let payload = request.body
        const {success} = await LoginService.findOne({email:payload.email})
        bcrypt.compare(payload.password, success.password, (err, result) => {
            if(result) return {success}
            return {success: null, error: err}
        })
    } catch (err) {
        console.error(err)
        return {success: null, error: err}
    }
}

module.exports = {
    save
}