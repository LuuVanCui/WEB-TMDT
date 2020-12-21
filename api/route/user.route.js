const express = require('express');
const router = express.Router();
const userController = require('../controllers/user/user.controller');

// get all users
router.get('/', userController.getAllUsers);

// create new user
router.post('/add-user', userController.addUser);

module.exports = router;