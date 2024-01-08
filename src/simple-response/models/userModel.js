const Sequelize = require('sequelize');
const sequelize = require('../../../database/db.config');

const User = sequelize.define('User', {
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
  }
});

module.exports = User;
