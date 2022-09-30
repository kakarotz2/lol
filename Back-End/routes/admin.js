const express = require('express');

const AdminController = require('../Controller/admin.controller');

const router = express.Router();

// router product
router.post('/admin/product/add', AdminController.addProduct);
router.put('/admin/product/update', AdminController.updateProduct);
router.delete('/admin/product/delete', AdminController.deleteProduct);
// router order
router.post('/admin/order/delete', AdminController.deleteOrder);
// router user
router.post('/admin/user/add', AdminController.addUser);
router.put('/admin/user/update', AdminController.updateUser);
router.delete('/admin/user/delete', AdminController.deleteUser);

module.exports = router;
