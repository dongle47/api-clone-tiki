const db = require("../models");
const User = db.users;

// Retrieve all Tutorials from the database.
exports.findAll = async (req, res) => {
    // const title = req.query.title;
    // var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

    // Tutorial.find(condition)
    //     .then(data => {
    //         res.send(data);
    //     })
    //     .catch(err => {
    //         res.status(500).send({
    //             message:
    //                 err.message || "Some error occurred while retrieving tutorials."
    //         });
    //     });

    // try {
    //     const users = await User.find({})
    //     if (!users)
    //         return res.status(404).send()
    //     res.status(200).send(users)
    // } catch (e) {
    //     res.status(500).send()
    // }

    User.find({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
};

