const express = require("express");
const registerUser = require("../controller/registerUser");

const router = express.Router();

router.route("/").post(registerUser);
// router.post("/login", authUser);

module.exports = router;

// 14:01
