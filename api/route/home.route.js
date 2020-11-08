const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home/home.controller');

// Get all products
router.get('/', homeController.getAllProduct);

// add a product
router.post('/addProduct', homeController.addProduct);

//Get by ID
router.get('/getProductByID/:productId', homeController.getProductByCategoryId);

module.exports = router;
