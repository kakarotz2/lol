const express = require('express');
const ProductController = require('../Controller/products.controller');

const router = express.Router();

router.get('/products', ProductController.get);
router.get('/products/:id', ProductController.getProductById)

module.exports = router;
