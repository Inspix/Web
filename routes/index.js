var express = require('express');
var router = express.Router();
var projects = require('../modules/projects');

/* GET home page. */
router.get('/', function(req, res, next) {
  var output = {
      css: "/stylesheets/index.css",
      title: 'Software Engineer Wannabe',
      projects: projects.projects,
      mainArticle: {
          Header: "Learning programming is fun!",
          Info: "Just testing",
          Text: "Its been awhile since i played with JavaScript and HandleBars... and it changed a lot.."
      }

  };


  res.render('index', output);
});

module.exports = router;
