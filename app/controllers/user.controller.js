const db = require("../models");
const User = db.users;

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.update = (req, res) => {

  const mobile = req.body.mobile

  User.findOneAndUpdate({ mobile: req.body.mobile }, req.body, { new: true }).then(data => {
    if (!data) {
      res.status(404).send({
        message: `Cannot update User with mobile=${mobile}. Maybe Tutorial was not found!`
      });
    } else res.send({ message: "User was updated successfully." });
  }).catch(res => {
    res.status(500).send({
      message: "Error updating Tutorial with mobile=" + mobile
    })
  })
};

exports.findOne = (req, res) => {

  // const mobile = req.params.mobile

  User.findOne({ mobile: req.params.mobile }).then(data => {
    if (!data) {
      res.send({
        message: `Cannot find User with mobile=${mobile}. Maybe User was not found!`
      });
    } else res.send(data);
  }).catch(res => {
    res.status(500).send({
      message: "Error when retrieving user"
    })
  })
};
