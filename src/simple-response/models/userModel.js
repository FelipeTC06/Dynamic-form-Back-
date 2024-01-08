const Sequelize = require('sequelize');
const sequelize = require('../../../database/db.config');

const SimpleResponse = sequelize.define('simple-response', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    gender: {
        type: Sequelize.STRING,
        allowNull: false
    },
    likeSports: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    favSport: {
        type: Sequelize.STRING
    },
    isEmployed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    companyName: {
        type: Sequelize.STRING
    },
    happyPosition: {
        type: Sequelize.STRING
    },
}, {
    tableName: 'simple-response'
});

module.exports = SimpleResponse;
