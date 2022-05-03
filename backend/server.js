const express = require("express");
const chats = require("./dummyData/data");
const dotenv = require("dotenv");
var cors = require("cors");
const connectDb = require("./config/db");
const colors = require("colors");
const userRoutes = require("../backend/routes/userRoutes");

const app = express();
app.use(express.json()); //to accept json

const port = process.env.PORT || 5000;

dotenv.config();
// app.use(cors());

//mongodb
connectDb();

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.use("/api/user", userRoutes);

app.listen(port, () => {
  console.log(`Node is now listening on port ${port}`.yellow.bold);
});
