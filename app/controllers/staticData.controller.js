const db = require("../models");
const staticData = db.staticData;

exports.findAll = async (req, res) => {
    staticData.find({})
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

exports.findThuongHieu = async (req, res) => {
    staticData.find({ code: "sliderThuongHieu" })
        .then(data => {
            res.send(data[0].data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        });
};

exports.findKhuyenMai = async (req, res) => {
    staticData.find({ code: "sliderKhuyenMai" })
        .then(data => {
            res.send(data[0].data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        });
};

exports.findHoTro = async (req, res) => {
    staticData.find({ code: "supportCustomer" })
        .then(data => {
            res.send(data[0].data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        });
};

exports.findQuickLink = async (req, res) => {
    staticData.find({ code: "quickLink" })
        .then(data => {
            res.send(data[0].data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        });
};

exports.findCategories = async (req, res) => {
    staticData.find({ code: "categories" })
        .then(data => {
            res.send(data[0].data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        });
};

exports.findCategorySpecify = async (req, res) => {
    staticData.find({ code: "categorySpecify" })
        .then(data => {
            res.send(data[0].data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        });
};


