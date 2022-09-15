//ExpressJS is a prebuilt NodeJS framework that can help you in creating server-side
// web applications faster and smarter. Simplicity, minimalism, flexibility, scalability 
//are some of its characteristics and since it is made in NodeJS itself, it inherited its performance 
// as well

// console.log("Express js is running here ...!");

// class clx{
//     x="Ajay kumar verma";
//     f(){
//         console.log("ajay kumar verma ");
//     }

// }


// console.log( clx);

const exp=require('express');

const app=new exp();

app.get('/', (req, res) => {
    res.send(' Hi this is a home page ')
  })


  app.get('/about', (req, res) => {
    res.send('Hi this is about page !')
  })

  app.get('*x',(req,res)=>{
    res.send("<h1 style='color:red'>Invalid url </h1>"+req.url)
  })
  

  app.get('*',(req,res)=>{
    res.send("<h1 style='color:blue'>page does not exist  </h1>"+req.url)
  })
  
  

  app.get('/', (req, res) => {
    res.send(' Hi this is a home page ')
  })


  app.post('/about', (req, res) => {
    res.send('Hi this is about page ! by post method ')
  })

  app.post('*x',(req,res)=>{
    res.send("<h1 style='color:red'>Invalid url </h1> by post method "+req.url)
  })
  

  app.post('*',(req,res)=>{
    res.send("<h1 style='color:blue'>page does not exist  </h1> by post method"+req.url)
  })
  


  const port="3000"
  app.listen(port,"localhost", () => {
    console.log(`Example app listening on port ${port}`)
  })