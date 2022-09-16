var express = require('express');
var app = express();

var sql = require("mssql");

var config = {
    user: 'sa',
    password: 'mypassword',
    server: 'localhost', 
    database: 'SchoolDB' 
};


app.get('/', function (req, res) {
   
    
    sql.connect(config, function (err) {
    
       if (err) console.log(err);

       var request = new sql.Request();
           
       request.query('select * from Student', function (err, recordset) {
            
            if (err) console.log(err)

            res.send(recordset);
            
        });
    });
});


 app.listen(5000, function () {
    console.log('Server is running..');
});
