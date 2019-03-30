var express = require('express');
var router = express.Router();
var Subscription = require('../models/subscription');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/subscription/create', function(req, res, next) {
  var newSubscription = new Subscription({
    id: req.body.subId,
    name: req.body.subName,
    meal: req.body.meal,
    snack: req.body.snack,
    amount: req.body.amount,
    numberOfMeals: req.body.numberOfMeals
  });
  newSubscription.save(function(err, result) {
    if (err) return res.json(err);
    res.json(result);
  });
});
module.exports = router;
