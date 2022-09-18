const fs=require('fs')

fs.writeFileSync("index.txt"," Hi its ajay kumar verma");
fs.appendFileSync("index.txt","\nhello buddy");

// fs.readFile('index.txt','utf-8',(er,data)=>{
//     console.log(data)
// })

// console.log("After logging data")

const data=fs.readFileSync('index.txt','utf-8');
console.log(data);
console.log("After logging data")
