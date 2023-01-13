const db = require("../models");
const WishList = db.wishLists;

exports.create = (req, res) => {
    const wishList = new WishList({
        productId: req.body.productId,
        userId: req.body.userId,
    });

    wishList
        .save(wishList)
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
    WishList.find({ userId: req.params.userId }).then(data => {
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

exports.delete = (req, res) => {
    const id = req.params.userId;

    WishList.findByIdAndRemove(id, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete wish with id=${id}. Maybe Tutorial was not found!`
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
