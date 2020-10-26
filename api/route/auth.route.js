const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

router.get('/', authController.getUser);
router.post('/create', authController.create);

module.exports = router;
