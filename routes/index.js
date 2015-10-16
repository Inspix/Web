var express = require('express');
var router = express.Router();
var projects = require('../modules/database');

/* GET home page. */
router.get('/', function(req, res, next) {
  var output = {
      css: "/stylesheets/index.css",
      title: 'Software Engineer Wannabe',
      projects: projects.projects
  };


  res.render('index', output);
});

module.exports = router;
