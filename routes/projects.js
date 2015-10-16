var express = require('express');
var router = express.Router();
var db = require('../modules/database');

router.get(/project-.*/, function(req, res, next) {

    var database = db.getDb(true);

    database.serialize(function(){
        database.get("SELECT * FROM projects WHERE url='" + req.url.substr(1,req.url.length) + "'",function (err,row){
            if(err || row == undefined){
                res.status(404);
                res.render('error', {
                    message: 'not found',
                    error: 'the page you are looking for does not exist'
                });
                return;
            }
            console.log(row); // TODO: Remove debug lines
            row.projects = db.projects;
            res.render('project', row);
            console.log(req.url + ' ' + req.url.substr(1,req.url.length) + ':' + row); // TODO: Remove debug lines
        });
    });

    database.close();
});

module.exports = router;
