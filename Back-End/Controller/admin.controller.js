const orderModel = require('../Models/order.model');
const productModel = require('../Models/products.model');
const userModel = require('../Models/user.model');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
require('dotenv').config();

class Admin {
    // thao tac voi san pham
    addProduct = async (req, res, next) => {
        const { name, url, price, discription, category, type, trademark, amount } = req.body;
        try {
            await productModel
                .create({ name, url, price, type, discription, category, trademark, amount, updateAt: null })
                .then(() => {
                    res.json({ status: true, message: 'Thêm sản phẩm thành công' });
                })
                .catch((err) => {
                    res.status(400).json({ status: false, message: 'Thêm sản phẩm thất bại' });
                });
        } catch (error) {
            res.status(400).json({
                status: false,
                message: 'Lỗi từ server: ' + error,
            });
        }
    };
    updateProduct = async (req, res, next) => {
        const { id, name, url, price, type, category, trademark, discription } = req.body;

        try {
            await productModel
                .findByIdAndUpdate(
                    { _id: id },
                    { name, url, price, type, trademark, category, discription, updateAt: Date.now() },
                )
                .then(() => {
                    res.json({ status: true, message: 'Cập nhật sản phẩm thành công' });
                })
                .catch((err) => {
                    res.status(400).json({ status: false, message: err });
                });
        } catch (error) {
            res.status(400).json({ status: false, message: 'Lỗi từ Server: ' + error });
        }
    };
    deleteProduct = async (req, res, next) => {
        const { id } = req.body;
        try {
            await productModel
                .findOneAndDelete({ _id: id })
                .then(() => {
                    res.json({ status: true, message: 'Xóa sản phẩm thành công' });
                })
                .catch((err) => {
                    res.status(400).json({ status: false, message: err });
                });
        } catch (error) {
            res.status(400).json({ status: false, message: 'Lỗi từ Server: ' + error });
        }
    };
    // thao tac voi order
    updateOrder(req, res, next) {
        const { id, name, product, phonenumber, address } = req.body;
        orderModel.findByIdAndUpdate({ _id: id }, { name, product, phonenumber, address });
    }
    deleteOrder = (req, res, next) => {
        const { id } = req.body;
        try {
            orderModel
                .findByIdAndDelete({ _id: id })
                .then(() => {
                    res.json({ status: true, message: 'Xóa đơn hàng thành công' });
                })
                .catch((err) => {
                    res.status(400).json({ status: false, message: err });
                });
        } catch (error) {
            res.status(400).json({ status: false, message: 'Lỗi từ Server: ' + error });
        }
    };
    // thao tac voi user
    addUser = async (req, res, nex) => {
        const { email, password, firstName, lastName, userName, numberPhone, adress } = req.body;
        try {
            const user = await userModel.findOne({ userName });
            if (user) {
                return res.status(400).json({ status: false, message: 'Username đã được sử dụng' });
            }
            const hashPassword = await argon2.hash(password);
            await userModel
                .create({
                    email,
                    password: hashPassword,
                    firstName,
                    lastName,
                    userName,
                    numberPhone,
                    adress,
                    updateAt: null,
                })
                .then(() => {
                    res.json({ status: true, message: 'Thêm User thành công' });
                })
                .catch((err) => {
                    res.status(400).json({ status: false, messaga: 'Thêm User thất bại' + err });
                });
        } catch (error) {
            res.status(400).json({ status: false, message: 'Lỗi từ Server: ' + error });
        }
    };
    updateUser = async (req, res, next) => {
        const { id, email, password, firstName, lastName, userName, numberPhone, adress } = req.body;

        try {
            await userModel
                .findByIdAndUpdate(
                    { _id: id },
                    { email, password, firstName, lastName, userName, numberPhone, adress, updateAt: Date.now() },
                )
                .then(() => {
                    res.json({ status: true, message: `Sửa Username thành công ${id} ` });
                })
                .catch((err) => {
                    res.json({ status: false, massage: 'Sửa Username thất bại' + err });
                });
        } catch (error) {
            res.status(400).json({ status: false, message: 'Lỗi từ Server: ' + error });
        }
    };
    deleteUser = async (req, res, next) => {
        const { id } = req.body;

        await userModel
            .findOneAndDelete({ _id: id })
            .then(() => {
                res.json({ status: true, message: `Xóa Username thành công ${id} ` });
            })
            .catch((err) => {
                res.json({ status: false, massage: 'Xóa Username thất bại ' + err });
            });
    };
}

module.exports = new Admin();
