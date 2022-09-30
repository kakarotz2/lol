const orderModel = require('../Models/order.model');

class OrderController {
    get(req, res, next) {
        orderModel
            .find({})
            .then((orderModel) => res.json(orderModel))
            .catch(next);
    }
    getOrder = async (req, res) => {
        let { email, name, product, paymentMethod, phonenumber, address, note } = req.body;
        const newOrder = new orderModel({
            email,
            name,
            product,
            paymentMethod,
            phonenumber,
            address,
            note,
        });
        await newOrder
            .save()
            .then(() =>
                res.json({
                    status: true,
                    message: 'Successful Purchase',
                }),
            )
            .catch((err) => {
                res.status(500).json({
                    status: false,
                    message: err,
                });
            });
    };
}
module.exports = new OrderController();
