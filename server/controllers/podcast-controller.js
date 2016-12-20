const Podcast = require('../models/podcast-model');
const User = require('../models/user-model');

const podcastCtrl = {};

podcastCtrl.getAllPodcasts = (req, res) =>
  Podcast.findAll()
  .then(podcasts =>
    console.log(podcasts)
  );

podcastCtrl.addPodcast = (req, res) => {
  User.find({
    where: { username: 'nopmike' },
  })
    .then((user) => {
      console.log('found johny', user)
      Podcast.findAll({ where: { name: 'The Changelog' } }).then((podcast) => {
        console.log('did something');
        user.setPodcasts(podcast);
      });
    });
}



module.exports = podcastCtrl;
