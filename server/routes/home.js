const express = require("express");
const router = express.Router();
const home_controller = require("../controllers/homeController");
const {loadmore_controller,loadmoreseller_controller} = require("../controllers/loadmoreController");
const checkAuth = require("../middlewares/checkAuth");
const verifyToken = require('../middlewares/verifyToken')
const addToCart_controller = require("../controllers/addToCartController");
const openCart_controller=require("../controllers/openCartController");
const deleteQuan_controller = require("../controllers/deleteitemController");
const changePass_controller = require("../controllers/changePassController");
const checkout_controller = require("../controllers/checkoutController");
const decQuan_controller = require("../controllers/decQuanController");
const addQuan_controller = require("../controllers/addQuanController");
const placeOrder_controller = require("../controllers/placeOrderController");
const placeOrdercod_controller = require("../controllers/placeOrdercodController");
const ordersUser_controller = require("../controllers/orderUserController");


router.post("/",home_controller);
router.post("/loadmore",loadmore_controller);
router.post("/addTocart/:prodID",addToCart_controller);
router.get("/openCart",checkAuth,openCart_controller);
router.post("/deleteItem",checkAuth,deleteQuan_controller);
router.post("/changePass",checkAuth,changePass_controller);
router.get("/checkout",checkAuth,checkout_controller);
router.post("/decQuantity",checkAuth,decQuan_controller);
router.post("/addQuantity",checkAuth,addQuan_controller);
router.post("/placeOrderCOD",checkAuth,placeOrdercod_controller);
router.post("/placeOrderOnline",checkAuth,placeOrder_controller);
router.get("/orders",checkAuth,ordersUser_controller);

module.exports = router;