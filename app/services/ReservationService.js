const ReservationModel = require('../models').ReservationModel

module.exports ={
    findOne: async (criteria, projection='*', populate) =>{
        try{
            const appointments = await ReservationModel.findOne({where: criteria, attributes: [projection]})
            return {success: appointments}
        }
        catch(err){
            return {err}
        }
    },
    findAll: async (criteria, projection='*', populate) =>{
        try{
            const appointments = await ReservationModel.findAll({where: criteria, attributes: [projection]})
            return {success: appointments}
        }
        catch(err){
            return {err}
        }
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
    updateOne: async (criteria, data, populate) =>{
        try{
            let appointment = await ReservationModel.update(data, criteria)
            return {success: appointment}
        }
        catch(err){
            return {err}
        }
    },
    updateAll:(criteria, projection='*', populate) =>{

    },
    deleteOne:(criteria, projection='*', populate) =>{

    },
    deleteAll:(criteria, projection='*', populate) =>{

    }
}