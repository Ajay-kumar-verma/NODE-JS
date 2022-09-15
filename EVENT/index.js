// happening anything is an  Event 

const EventEmitter=require('events');

const event=new EventEmitter();

event.on('yourName',
...x=>{
 console.log("My name is Ajay kumar verma ..! ",x)
  })

event.on('yourName',(...x)=>{
    console.log("My name is Shubham choudhary ..! ",x)
 })
   

setTimeout(() => {
    event.emit('yourName',4,5,"ajay");

}, 3000);


// Event and function are bit similar but has a difference 
// function definiation can be only one and listen only one place 
// Event listner can be multiple and it can be listen from anywhere 
// and it can be fire from anywhere
//  client to server and server to client 
