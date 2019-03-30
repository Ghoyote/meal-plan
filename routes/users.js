var express = require('express');
var router = express.Router();
var User = require('../models/user');
/* GET users listing. */
router.get('/create', function(req, res, next) {
  var newUser = new User({
    name: {
      first: req.body.firstName,
      last: req.body.lastName,
      middle: req.body.middleName
    },
    school_id: req.body.schoolId,
    subscription_type: req.body.subscription
  });

  newUser.save(function(err, result) {
    if (err) return res.json(err);
    res.json(result);
  });
});

module.exports = router;
