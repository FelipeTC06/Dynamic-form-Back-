'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('simple-response', {
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
        allowNull: false,
        defaultValue: false
      },
      favSport: {
        type: Sequelize.STRING,
      },
      isEmployed: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      companyName: {
        type: Sequelize.STRING,
      },
      happyPosition: {
        type: Sequelize.STRING,
        allowNull: false,
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
    await queryInterface.dropTable('users');
  }
};
