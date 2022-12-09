const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://localhost:27017/Task")
  .then(() => console.log("MongoDB Connected..."))
  .catch((error) => console.log(error));
