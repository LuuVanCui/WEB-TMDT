const express = require('express');
const router = express.Router();
const userController = require('../controllers/user/user.controller');
const { isAuth } = require('../utils');

// get all users
router.get('/', isAuth, userController.getAllUsers);
//update userinfo
router.post('/update-info', userController.updateUserInfo);
// create new user
router.post('/add-user', userController.addUser);

// delete user by id
router.delete('/:id', userController.deleteUser);

router.patch('/update-password', userController.updatePassword);

module.exports = router;