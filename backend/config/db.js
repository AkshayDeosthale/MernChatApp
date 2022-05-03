const mongoose = require("mongoose");
const colors = require("colors");

//mongoose
// mongoose.connect(
//   "mongodb+srv://akshay:akshay@cluster0.rns1o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
// );

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`mongoDB connected ${conn.connection.host}`.blue.bold);
  } catch (error) {
    console.error(error);
    process.exit();
  }
};
module.exports = connectDb;
