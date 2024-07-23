const mongoose = require("mongoose");

mongoose
  .connect(`${process.env.MONGODB_URI}/${process.env.MONGODB_NAME}`)
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log("ERROR WHILE CONNECTING DB", err));

exports.mongoose;
