var express = require('express');
var router = express.Router();
var User = require('../model/User')
var jwt = require('jsonwebtoken');
var key = require('../config/key');
const bcryptjs = require('bcryptjs');

/* GET users listing. */
router.post('/login', function (req, res, next) {
  user = User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        res.status(201).json({ message: 'Email not found' ,token:''})
      }
      else {
        bcryptjs.compare(req.body.password, user.password, function (err, result) {
          if (err) { console.log(err) }
          if (result) {
            jwt.sign({ name: user.name, email: user.email }, key.secretkey, function (err, token) {
              res.status(201).json({ message: 'login successfully', token });
            });
          } else {
            res.status(201).json({ message: 'invalid Password',token:'' })
          }
        });

      }
    }).catch(err => { res.json(err) })

});
/* GET users listing. */
router.post('/register', function (req, res, next) {
  const user = new User(req.body);
  bcryptjs.genSalt(10, (err, salt) => {
    bcryptjs.hash(user.password, salt, function (err, hash) {
      user.password = hash;
      user.save()
        .then((user) => {
          if (user) {
            res.status(200).json({ message: 'Registred successfully' })
          }
          else {
            res.status(201).json({ message: 'unable to register' })
          }
        }).catch(err => {
          res.json(err)
        })

    })
  });

});
/* GET users listing. */
router.post('/emailExist', function (req, res, next) {
  user = User.findOne({ email: req.body.email })
    .then((user) => {
      if (user) {
        res.status(201).json({ message: 'Email already registerd' })
      }
      else {
        res.status(200).json({ message: '' })
      }
    }).catch(err => {
      res.json(err)
    })

});
/* GET users listing. */


module.exports = router;
