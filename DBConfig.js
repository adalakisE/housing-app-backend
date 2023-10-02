const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");

function connectDB() {
  const url = `mongodb+srv://${process.env.USER_ID}:${process.env.PASSWORD}@cluster0.bu2drdk.mongodb.net/?retryWrites=true&w=majority`;

  try {
    mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }

  const dbConnection = mongoose.connection;
  dbConnection.once("open", (_) => {
    console.log(`Database connected: ${url}`);
  });

  dbConnection.on("error", (err) => {
    console.error(`connection error: ${err}`);
  });
  return;
}

connectDB();

// const uri =
//   "mongodb+srv://admin:J5qD5gCaU4HGc8T@cluster0.bu2drdk.mongodb.net/?retryWrites=true&w=majority";

// // Create a new MongoClient
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await mongoose.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!"
//     );
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
