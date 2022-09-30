const express = require('express');
const OrderController = require('../Controller/order.controller');

const router = express.Router();

router.post('/order', OrderController.getOrder);
router.get('/order/list', OrderController.get);

module.exports = router;
