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
        type: Sequelize.STRING,
        allowNull: true 
      },
      isEmployed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      companyName: {
        type: Sequelize.STRING,
        allowNull: true 
      },
      happyPosition: {
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
