const express = require("express");
const router = express.Router();
const checkAuth = require("../middlewares/checkAuth")

const logout_controller = require("../controllers/logoutController");
const verifyToken = require("../middlewares/verifyToken");

router.get("/",logout_controller);

module.exports = router;