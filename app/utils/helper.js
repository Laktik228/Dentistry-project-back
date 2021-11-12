const moment = require('moment');

module.exports = {
    validateScheme: (schema) => {
        return (req, res, next) => {
            const {error} = schema.validate(req.body, {abortEarly: false, allowUnknown: true, stripUnknown: true})
            console.log(req.body)
            if(error){
                const {details} = error;
                console.log(req.body, details)
                let message = ''
                for(let detail of details){
                    message += detail.message + details.indexOf(detail) === details.length ? ';' : ', ' 
                }
                res.status(422).json({error: message})
            }
            else{
                next()
            }
        }
    },
    timezonelessTime: (date) => {
        return moment(date).utcOffset(0, true).format()
    }
}