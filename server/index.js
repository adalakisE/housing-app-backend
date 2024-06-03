const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const feedRoutes = require("../routes/ListingRouter");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("../DBConfig.js");

connectDB;

const port = process.env.PORT || 5500;

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

dotenv.config();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);

app.use("/feed", feedRoutes);

app.get("/", (_req, res) => {
  res.send("<h1>NodeJS App</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
