const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://tuitionwalah:9ixvBrAp9ObUA1k0@cluster0.u6jzbxy.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log(err)
console.log(collection)
//   .l
//   .close();
});

// client.