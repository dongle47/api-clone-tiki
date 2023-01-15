const db = require("../models");
const Order = db.orders;

exports.create = (req, res) => {

    const order = new Order({
        userId: req.body.userId,
        address: req.body.address,
        shipping: req.body.shipping,
        payment: req.body.payment,
        products: req.body.products,
        totalPrice: req.body.totalPrice,
        createdAt: req.body.createdAt,
    });

    order
        .save(order)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });
};

exports.findByUser = (req, res) => {
    Order.find({ userId: req.params.userId }).then(data => {
        if (!data) {
            res.send({
                message: `Cannot find address with user id. Maybe address was not found!`
            });
        } else res.send(data);
    }).catch(res => {
        res.status(500).send({
            message: "Error when retrieving address"
        })
    })
};

