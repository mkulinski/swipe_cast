const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const userCtrl = require('./controllers/user-controller');
const podcastCtrl = require('./controllers/podcast-controller');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './src')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './../src/index.html'));
});

app.listen(3000, () => console.log('servering port 3000'));
