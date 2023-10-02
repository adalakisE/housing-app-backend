const ItemModel = require("../models/item");

exports.getItems = (_req, res, _next) => {
  // return an array of items
  ItemModel.find().then((foundItems) => {
    res.json({
      // message: "All items",
      items: foundItems,
    });
  });
};

exports.createItem = (req, res, next) => {
  // get items's title and content from the request
  // create a new item instance
  const title = req.body.title;
  const description = req.body.description;

  const item = new ItemModel({
    title: title,
    description: description,
  });

  console.log(title, description);

  // save the instance to the database
  item
    .save()
    .then((itemSaved) => {
      res.status(201).json({
        message: "Item created successfully!",
        item: itemSaved,
      });
    })
    .catch((err) => console.log("err", err));
};
