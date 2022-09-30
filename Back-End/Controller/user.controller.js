const express = require('express');
const userModel = require('../Models/user.model');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
require('dotenv').config();

class userController {
    // api user
    get(req, res, next) {
        userModel
            .find({})
            .then((userModel) => res.json(userModel))
            .catch(next);
        //.catch((err) => next(err));
    }
    // regsiter
    registerUser = async (req, res) => {
        const { email, password, firstName, lastName, userName, numberPhone, adress } = req.body;

        if (!email || !password) {
            return res.status(400).json({ status: false, message: 'Email và mật khẩu không được để trống' });
        }
        try {
            const user = await userModel.findOne({ userName });
            if (user) {
                return res.status(400).json({ status: false, message: 'Username đã được sử dụng' });
            }
            const hashPassword = await argon2.hash(password);
            const newUser = new userModel({
                userName,
                password: hashPassword,
                firstName,
                lastName,
                email,
                numberPhone,
                adress,
            });
            await newUser.save();
            //return Token
            const accessToken = jwt.sign(
                {
                    userId: newUser._id,
                },
                process.env.ACCESS_TOKEN_SECRET,
            );
            res.json({ status: true, message: 'Email sẵn sàng', accessToken });
        } catch (err) {
            res.status(400).json({
                status: false,
                message: 'Lỗi từ server: ' + err,
            });
        }
    };
    // login
    loginUser = async (req, res) => {
        const { userName, password, role } = req.body;
        if (!userName || !password) {
            return res.status(400).json({ status: false, message: 'Tên tài khoản và mật khẩu không được để trống' });
        }
        try {
            const user = await userModel.findOne({ userName });

            if (!user) {
                return res.status(400).json({
                    status: false,
                    message: 'Username hoặc mật khẩu không chính xác',
                });
            }
            const passwordValid = await argon2.verify(user.password, password);

            if (!passwordValid) {
                return res.status(400).json({
                    status: false,
                    message: 'Mật khẩu không chính xác vui lòng kiểm tra lại',
                });
            }
            res.json({
                status: true,
                message: 'Đăng nhập thành công vui lòng chờ',
            });
        } catch (err) {
            res.status(400).json({
                status: false,
                message: 'Lỗi từ server: ' + err,
            });
        }
    };
    // thay đổi thông tin
    changeUser = async (req, res, next) => {
        const { id, email, password, firstName, lastName, userName, numberPhone, adress } = req.body;
        try {
            await userModel
                .findByIdAndUpdate(
                    { _id: id },
                    { email, password, firstName, lastName, userName, numberPhone, adress, updateAt: Date.now() },
                )
                .then(() => {
                    res.json({
                        status: true,
                        message: 'Sửa Username thành công ',
                    });
                })
                .catch((err) => {
                    res.json({
                        status: false,
                        massage: 'Sửa Username thất bại' + err,
                    });
                });
        } catch (error) {
            res.status(400).json({
                status: false,
                message: 'Lỗi từ Server: ' + error,
            });
        }
    };
}

module.exports = new userController();
