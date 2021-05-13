const express = require('express')
const bodyParser  = require('body-parser')
const cors  = require('cors')
const app = express()
app.use(cors()) 
app.use(bodyParser.json())
const port = 3000

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://<username>:<password>@cluster0.kv6ok.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const postCollection = client.db("test").collection("devices");
 
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})