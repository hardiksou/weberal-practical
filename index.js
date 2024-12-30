const express = require("express");
const getData = require("./mongodb");
const { addUserValidation } = require("./validation");
const { message } = require("./joi");
const mongodb = require("mongodb");
const app = express();
app.use(express.json());

app.post("/registrion", addUserValidation, async (req, resp) => {
  //   console.log(req.body);
  const data = await getData();
  let result = await data.insertOne(req.body);
  console.log(result);
  resp.send({ message: "Data Save Succesfully" });
});

app.get("/userData", async (req, resp) => {
  //   console.log(req.body);
  let data = await getData();
  data = await data.find({}).toArray();
  resp.send(data);
});

app.put("/update/:id", addUserValidation, async (req, resp) => {
  let data = await getData();
  let result = await data.updateOne(
    { id: req.body.params },
    { $set: req.body }
  );
  console.log(result);
  resp.send(result);
});

app.delete("/delete/:id", async (req, resp) => {
  let data = await getData();
  let result = await data.deleteOne({
    _id: new mongodb.ObjectId(req.params.id),
  });
  resp.send(result);
});

app.listen(5000, () => {
  console.log("server Run");
});
