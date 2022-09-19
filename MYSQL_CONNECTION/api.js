
// const allFunction  =require('./sequelize');

const exp=require('express');
const cors = require("cors");
const app=new exp();

app.use(exp.urlencoded({ extended: true }))
app.use(exp.json())
app.use(cors())


app.get('/', async (req, res) => {

  console.log("get api hit ...!");
    allFunction.getData().then(data=>{
      console.log(data);
    })

  //  console.log(data); 
   res.send("ajay kumar verma");
     
 })

  
app.post('/',async (req,res)=>{
   
    try {
      const data =await req?.body;
      allFunction.insertData(data);
      console.log("data inserted "); 
      res.send(data)

    } catch (error) {
      console.log(error);
      res.send(error)
    }

})



  

  const port="7000"
  app.listen(port,"localhost", () => {
    console.log(`Example app listening on port ${port}`)
  })