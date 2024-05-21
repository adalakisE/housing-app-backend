const ItemModel = require("../models/item");

exports.getSingleItem = (req, res, _next) => {
  const reqId = parseInt(req.query.id);

  ItemModel.findOne({ id: reqId }).then((item) => res.json(item));
};

exports.getItems = (req, res, _next) => {
  // const reqPrice = req.query.price?.length ? parseInt(req.query.price) : 0;
  console.log(req.query);
  const reqMinPrice = req.query.minPrice?.length
    ? parseInt(req.query.minPrice)
    : 0;
  const reqMaxPrice = req.query.maxPrice?.length
    ? parseInt(req.query.maxPrice)
    : 10000;
  const reqMinSize = req.query.minSize?.length
    ? parseInt(req.query.minSize)
    : 0;
  const reqMaxSize = req.query.maxSize?.length
    ? parseInt(req.query.maxSize)
    : 10000;
  const reqMinBedrooms = req.query.minBedrooms?.length
    ? parseInt(req.query.minBedrooms)
    : 0;
  const reqMaxBedrooms = req.query.maxBedrooms?.length
    ? parseInt(req.query.maxBedrooms)
    : 10;

  var reqTitle = req.query.title;
  reqTitle = new RegExp(reqTitle, "i");

  console.log("search:");
  console.log(reqMaxPrice);
  // return an array of items
  ItemModel.find({
    price: { $gte: reqMinPrice, $lte: reqMaxPrice },
    sqFt: { $gte: reqMinSize * 10.764, $lte: reqMaxSize * 10.764 }, // convert to sqFt
    bedrooms: { $gte: reqMinBedrooms, $lte: reqMaxBedrooms },
    $or: [{ title: reqTitle }, { area: reqTitle }, { description: reqTitle }],
  }).then((foundItems) => {
    res.json(foundItems);
  });
};

exports.getItemsCount = (req, res, _next) => {
  const reqMinPrice = req.query.minPrice?.length
    ? parseInt(req.query.minPrice)
    : 0;
  const reqMaxPrice = req.query.maxPrice?.length
    ? parseInt(req.query.maxPrice)
    : 10000;
  const reqMinSize = req.query.minSize?.length
    ? parseInt(req.query.minSize)
    : 0;
  const reqMaxSize = req.query.maxSize?.length
    ? parseInt(req.query.maxSize)
    : 10000;
  const reqMinBedrooms = req.query.minBedrooms?.length
    ? parseInt(req.query.minBedrooms)
    : 0;
  const reqMaxBedrooms = req.query.maxBedrooms?.length
    ? parseInt(req.query.maxBedrooms)
    : 10;
  var reqTitle = req.query.title;
  reqTitle = new RegExp(reqTitle, "i");

  ItemModel.countDocuments({
    price: { $gte: reqMinPrice, $lte: reqMaxPrice },
    sqFt: { $gte: reqMinSize * 10.764, $lte: reqMaxSize * 10.764 }, // convert to sqFt
    bedrooms: { $gte: reqMinBedrooms, $lte: reqMaxBedrooms },
    $or: [{ title: reqTitle }, { area: reqTitle }, { description: reqTitle }],
  }).then((count) => {
    res.json({ count });
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
