const express = require('express');

const router = express.Router();

const userController = require('../controllers/users');

router.get('/index', userController.index);
router.post('/register', userController.create);

router.post('/authenticate', userController.authenticate);

module.exports = router;