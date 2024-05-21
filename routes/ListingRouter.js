const express = require("express");
const feedController = require("../controllers/feed.js");
const router = express.Router();

router.get("/items", feedController.getItems);
router.get("/items/count", feedController.getItemsCount);
router.get("/item", feedController.getSingleItem);
router.post("/item", feedController.createItem);

module.exports = router;
