const db = require("../models");
const Address = db.addresses;

exports.create = (req, res) => {

    const address = new Address({
        fullName: req.body.title,
        phone: req.body.phone,
        provinceCode: req.body.provinceCode,
        districtCode: req.body.districtCode,
        wardCode: req.body.wardCode,
        detail: req.body.detail,
        userId: req.body.userId
    });

    // Save Tutorial in the database
    address
        .save(address)
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
    Address.find({ userId: req.params.userId }).then(data => {
        if (!data) {
            res.send({
                message: `Cannot find address with user id =${mobile}. Maybe address was not found!`
            });
        } else res.send(data);
    }).catch(res => {
        res.status(500).send({
            message: "Error when retrieving address"
        })
    })
};

exports.update = (req, res) => {

    Address.findByIdAndUpdate(req.body.id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Address with id=${id}. Maybe Address was not found!`
                });
            } else res.send({ message: "Address was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Address with id"
            });
        });
};


exports.delete = (req, res) => {
    const id = req.params.id;

    Address.findByIdAndRemove(id, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete address with id=${id}. Maybe Tutorial was not found!`
                });
            } else {
                res.send({
                    message: "Address was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tutorial with id=" + id
            });
        });
};
