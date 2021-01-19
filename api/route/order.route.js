const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order/order.controller');
const { isAuth, isShipper, isAdmin } = require('../utils');

<<<<<<< HEAD
router.get('/mine/:userID', isAuth, orderController.getAllOrderByUserId);
router.patch('/shipper/:orderID/:status', isAuth, isShipper, orderController.updateStateOrderForShipper);
router.post('/createOrder', isAuth, orderController.createBill);
router.patch('/admin/:orderID', isAuth, isAdmin, orderController.updateStateOrderForAdmin);
router.get('/admin/all', isAuth, isAdmin, orderController.getAllOrder);
router.get('/admin/cancel', isAuth, isAdmin, orderController.getOrderIsCancel);
router.get('/admin/waiting', isAuth, isAdmin, orderController.getOrderIsWaiting);
router.patch('/admin/cancelOrder/:orderID', isAuth, isAdmin, orderController.orderCancel);
router.get('/admin/orderDetail/:orderID', isAuth, orderController.getOrderById);
router.post('/sendmail', isAuth, orderController.sendMailOrder);

=======
router.get('/mine/:userID', orderController.getAllOrderByUserId);
router.patch('/shipper/:orderID/:status', orderController.updateStateOrderForShipper);
router.post('/createOrder', orderController.createBill);
router.patch('/admin/:orderID', orderController.updateStateOrderForAdmin);
router.get('/admin/all', orderController.getAllOrder);
router.get('/admin/cancel', orderController.getOrderIsCancel);
router.get('/admin/waiting', orderController.getOrderIsWaiting);
router.patch('/admin/cancelOrder/:orderID', orderController.orderCancel);
router.get('/admin/orderDetail/:orderID', orderController.getOrderById);
router.get('/shipper/:status', orderController.getOrder);
>>>>>>> bec0ae1... cap nhat code moi
module.exports = router;
