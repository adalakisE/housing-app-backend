const express = require("express");
const feedController = require("../controllers/feed.js");
const router = express.Router();

router.get("/items", feedController.getItems);
router.post("/item", feedController.createItem);

module.exports = router;
