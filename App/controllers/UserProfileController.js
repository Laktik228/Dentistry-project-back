const UserService = require('../services').UserService
const find = async (request) => {
    try {
        
        const {success} = await UserService.findOne({id: request.userId})

        return {success}
    }
    catch(err){
        console.error(err)
        return {error: err}
    }
}

module.exports = {
    find
}