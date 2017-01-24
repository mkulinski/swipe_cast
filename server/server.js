const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const Podcast = require('./models/podcast-model');
const User = require('./models/user-model');
const UserPodcasts = require('./models/user_podcast-model');

const userCtrl = require('./controllers/user-controller');
const podcastCtrl = require('./controllers/podcast-controller');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './src')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, './../src/index.html')));

app.get('/api/users', userCtrl.getAllUsers);
app.get('/api/podcasts', podcastCtrl.getAllPodcasts);
app.get('/api/add-pod', podcastCtrl.addPodcast);


// // force: true will drop the table if it already exists
// UserPodcasts.sync({ force: true }).then(function () {
//   // Table created
//   console.log('table created')
//   // return User.create({
//   //   username: 'John',
//   //   password: 'Hancock',
//   //   email: 'me@michaelkulinski.com',
//   // });
// });


app.listen(3000, () => console.log('servering port 3000'));
