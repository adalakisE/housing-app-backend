const express = require("express");
const feedController = require("../controllers/feed.js");
const router = express.Router();

router.get("/items", feedController.getItems);
router.get("/item", feedController.getItem);
router.post("/item", feedController.createItem);

module.exports = router;
