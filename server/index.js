const express = require("express");
const cors = require("cors");

const feedRoutes = require("../routes/ListingRouter");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("../DBConfig.js");

connectDB;

const port = process.env.PORT || 3030;

app.use(express.json());

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
