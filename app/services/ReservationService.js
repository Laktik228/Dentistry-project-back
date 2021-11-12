const ReservationModel = require('../models').ReservationModel

module.exports ={
    findOne: (criteria, projection='*', populate) =>{
        
    },
    findAll: (criteria, projection='*', populate) =>{

    },
    create: async (data) =>{
        try{
            await ReservationModel.create(data)
            console.log('success')
            return {success: 'Appointment registration successful!'}
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