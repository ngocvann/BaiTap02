"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      email: Sequelize.STRING,
      password: Sequelize.STRING,
      firstName: Sequelize.STRING,
      lastName: Sequelize.STRING,
      address: Sequelize.STRING,
      phoneNumber: Sequelize.STRING,
      gender: Sequelize.BOOLEAN,
      image: Sequelize.STRING,
      roleId: Sequelize.STRING,
      positionId: Sequelize.STRING,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};
