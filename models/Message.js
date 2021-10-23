'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Message.init({
    subject: {
      type:DataTypes.STRING(50),
      allowNull:false,
    },
    email: {
      type:DataTypes.STRING(50),
      allowNull:false,
      validate:{
        isEmail:{
          args:true,
          msg:'Geçersiz email.'
        }
      }
    },
    content: {
      type:DataTypes.STRING,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Message',
    tableName:'messages'
  });
  return Message;
};