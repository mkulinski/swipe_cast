const User = require('../models/user-model');

const userCtrl = {};

userCtrl.getAllUsers = (req, res) =>
  User.findAll()
  .then(users =>
    console.log(users)
  );

module.exports = userCtrl;
