const express = require('express');
const router = express.Router();

const authRoute = require('./auth.route');
const registerRoute = require('./register.route');
const productRoute = require('./product.route')
// const shopingCartRoute = require('./shoping-cart.route');

router.use('/auth', authRoute);
router.use('/register', registerRoute);
router.use('/product', productRoute);
// router.use('/shoping-cart', shopingCartRoute);

module.exports = router;