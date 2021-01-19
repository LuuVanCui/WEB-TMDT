const express = require('express');
const router = express.Router();
const userController = require('../controllers/user/user.controller');
const { isAuth, isAdmin } = require('../utils');

// get all users
router.get('/', isAuth, isAdmin, userController.getAllUsers);

//update userinfo
router.post('/update-info', isAuth, userController.updateUserInfo);

// create new user
router.post('/add-user', userController.addUser);

// delete user by id
router.delete('/:id', isAuth, isAdmin, userController.deleteUser);

router.patch('/update-password', isAuth, userController.updatePassword);

module.exports = router;