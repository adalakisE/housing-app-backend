const ItemModel = require("../models/item");

exports.getItems = (req, res, _next) => {
  const reqPrice = parseInt(req.query.price);
  const reqSize = parseInt(req.query.size);
  const reqBedrooms = parseInt(req.query.bedrooms);

  var reqTitle = req.query.title;
  reqTitle = new RegExp(reqTitle, "i");

  // return an array of items
  ItemModel.find({
    price: { $gt: reqPrice },
    sqFt: { $gt: reqSize },
    bedrooms: { $gt: reqBedrooms },
    title: reqTitle,
    area: reqTitle,
    description: reqTitle,
  }).then((foundItems) => {
    res.json({
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
