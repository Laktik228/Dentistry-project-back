const ReservationService = require('../services').ReservationService
const UserService = require('../services').UserService
const helper = require('../utils/helper');
// const send = require('../../Connectors/SengGridConnector')
const nodemailer = require('nodemailer');

const getAppointments = async (request) => {
    try{
        const payload = request.query
        const {success} = await ReservationService.findAll(payload)
        return {success}
    }
    catch(err){
        console.err(err)
        return {err}
    }
} 

const getAppointmentById = async (request) => {
    try{
        if(!request.query.id){
            throw 'No ID provided!'
        }
        const payload = request.query
        const {success} = await ReservationService.findOne(payload)
        return {success}
    }
    catch(err){
        console.err(err)
        return {err}
    }
}

const updateAppointment = async (request) => {
    try{
        const payload = request.payload
        if(payload.id){
            const {success} = await ReservationService.updateOne(payload)
            return success  
        }
        return {err: 'Did no find an appointment with this id'}
    }
    catch(err){
        console.err(err)
        return {err}
    }
}
const save = async (request) => {
    try {
        let payload = request.body
        let surname = null;
        let fathername = null;
        let name = payload.fullName.split(' ')[0]
        if(payload.fullName.split(' ').length > 1){
            surname = payload.fullName.split(' ')[0]
            name = payload.fullName.split(' ')[1]
            fathername = payload.fullName.split(' ').length > 2 ? payload.fullName.split(' ')[2] : null
        }
        let toSave = {
            name,
            surname,
            fathername,
            email: payload.email,
            phone: payload.phoneNumber,
            description: payload.description,
            reservationId,
            reservationDate: helper.timezonelessTime(payload.startDate.substr(0, 10) + ' ' + payload.selectedTime)
        }
        // let msg = {
        //     to: payload.email, // Change to your recipient
        //     from: 'work.laktionov@gmail.com',
        //     subject: `Dentist Appointment At ${payload.startDate.substr(0, 10) + ' ' + payload.selectedTime} ${payload.fullName}`,
        //     text: `
        //             Name: ${payload.fullName},
        //             Time: ${payload.startDate.substr(0, 10) + ' ' + payload.selectedTime},
        //             Description: ${payload.description},
        //             Contact Number: ${payload.phoneNumber},
        //             Email: ${payload.email}`,
        //     html: `<p>Name: ${payload.fullName},</p>
        //     <p>Time: ${payload.startDate.substr(0, 10) + ' ' + payload.selectedTime},</p>
        //     <p>Description: ${payload.description},</p>
        //     <p>Contact Number: ${payload.phoneNumber},</p>
        //     <p>Email: ${payload.email}</p>`,
        // }
        const {success} = await ReservationService.create(toSave)
        // if(success){
        //     // await send(msg)
        //     const transporter = nodemailer.createTransport({
        //         service: 'gmail',
        //         auth: {
        //           user: 'andrew.wushu@gmail.com',
        //         }
        //       });
    
        //       const mailOptions = {
        //         from: 'work.laktionov@gmail.com',
        //         to: 'work.laktionov@gmail.com',
        //         subject: `Dentist Appointment At ${payload.startDate.substr(0, 10) + ' ' + payload.selectedTime} ${payload.fullName}`,
        //         text: `
        //         Name: ${payload.fullName},
        //         Time: ${payload.startDate.substr(0, 10) + ' ' + payload.selectedTime},
        //         Description: ${payload.description},
        //         Contact Number: ${payload.phoneNumber},
        //         Email: ${payload.email}`
        //       };
        //     await transporter.sendMail(mailOptions)
        // }
        return {success}
    }
    catch(err){
        console.error(err)
        return {error: err}
    }
}

module.exports = {
    save,
    updateAppointment,
    getAppointmentById,
    getAppointments
}