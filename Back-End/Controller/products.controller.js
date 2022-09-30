const productModel = require('../Models/products.model');

class ProductController {
    get(req, res, next) {
        productModel
            .find({})
            .then((productModel) => res.json(productModel))
            .catch(next);
    }
    searchProduct = async (req, res, nex) => {
        var term = req.body.toLowerCase();
        productModel.find({ name: { $regex: term, $options: '$i' } }, (err, items) => {
            if (err) {
                res.json(err);
            } else {
                res.json(items);
            }
        });
    };
    getIphone = (req, res, next) => {
        Product.find({ category: 'iPhone' }, (err, product) => {
            if (!err) {
                res.json(product);
            } else {
                res.status(400).json('Error get data');
            }
        });
    };
    getSamSung = (req, res, next) => {
        Product.find({ category: 'SamSung' }, (err, product) => {
            if (!err) {
                res.json(product);
            } else {
                res.status(400).json('Error get data');
            }
        });
    };
}
module.exports = new ProductController();
