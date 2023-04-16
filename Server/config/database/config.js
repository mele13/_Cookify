const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'cookify',
  username: 'mele',
  password: '626Stitch'
});

module.exports = sequelize;