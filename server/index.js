const express = require("express");
const axios = require("axios");

const app = express();

const port = process.env.PORT || 3030;
const path = "api/listings.json";

app.get("/", (req, res) => {
  res.send("<h1>NodeJS App</h1>");
});

app.get("/listings.json", (req, res) => {
  axios.get(`${path}/listings.json`).then((response) => {
    res.send(response.data);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
