const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home/home.controller');

// Get all products
router.get('/', homeController.getAllProduct);

// add a product
router.post('/addProduct', homeController.addProduct);

//Delete Product By ID
router.delete('/deleteProduct/:productID', homeController.deleteProductByID);

//Update product by ID
router.patch('/updateProduct/:productID', homeController.updateProductByID);

//Get by category ID
router.get('/getProductByCategoryID/:productId', homeController.getProductByCategoryId);

//Get by brand ID
router.get('/getProductByBrandID/:brandId', homeController.getProductByBrandId);

module.exports = router;
