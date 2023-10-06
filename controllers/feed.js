const ItemModel = require("../models/item");

exports.getItems = (req, res, _next) => {
  const reqPrice = req.query.price?.length ? parseInt(req.query.price) : 0;
  const reqSize = req.query.size?.length ? parseInt(req.query.size) : 0;
  const reqBedrooms = req.query.bedrooms?.length
    ? parseInt(req.query.bedrooms)
    : 0;

  var reqTitle = req.query.title;
  reqTitle = new RegExp(reqTitle, "i");

  console.log(req.query);
  console.log(reqPrice, reqSize, reqBedrooms);
  console.log(reqTitle);
  // return an array of items
  ItemModel.find({
    price: { $gt: reqPrice },
    sqFt: { $gt: reqSize * 10.764 }, // convert to sqFt
    bedrooms: { $gt: reqBedrooms },
    $or: [{ title: reqTitle }, { area: reqTitle }, { description: reqTitle }],
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
