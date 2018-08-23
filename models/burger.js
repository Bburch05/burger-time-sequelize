module.exports = function(sequelize,DataType){
  var Burger = sequelize.define("burgers",{
    name: DataType.STRING,
    devoured: {
      type: DataType.BOOLEAN,
      defaultValue: false
    }
  })
  return Burger;
};