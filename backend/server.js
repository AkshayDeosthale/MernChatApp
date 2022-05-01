const express = require("express");
const chats = require("./dummyData/data");
const dotenv = require("dotenv");
var cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

dotenv.config();
// app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.get("/api/chat", cors(), (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});

app.listen(port, () => {
  console.log(`Node is now listening on port ${port}`);
});
