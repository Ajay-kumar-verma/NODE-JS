// happening anything is an  Event 

const EventEmitter=require('events');

const event=new EventEmitter();

event.on('yourName',()=>{
 console.log("My name is Ajay kumar verma ..! ")
  })

event.on('yourName',()=>{
    console.log("My name is Shubham choudhary ..! ")
 })
   

setTimeout(() => {
    event.emit('yourName');
 
}, 3000);


// Event and function are bit similar but has a difference 
// function definiation can be only one and listen only one place 
// Event listner can be multiple and it can be listen from anywhere 
// and it can be fire from anywhere
//  client to server and server to client 
