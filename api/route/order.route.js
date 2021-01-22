const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order/order.controller');
const { isAuth, isShipper, isAdmin } = require('../utils');

router.get('/mine/:userID', isAuth, orderController.getAllOrderByUserId);
router.get('/', isAuth, isAdmin, orderController.getAllOrder);
router.get('/admin/cancel', isAuth, isAdmin, orderController.getOrderIsCancel);
<<<<<<< HEAD
router.get('/shipper/:status', isAuth, isShipper, orderController.getOrder);
=======
router.get('/admin/waiting', isAuth, isAdmin, orderController.getOrderIsWaiting);
router.patch('/admin/cancelOrder/:orderID', isAuth, orderController.orderCancel);
>>>>>>> 29d38f5... update huy don cho user
router.get('/admin/orderDetail/:orderID', isAuth, orderController.getOrderById);

router.post('/sendmail', isAuth, orderController.sendMailOrder);
router.post('/order-by-delivery-status', isAuth, isAdmin, orderController.getOrderByDeliveryStatus);
router.post('/createOrder', isAuth, orderController.createBill);

router.patch('/shipper/:orderID/:status', isAuth, isShipper, orderController.updateStateOrderForShipper);
router.patch('/admin/:orderID', isAuth, isAdmin, orderController.updateStateOrderForAdmin);
router.patch('/admin/cancelOrder/:orderID', isAuth, isAdmin, orderController.orderCancel);

module.exports = router;
