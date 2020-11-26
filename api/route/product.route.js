const express = require('express');
const router = express.Router();
const productController = require('../controllers/product/product.controller');

// Get all products
router.get('/', productController.getAllProduct);

// add a product
router.post('/addProduct', productController.addProduct);

//Delete Product By ID
router.delete('/deleteProduct/:productID', productController.deleteProductByID);

//Update product by ID
router.patch('/updateProduct/:productID', productController.updateProductByID);

//Get by category ID
router.get('/getProductByCategoryID/:productId', productController.getProductByCategoryId);

//Get by brand ID
router.get('/getProductByBrandID/:brandId', productController.getProductByBrandId);

module.exports = router;
