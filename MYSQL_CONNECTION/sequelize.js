// Sequelize provides various methods to assist querying your database for data.
console.log("Sequelize page  is hit ... ")

const  {Sequelize , DataTypes, JSON}  = require('sequelize');
console.log("This is sequlized ")

const database="Ajay"

const sequelize = new Sequelize(database, 'root', '', {host: 'localhost',dialect: 'mysql'});

  try {
     sequelize.authenticate();
    console.log('database connected ..!');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }


const Book = sequelize.define("books", {
   title: {
     type: DataTypes.STRING,
    },
   author: {
     type: DataTypes.STRING,
   },
   release_date: {
     type: DataTypes.DATEONLY,
   },
   subject: {
     type: DataTypes.INTEGER,
   }
});
  
async function insertData(obj){
    //  await sequelize.sync({ force: true });
     await Book.create(obj);
      return "Data inserted ";
}

 function getData(){
     Book.findAll().then(res => {
          console.log(res[0]["dataValues"])

        return   res;
        }).catch((error) => {
           return 'Failed to retrieve data : '+ error;
        });
    
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


