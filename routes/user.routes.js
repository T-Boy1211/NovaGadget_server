const userRouter = require("express").Router();
const auth = require("../controllers/auth.controller");
const profile = require("../controllers/profile.controller");
const verifyAuth = require("../middlewares/verifyAuth.middleware");
const verification = require("../middlewares/verification.middleware");
const product = require("../controllers/product.controller");
const order = require('../controllers/order.controller')
const cart = require('../controllers/cart.controller')
const address = require('../controllers/address.controller')
const payment = require('../controllers/payment.controller')
const review = require('../controllers/review.controller')

userRouter.post("/signup", verifyAuth, auth.userSignup);
userRouter.post("/signin", auth.userSignin);
userRouter.get("/profile", verification, profile.userProfile);
userRouter.get("/myOrder", verification, order.myOrder);
userRouter.post("/addOrder", verification, order.addToOrder);
userRouter.post("/addToCart", verification, cart.addToCart);
userRouter.get("/myCart", verification, cart.myCart);
userRouter.get("/shop", product.getAllProducts);
userRouter.get("/shop/:name", product.getProductByName);
userRouter.get("/shop/:brand", product.getProductByBrand);
userRouter.get("/shop/:category", product.getProductByCategory);
userRouter.get("/address", verification, address.getAddress);
userRouter.post("/addAddrress", verification, address.addAddress);
userRouter.post("/addPayment", verification, payment.addPayment);
userRouter.get("/payment", verification, payment.getPayment);
userRouter.post("/addReview", verification, review.addRevieew);
userRouter.get("/review", verification, review.getReview);

module.exports = userRouter;
