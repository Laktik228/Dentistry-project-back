const db = require('../../Connectors/MySQLConnector')

const Users = db.SequelizeInstance.define('users', {
    name: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    surname: {
        type: db.Sequelize.STRING,
        allowNull: true
    },
    address: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: db.Sequelize.STRING,
        allowNull: true
    },
    pps: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    createdAt: {
        type: db.Sequelize.DATE,
        allowNull: false
    },
    type: {
        type: db.Sequelize.STRING,
        allowNull: false,
        default: 'PATIENT'
    },
    doctorId: {
        type: db.Sequelize.STRING,
        allowNull: true
    },
    staffId: {
        type: db.Sequelize.STRING,
        allowNull: true
    },
    education: {
        type: db.Sequelize.STRING,
        allowNull: true
    },
    password: {
        type: db.Sequelize.STRING,
        allowNull: false
    }
})

db.SequelizeInstance.sync();

module.exports = Users;