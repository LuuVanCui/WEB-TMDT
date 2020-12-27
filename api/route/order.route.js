const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order/order.controller');

router.get('/mine/:userID', orderController.getAllOrderByUserId);
router.put('/shipper/:orderID', orderController.updateStateOrderForShipper);
router.post('/createOrder', orderController.createBill);
module.exports = router;
