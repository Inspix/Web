var sqlite3 = require('sqlite3').verbose(); // TODO: Remove debug lines

function openDb(readonly){
    return new sqlite3.Database('db/dbtest.sqlite', readonly ? sqlite3.OPEN_READONLY : (sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE), function (err) {
        if(err)
            console.log(err);
    });
}


var projects = [];
exports.loadProjects = function(){
    var database = openDb(false);
    database.serialize(function () {
        database.run('CREATE TABLE IF NOT EXISTS projects(url TEXT,style TEXT, header TEXT, info TEXT, body TEXT)');

        var article = database.prepare('INSERT INTO projects VALUES ($url,$style, $header,$info,$body)');
        for (var i = 0; i < 10; i++) {
            // TODO: Add all needed rows to the table and start populating the db with real data.
            article.run({
                $url: 'project-' + i,
                $style: 'h2,h6 { text-align: center; }' +
                '.main-article-content {color:red;}',
                $header: 'You are watching project' + i,
                $info: 'article ' + i,
                $body: 'test' + i
            });
        }
        article.finalize();

        database.all('SELECT url,header FROM projects ORDER BY ROWID DESC', function (err, row) {
            for(var i = 0; i < 9; i++){
                projects.push({link:'/projects/' + row[i].url,name:row[i].header});
            }
            projects.push({link:'#',name:"More ..."});
        });

    });
    database.close();
};

exports.getDb = openDb;
exports.projects = projects;



