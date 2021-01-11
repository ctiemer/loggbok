var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  var log = {"content": req.body.content}
  fs.writeFile(__dirname + '/../data/logs.json', JSON.stringify(log) , (err) => {
    if (err) throw err;
  });
  res.redirect('/');
});
module.exports = router;
