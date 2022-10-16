const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://app-finance-main-db-0064c4eaebd:jfhyPsd53aW6v3CRJJzCmPp7Y4GKSn@prod-us-central1-1.lfuy1.mongodb.net/app-finance-main-db-0064c4eaebd', {
  useUnifiedTopology: true,
  useNewUrlParser: true
})
  .then(db => console.log('Db is connected'))
  .catch(err => console.log(err));

// const { MongoClient, ServerApiVersion } = require('mongodb');

// const uri = "mongodb+srv://AppFinance:KiqgOT6gXnh27bl2@cluster0.pwj7tro.mongodb.net/?retryWrites=true&w=majority";

// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });