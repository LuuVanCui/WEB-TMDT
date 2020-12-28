const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth/auth.controller');

router.post('/login', authController.login);

router.post('/confirm-email', authController.confirmEmail);

router.post('/fogot-password', authController.fogotPassword);

router.post('/confirm-reset-password', authController.confirmResetPassword);

module.exports = router;
