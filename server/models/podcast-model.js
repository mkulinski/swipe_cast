const Sequelize = require('sequelize');
const dbUrl = 'postgres://localhost:5432/podcast';
const sequelize = new Sequelize(dbUrl);
const User = require('./user-model');

const Podcast = sequelize.define('podcasts', {
  uid: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true },
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: { notEmpty: true },
  },
});

module.exports = Podcast;
