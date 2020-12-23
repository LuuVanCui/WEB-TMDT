const express = require('express');
const router = express.Router();
const productController = require('../controllers/product/product.controller');
const { isAuth } = require('../utils');

// Get all products
router.get('/', productController.getAllProduct);

// Get special product
router.get('/:id', productController.getProductById);

// add a product
router.post('/addProduct', productController.addProduct);

//Delete Product By ID
router.delete('/deleteProduct/:productID', productController.deleteProductByID);

//Update product by ID
router.patch('/updateProduct/:productID', productController.updateProductByID);

//Get by category ID
// router.get('/getProductByCategoryID/:productName', productController.getProductByCategoryName);

//Get by brand ID
// router.get('/getProductByBrandID/:brandName', productController.getProductByBrandName);

module.exports = router;
