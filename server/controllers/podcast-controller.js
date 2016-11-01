const Podcast = require('../models/podcast-model');
const User = require('../models/user-model');

const podcastCtrl = {};

podcastCtrl.getAllPodcasts = (req, res, next) =>
  Podcast.findAll()
  .then(podcasts =>
    console.log(podcasts)
  );

podcastCtrl.addPodcast = (req, res, next) => {
  User.find({
    where: { username: 'nopmike' },
  })
    .then(function(user) {
      console.log('found johny', user)
      Podcast.findAll({ where: { name: 'The Changelog' } }).then(function(podcast){
        console.log('did something');
        user.setPodcasts(podcast);
      });
    });
}



module.exports = podcastCtrl;
