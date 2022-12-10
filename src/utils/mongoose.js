const mongoose = require("mongoose");
const uri =
  "mongodb://localhost:27017" ||
  "mongodb+srv://Rog3rz:1234@cluster0.rtnbvfw.mongodb.net/?retryWrites=true&w=majority";
const options = { dbName: "Task", family: 4, authSource: false };

const connectToMongoDB = () => {
  mongoose
    .set("strictQuery", false)
    .connect(uri, options)
    .then(console.log("MongoDB Connected..."))
    .catch((err) => console.error(err));
};

module.exports = connectToMongoDB;