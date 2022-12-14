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


/**
 *  https://stackoverflow.com/questions/31089221/what-is-the-difference-between-put-post-and-patch#:~:text=POST%20is%20always%20for%20creating,always%20for%20updating%20a%20resource
 * 
 *   https://expressjs.com/en/4x/api.html#router.METHOD
 * 
 *  
 *    Refer this for routing 
 *   https://expressjs.com/en/guide/routing.html
 *  */






const exp=require('express');
const cors = require("cors");
const app=new exp();


// app.use(exp.urlencoded({ extended: true }))
app.use(exp.json())
app.use(cors())

app.all('*', function (req, res, next) {
   console.log('API CALLED',req.method);

  next();
});

app.get('/', async (req, res) => {
    console.log(req?.body);
    res.send(req?.body);  
 
  })

  app.post('/', async (req, res) => {
    console.log(req?.body);
    res.send(req?.body);
  })



  app.put('/', async(req, res) => {
    console.log(req?.body);
    res.send(req?.body);
  })




  app.patch('/', async (req, res) => {
    console.log(req?.body);
    res.send(req?.body);
  })

  app.delete("/", async  (req,res)=>{
    console.log(req?.body);
    res.send(req?.body);
    
  })

app.get("/qry",(req,res)=>{
  console.log("Get api hit with Query ")  
 const data=req.query;
 console.log(req.search)
 console.log(req?.body);
  res.send(req?.body);

})

app.get("/:id",(req,res)=>{
  console.log("Get api hit with id ")  

 console.log(req.params.id);
  res.send(req?.body);

})





  app.get('*x', async (req,res)=>{
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