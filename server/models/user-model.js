const Sequelize = require('sequelize');
const dbUrl = 'postgres://localhost:5432/podcast';
const sequelize = new Sequelize(dbUrl);

const User = sequelize.define('users_tb', {
  username: {
    type: Sequelize.VARCHAR,
  },
  password: {
    type: Sequelize.VARCHAR,
  },
  email: {
    type: Sequelize.VARCHAR,
  },
});

module.exports = User;
