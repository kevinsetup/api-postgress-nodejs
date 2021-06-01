const express = require('express');
const router = express.Router();
const productController = require('./controller');

router.get('/api/v1/product', productController.getAllProducts);
router.get('/api/v1/product/:id' , productController.getProduct);
router.post('/api/v1/product' , productController.addProduct);
router.put('/api/v1/product/:id' , productController.editProduct);
router.delete('/api/v1/product/:id' , productController.deleteProduct);

module.exports = router;