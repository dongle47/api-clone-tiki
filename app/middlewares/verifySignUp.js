const db = require("../models");
const User = db.users;

checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Username
  User.findOne({
    mobile: req.body.mobile
  }).then(data => {
    if (data) {
      res.status(400).send({ message: "Failed! Mobile is already in use!" });
      return
    }
    else {
      next()
    }
  }).catch(err => {
    console.log(err);
  })
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail,
};

module.exports = verifySignUp;
