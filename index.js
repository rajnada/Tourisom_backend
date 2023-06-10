const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();
require("./db");
const authRoute = require("./routes/auth");
const path = require("path");

/************ MIDDLEVARES *************/

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add headers in order to perform all operation on API
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Header", "*");

  next();
});

/************ ROUTES *************/
app.use("/api/v1/user", authRoute);


// listen to the port
app.listen(PORT);