'use strict';
module.exports = (sequelize, DataTypes) => {
  const SAdata = sequelize.define('SAdata', {
    temp: DataTypes.DECIMAL,
    airPwm: DataTypes.INTEGER,
    pot: DataTypes.DECIMAL,
    photo: DataTypes.BOOLEAN,
    lightbuldPwm: DataTypes.INTEGER,
    led: DataTypes.BOOLEAN,
    servoPwm: DataTypes.INTEGER,
    pulse: DataTypes.BOOLEAN
  }, {
 paranoid: true,
    underscored: true
});
  SAdata.associate = function(models) {
    // associations can be defined here
  };
  return SAdata;
};
