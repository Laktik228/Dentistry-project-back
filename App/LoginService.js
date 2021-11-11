const UserModel = require('../models').UserModel
const db = require('../../Connectors/MySQLConnector')

module.exports ={
    findOne: async (data) =>{
        try{
            const user = await db.findOne({ where: data });
            return {success: user}
        }
        catch(err){
            return {err}
        }
    },
    findAll: (criteria, projection='*', populate) =>{

    },
    create: (criteria, projection='*', populate) =>{
        
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