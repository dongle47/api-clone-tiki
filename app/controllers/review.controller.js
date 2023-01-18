const db = require("../models");
const Review = db.reviews;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    const review = new Review({
        userId: req.body.userId,
        productId: req.body.productId,
        rating: req.body.rating,
        productName: req.body.productName,
        productImage: req.body.productImage,
        content: req.body.content,
        userName: req.body.userName,
        userAvatar: req.body.userAvatar,
    });

    review
        .save(review)
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

// Find a single Tutorial with an id
exports.find = (req, res) => {
    Review.find(req.body)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found reviews " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving reviews with id=" + id });
        });
};
