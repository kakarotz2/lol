const express = require('express');

const UserController = require('../Controller/user.controller');

const router = express.Router();

router.post('/user/register', UserController.registerUser);
router.post('/user/login', UserController.loginUser);
// thay đổi thông tin
router.put('/user/change-user', UserController.changeUser);

// lấy thông tin user từ server
router.get('/users', UserController.get);

module.exports = router;
