const axios=require('axios');

console.log("Api is called ")
axios.post('/localhost:8000/insert', {
    firstName: 'Finn',
    lastName: 'Williams'
  })
  .then((response) => {
    console.log("Responce ",response);
  })
