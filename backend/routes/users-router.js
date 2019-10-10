var express = require('express');
var router = express.Router();
var User = require('../model/User');
var veryfyToken = require('../config/jwt-werify');


router.get('/all', veryfyToken, function (req, res, next) {

  user = User.find({})
    .then((user) => {
      if (user) {
        res.status(201).json(user)
      }
      else {
        res.status(200).json({ message: 'ok' })
      }
    }).catch(err => {
      res.json(err)
    })

});

router.post('/detail', veryfyToken, function (req, res, next) {
  console.log(req.body.id)
  user = User.findOne({ _id: req.body.id })
    .then((user) => {
      if (user) {
        res.status(201).json(user)
      }
      else {
        res.status(200).json({ message: 'ok' })
      }
    }).catch(err => {
      res.json(err)
    })

});

module.exports = router;
