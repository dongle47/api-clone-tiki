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

exports.paginateProducts = async (req, res) => {
    Product.paginate({}, { offset: 3, limit: 2 }).then(data => {
        res.send(data);
    })
};

