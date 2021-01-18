const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category/category.controller');

router.get('/', categoryController.getAllCategory);
router.post('/', categoryController.addCategory);
router.patch('/:id', categoryController.updateCategory);
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;
