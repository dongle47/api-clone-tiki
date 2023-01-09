const db = require("../models");
const staticData = db.staticData;

exports.findAll = async (req, res) => {
    staticData.find({})
        .then(data => {
            console.log("Data: ", data)
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        });
};

