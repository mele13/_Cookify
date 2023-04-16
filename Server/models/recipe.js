const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database/config');

class Recipe extends Model {}

Recipe.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  ingredients: {
    type: DataTypes.ARRAY(DataTypes.TEXT),
    allowNull: false
  },
  directions: {
    type: DataTypes.ARRAY(DataTypes.TEXT),
    allowNull: false
  },
  image_url: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  sequelize,
  modelName: 'Recipe',
  tableName: 'recipes',
  underscored: true
});

module.exports = Recipe;
