const Sequelize = require('sequelize');
const dbUrl = 'postgres://localhost:5432/podcast';
const sequelize = new Sequelize(dbUrl);

const Podcast = require('./podcast-model');
const User = require('./user-model');

const UserPodcasts = sequelize.define('UserPodcasts', {

});

Podcast.belongsToMany(User, { through: UserPodcasts });
User.belongsToMany(Podcast, { through: UserPodcasts });

module.exports = UserPodcasts;
