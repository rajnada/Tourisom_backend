const mongoose = require("mongoose");
const { MongoUrl } = require("./config");
require("dotenv/config");

return mongoose.connect(
    MongoUrl,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("conected to db")
);