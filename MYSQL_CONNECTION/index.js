const  mysql = require('mysql');

const con = mysql.createConnection({ host: "localhost", user: "root", password: "" });

// con.connect(err=> {
//   if(err) throw err;
//    console.log("Connected!");
// })
// 9ixvBrAp9ObUA1k0

con.query("CREATE DATABASE ajay ", function (err, result) {
    if (err) throw err;
    console.log("Database created");
 
 
  });

