'use strict';
const Sequelize=require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Coffee = sequelize.define('Coffee', {
    name: Sequelize.STRING(50),
    type: Sequelize.STRING(50)
  }, {});
  Coffee.associate = function(models) {
    // associations can be defined here
   Coffee.belongsTo(models.shop);
  };
  return Coffee;
};