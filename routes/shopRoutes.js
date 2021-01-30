const express = require("express");
const router = express.Router();
const{getHomePage,getBlogPage,getContactPage,getSingleBlogPage,getTrackingPage,getConfirmationPage,getLoginPage,getCheckoutPage,getSingleProductPage,getRegisterPage,getShopCategoryPage,getShopingCartPage}= require("../controllers/shopControler")

router.get("/", (getHomePage));
router.get("/blog", (getBlogPage));
router.get("/contact", (getContactPage));
router.get("/single-blog", (getSingleBlogPage));
router.get("/tracking", (getTrackingPage));
router.get("/confirmation", (getConfirmationPage));
router.get("/login", (getLoginPage));
router.get("/checkout", (getCheckoutPage));
router.get("/single-product", (getSingleProductPage));
router.get("/register", (getRegisterPage));
router.get("/shop-category", (getShopCategoryPage));
router.get("/shoping-cart", (getShopingCartPage));


module.exports = router;