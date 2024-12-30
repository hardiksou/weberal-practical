const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const database = "e-comm";
const client = new MongoClient(url);

async function getData() {
  let result = await client.connect();
  let db = await result.db(database);
  return db.collection("product");
  //   console.log(await collction.find({}).toArray());
}
module.exports = getData;
