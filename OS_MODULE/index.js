const os=require('os');

console.log(os.arch())

const mem=os.freemem();
console.log(mem /1024 /1024/ 1024);

console.log(os.totalmem()  /1024 /1024/ 1024)
console.log(os.platform())
console.log(os.type())