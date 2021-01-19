const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order/order.controller');
const { isAuth, isShipper, isAdmin } = require('../utils');

router.get('/mine/:userID', isAuth, orderController.getAllOrderByUserId);
router.patch('/shipper/:orderID', isAuth, isShipper, orderController.updateStateOrderForShipper);
router.post('/createOrder', isAuth, orderController.createBill);
router.patch('/admin/:orderID', isAuth, isAdmin, orderController.updateStateOrderForAdmin);
router.get('/admin/all', isAuth, isAdmin, orderController.getAllOrder);
router.get('/admin/cancel', isAuth, isAdmin, orderController.getOrderIsCancel);
router.get('/admin/waiting', isAuth, isAdmin, orderController.getOrderIsWaiting);
router.patch('/admin/cancelOrder/:orderID', isAuth, isAdmin, orderController.orderCancel);
router.get('/admin/orderDetail/:orderID', isAuth, isAdmin, orderController.getOrderById);
router.post('/sendmail', isAuth, orderController.sendMailOrder);

module.exports = router;
