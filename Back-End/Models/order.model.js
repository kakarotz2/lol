const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const orderSchema = new Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    product: {
        type: Object,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    paymentMethod: {
        type: String,
    },
    phonenumber: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    note: {
        type: String,
    },
    status: { type: String, default: 'Processing' },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
});
const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
