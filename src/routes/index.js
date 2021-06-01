const express = require('express');
const router = express.Router();


const users = require('../controllers/users/routes');
const product = require('../controllers/products/routes');
router.use('/', users);
router.use('/', product);


module.exports = router;