'use strict';
const Sequelize=require("sequelize");
module.exports = (sequelize) => {
  const shop = sequelize.define('shop', {
    name:{
      type: Sequelize.STRING,
      allowNull:false
    },
    comment:{
      type:Sequelize.TEXT(300),
      allowNull:false
    }
  }, {});
  shop.associate = function(models) {
    // associations can be defined here
    shop.hasMany(models.Coffee);
  };
  return shop;
};