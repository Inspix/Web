var express = require('express');
var router = express.Router();
var projects = require('../modules/projects').projects;

router.get('/', function(req, res, next) {

    var output = {
        css: '/stylesheets/article.css',
        title: 'Software Engineer Wannabe',
        projects: projects ,
        mainArticle: {
            Header: "Learning programming is fun!",
            Info: "Just testing",
            Text: "Its been awhile since i played with JavaScript and HandleBars... and it changed a lot.."
        }

    };


    res.render('article', output);
});

router.get('/article2', function(req, res, next) {

    var output = {
        css: '/stylesheets/article.css',
        title: 'Software Wannabe',
        projects: projects ,
        mainArticle: {
            Header: "Learning programming is fun!",
            Info: "Just testing",
            Text: "Its been awhile since i played with JavaScript and HandleBars... and it changed a lot.."
        }

    };


    res.render('article', output);
});

module.exports = router;
