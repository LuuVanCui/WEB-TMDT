const express = require('express');
const router = express.Router();

const authRoute = require('./auth.route');
const registerRoute = require('./register.route');
const productRoute = require('./product.route')
const shopingCartRoute = require('./shoping-cart.route');
const userRoute = require('./user.route');

router.use('/auth', authRoute);
router.use('/register', registerRoute);
router.use('/products', productRoute);
router.use('/shoping-cart', shopingCartRoute);
router.use('/users', userRoute);

module.exports = router;