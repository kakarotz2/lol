const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new Schema({
    url: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        require: true,
    },
    type: {
        type: String,
        required: true,
    },
    trademark: {
        type: String,
        required: true,
    },
    discription: {
        type: String,
        require: true,
    },

    createAt: {
        type: Date,
        default: Date.now,
    },
    updateAt: {
        type: Date,
        default: Date.now,
    },
});
const Product = mongoose.model('Product', productSchema);
module.exports = Product;
