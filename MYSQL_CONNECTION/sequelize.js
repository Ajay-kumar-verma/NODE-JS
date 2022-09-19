// Sequelize provides various methods to assist querying your database for data.
// console.log("Sequelize page  is hit ... ")

const  {Sequelize , Model, DataTypes, JSON}  = require('sequelize');
// console.log("This is sequlized ")

const database="RMH_PBECB"

const sequelize = new Sequelize(database, 'NFCMStoRMH', 'Pckg$tatus=925',
 {
  host: 'cb.pos.postboxesetc.com', dialect: 'mssql', port:1434
 });

  try {
     (async ()=>{
      await sequelize.authenticate();
    console.log('database connected ..!');
    
     })()   
 

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  Model?.Item?.find().then(data => console.log("data",data)).catch(e => console.log("ee",e))
  // sequelize?.Item?.findAll().then(data => {
  //   console.log(data,"fetched data ");
  // }).catch(e => console.log("err",e))



// const Book = sequelize.define("users", {
//    title: {
//      type: DataTypes.STRING,
//     },
//    author: {
//      type: DataTypes.STRING,
//    },
//    release_date: {
//      type: DataTypes.STRING,
//    },
//    subject: {
//      type: DataTypes.STRING,
//    }
// });

// (async ()=>{
// await sequelize.sync({ force: true }); 
// })()

return ;




return ;    

 


async function insertData(obj){
    //  await sequelize.sync({ force: true });
     await Book.create(obj);
      return "Data inserted ";
}

  function getData(){

    Book.findAll().then(data => {
      console.log(data,"fetched data ");
    });
     return "All datas";    

    
}

async function findOne(obj){
  const data = await Book.findOne({ where: obj });
 
  return "Data deleted"+data;
  
}

async  function del(obj){
  const data=  await Book.destroy({where:obj});
//   console.log("Data inserted ")
  return data;
}

async function update(newObj,condition){
    await Book.update(newObj, {where: condition });
}





const allFunction={insertData,getData,Book,findOne,del,update};


module.exports=allFunction;


