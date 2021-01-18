const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order/order.controller');

router.get('/mine/:userID', orderController.getAllOrderByUserId);
router.patch('/shipper/:orderID', orderController.updateStateOrderForShipper);
router.post('/createOrder', orderController.createBill);
router.patch('/admin/:orderID', orderController.updateStateOrderForAdmin);
router.get('/admin/all', orderController.getAllOrder);
router.get('/admin/cancel', orderController.getOrderIsCancel);
router.get('/admin/waiting', orderController.getOrderIsWaiting);
router.patch('/admin/cancelOrder/:orderID', orderController.orderCancel);
router.get('/admin/orderDetail/:orderID', orderController.getOrderById);
router.post('/sendmail', orderController.sendMailOrder);

module.exports = router;
