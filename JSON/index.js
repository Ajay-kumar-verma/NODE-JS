// JSON stand for javascript object Notation 
//  It is very usefull for Api creation 

const fs= require('fs');
let json={name:"ajay kumar verma",mob:8095240876,email:"ajay997354@gmail.com"}
 json=JSON.stringify(json);
 console.log(json)
fs.writeFileSync('index.json', json);

