const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
require("dotenv/config");

// Import Routesz
const postsRoute = require("./routes/posts");

app.use(bodyParser.json());
app.use("/posts", postsRoute);

// Routes
app.get("/", (req, res) => {
  res.send("We are on home");
});

// Conncetion to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("Connected to DB!")
);
// Listen
app.listen(3000);
