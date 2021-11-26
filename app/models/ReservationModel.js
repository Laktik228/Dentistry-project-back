const db = require('../../Connectors/MySQLConnector')

const Reservation = db.SequelizeInstance.define('reservations', {
    name: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    surname: {
        type: db.Sequelize.STRING,
        allowNull: true
    },
    fathername: {
        type: db.Sequelize.STRING,
        allowNull: true
    },
    phone: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    reservationDate: {
        type: db.Sequelize.DATE,
        allowNull: false
    },
    customerId: {
        type: db.Sequelize.DATE,
        allowNull: true
    },
    assignedDoctorId: {
        type: db.Sequelize.STRING,
        allowNull: true
    },
    email: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: db.Sequelize.STRING,
        allowNull: true
    }
})

db.SequelizeInstance.sync();

module.exports = Reservation;