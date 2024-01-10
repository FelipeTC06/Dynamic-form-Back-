'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('threaded_response', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
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
        type: Sequelize.STRING,
        allowNull: true 
      },
      wor_isEmployed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      wor_companyName: {
        type: Sequelize.STRING,
        allowNull: true 
      },
      wor_happyPosition: {
        type: Sequelize.STRING,
        allowNull: true 
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('threaded_response');
  }
};
