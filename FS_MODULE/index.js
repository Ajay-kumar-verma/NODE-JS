const fs=require('fs')

fs.writeFileSync("index.txt"," Hi its ajay kumar verma");

fs.appendFileSync("index.txt","\nhello buddy");

fs.renameSync('index.txt','index.pdf');

const buffer_data=fs.readFileSync('index.pdf','utf8');
console.log(buffer_data)
const data=buffer_data.toString();

console.log(data);
fs.unlinkSync('index.pdf');
// dir creation 


try {
   fs.mkdirSync("Index");    
} catch (error) {
//  console.log(error)
 console.log("Error");
}
fs.appendFileSync('Index/index.txt',"Hello Its me ");
fs.appendFileSync('Index/index.txt',"\nAjay kumar verma ");

// // fs.renameSync('Index','indexs');
// fs.renameSync('indexs/index.txt',"indexs/index.pdf");

  fs.mkdirSync("Ajay")  
fs.rmdirSync("Ajay");

fs.readFile('indexs/index.pdf','utf8',(er,data)=>{
 er && console.log(" Error ");
  if(er) return; 

  console.log(data)
})

