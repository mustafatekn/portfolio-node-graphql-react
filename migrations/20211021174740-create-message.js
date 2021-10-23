'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('messages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      subject: {
        type:Sequelize.STRING(50),
        allowNull:false,
      },
      email: {
        type:Sequelize.STRING(50),
        allowNull:false,
        validate:{
          isEmail:{
            args:true,
            msg:'Geçersiz email.'
          }
        }
      },
      content: {
        type:Sequelize.STRING,
        allowNull:false
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
    await queryInterface.dropTable('messages');
  }
};