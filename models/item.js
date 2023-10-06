const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  date: { type: Date, default: Date.now },
});

const ItemModel = mongoose.model("Item", ItemSchema);

module.exports = ItemModel;
