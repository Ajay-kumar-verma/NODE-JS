const exp=require('express');
// const { AggregateError } = require('sequelize');

// const allFunction  =require('./sequelize')

const app=new exp();

app.post('/', async (req, res) => {
  
  try{
    const data =  req.body
     res.send("Ajay kyumar vetrma"+data)
   }
   catch(e){
  console.log(e)
  res.send(e);  
}


  // let data=req.query;  
  // allFunction.insertData(data).then(msg=>{
  //   // console.log(msg); 
  //   res.send(msg)
  // }); 
 
})


  app.get("/getData",(req,res)=>{

    console.log("get data  called  ")

    allFunction.Book.findAll().then(data=>{
   data=data.map(res=>{
       return res['dataValues']
   })
  res.send(data);
   
});
   })



app.get('/findOne',(req,res)=>{
    let data=req.query;  
     allFunction.findOne(data).then(d=>{
      console.log()
       
      
      res.send(d); 
     })
})


app.put("/",(req,res)=>{

    res.send("Data updated ") 

})


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



