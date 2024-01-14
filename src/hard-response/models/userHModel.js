const Sequelize = require('sequelize');
const sequelize = require('../../../database/db.config');

const HardResponse = sequelize.define('hard_response', {
    per_firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    per_lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    per_gender: {
        type: Sequelize.STRING,
        allowNull: false
    },
    per_likeSports: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    per_favSport: {
        type: Sequelize.STRING
    },
    wor_isEmployed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    wor_companyName: {
        type: Sequelize.STRING
    },
    wor_happyPosition: {
        type: Sequelize.STRING
    }
}, {
    tableName: 'threaded_response'
});

module.exports = HardResponse;
