var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var output = {
      title: 'Software Engineer Wannabe',
      projects: [
          {link:"#",name:"Advanced C# TeamWork"},
          {link:"#",name:"Java Fundamentals TeamWork"},
          {link:"#",name:"Advanced C# TeamWork"},
          {link:"#",name:"Java Fundamentals TeamWork"},
          {link:"#",name:"Advanced C# TeamWork"},
          {link:"#",name:"Java Fundamentals TeamWork"},
          {link:"#",name:"Advanced C# TeamWork"},
          {link:"#",name:"Java Fundamentals TeamWork"},
          {link:"#",name:"Advanced C# TeamWork"},
          {link:"#",name:"Java Fundamentals TeamWork"},
          {link:"#",name:"Advanced C# TeamWork"},
          {link:"#",name:"Java Fundamentals TeamWork"}
      ],
      mainArticle: {
          Header: "Learning programming is fun!",
          Info: "Just testing",
          Text: "Its been awhile since i played with JavaScript and HandleBars... and it changed a lot.."
      }

  };


  res.render('index', output);
});

module.exports = router;
