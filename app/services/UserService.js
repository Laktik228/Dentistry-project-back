const UserModel = require('../models').UserModel

module.exports ={
    findOne: async (data) =>{
        try{
            const user = await UserModel.findOne({ where: data, attributes: [projection] });
            delete user.password
            return {success: user}
        }
        catch(err){
            return {err}
        }
    },
    findAll: (criteria, projection='*', populate) =>{

    },
    create: async (data) =>{
        try{
            await UserModel.create(data)
            return {success: 'Account registration successful!'}
        }
        catch(err){
            return {err}
        }
    },
    updateOne: (criteria, projection='*', populate) =>{

    },
    updateAll:(criteria, projection='*', populate) =>{

    },
    deleteOne:(criteria, projection='*', populate) =>{

    },
    deleteAll:(criteria, projection='*', populate) =>{

    }
}