const express = require("express");
const dataListing = require("../api/listings.mock");
const cors = require("cors");

const app = express();

const port = process.env.PORT || 3030;

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);

app.get("/", (req, res) => {
  res.send("<h1>NodeJS App</h1>");
});

app.get("/listings.json", (req, res) => {
  res.send(dataListing);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
