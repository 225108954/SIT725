const express = require('express');
const router = express.Router();
const Controllers = require('../controller');

router.get('/',
Controllers.foodController.getAllFood);

module.exports = router;