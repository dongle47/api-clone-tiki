const db = require("../models");
const Product = db.products;

exports.findAll = async (req, res) => {
    Product.find({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        });
};

