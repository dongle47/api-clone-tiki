const db = require("../models");
const Product = db.products;

const getPagination = (page, size) => {
    const limit = size ? +size : 3;
    const offset = page ? page * limit : 0;

    return { limit, offset };
};

exports.findPaginate = async (req, res) => {
    const { page, size } = req.query;

    const { limit, offset } = getPagination(page, size);

    Product.paginate({}, { offset, limit })
        .then((data) => {
            res.send({
                totalItems: data.totalDocs,
                products: data.docs,
                totalPages: data.totalPages,
                currentPage: data.page - 1,
            });
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials.",
            });
        });
};

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

exports.findBySearch = async (req, res) => {
    Product.find({"slug": { "$all": req.body.searchText }})
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

exports.findBySlug = async (req, res) => {
    Product.find({ slug: req.params.slug })
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

