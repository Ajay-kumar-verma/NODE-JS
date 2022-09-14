console.log(typeof require('./main'))
// when we stringify it leave the function 
console.log((require('./main')))

const {add,name ,clx}= require('./main')

console.log(name);

console.log(add(4,6),clx.sub(5,7))

