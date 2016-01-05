var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/hello', function(req, res, next) {
  res.render('hello', { title: 'Express' });
});
router.get('/123', function(req, res, next) {
  res.render('index1', { title: 'Express' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});
router.get('/Portfolio', function(req, res, next) {
  res.render('PORTFOLIO', { title: 'Express' });
});


module.exports = router;
