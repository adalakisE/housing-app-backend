const express = require("express");
const dataListing = require("../api/listings.mock");

const app = express();

const port = process.env.PORT || 3030;

app.get("/", (req, res) => {
  res.send("<h1>NodeJS App</h1>");
});

app.get("/listings.json", (req, res) => {
  res.send(dataListing);
});

app.get("/test", (req, res) => {
  res.send(testVar);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const testVar = "testVar1";