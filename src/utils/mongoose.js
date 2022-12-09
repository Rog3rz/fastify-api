const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017";
const options = { dbName: "Task", family: 4, authSource: false };

mongoose
  .set("strictQuery", false)
  .connect(uri, options)
  .then(console.log("MongoDB Connected..."))
  .catch((err) => console.error(err));
