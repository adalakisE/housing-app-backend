const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  sqFt: {
    type: Number,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  bedrooms: {
    type: Number,
    required: true,
  },
  latitude: {
    type: Number,
    required: false,
  },
  longitude: {
    type: Number,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const ItemModel = mongoose.model("Item", ItemSchema);

module.exports = ItemModel;
