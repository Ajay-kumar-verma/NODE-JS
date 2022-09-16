console.log("api page  hit 1")

const exp=require('express');
const { AggregateError } = require('sequelize');

const allFunction  =require('./sequelize')

const app=new exp();

console.log("api page  hit 2")

app.post('/insert', (req, res) => {
  let data=req.query;  
  allFunction.insertData(data).then(msg=>{
    // console.log(msg); 
    res.send(msg)
  }); 
  })

  console.log("api page  hit 3")


  app.get("/getData",(req,res)=>{

    console.log("get data  called  ")

    allFunction.Book.findAll().then(data=>{
   data=data.map(res=>{
       return res['dataValues']
   })
  res.send(data);
   
});
   })

   console.log("api page  hit 4")


app.get('/findOne',(req,res)=>{
    let data=req.query;  
     allFunction.findOne(data).then(d=>{
      console.log()
       
      
      res.send(d); 
     })
})

console.log("api page  hit 5")

app.put("/",(req,res)=>{

    res.send("Data updated ") 

})

console.log("api page  hit 6")

app.delete('/', (req, res) => {
  let data=req.query;  
  allFunction.del(data) 
   res.send("Data delete")

})
   

app.post("*",(req,res)=>{
     res.send("Invalid request")

})

app.get("*",(req,res)=>{
    res.send("Invalid request")

})

const port="8000"


app.listen(port,"localhost", () => {
    console.log(`Example app listening on port ${port}`)
  })
  

//    In memory everything is mapped 

// {
//   in key value pair  nothing reapeat twice or more unneccsaary 1
// }



