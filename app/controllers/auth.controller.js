const config = require("../config/auth.config");
const db = require("../models");
const User = db.users;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  const user = new User({
    mobile: req.body.mobile,
    password: bcrypt.hashSync(req.body.password, 8),
    avatar: "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=",
    fullName: "",
    birthDay: "",
    sex: "",
    email: ""
  });

  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    user.save(err => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      res.send({ message: "User was registered successfully!" });
    });
  });
};

exports.signin = (req, res) => {
  User.findOne({
    mobile: req.body.mobile
  }).then(data => {
    console.log(data)
    if (data) {
      const user = data
      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      res.status(200).send({
        user: {
          id: user._id,
          mobile: user.mobile,
          avatar: user.avatar,
          fullName: user.fullName,
          birthDay: user.birthDay,
          sex: user.sex,
          email: user.email,
        },
        accessToken: token
      });
    }

    return res.status(404).send({ message: "User Not found." });

  }).catch(err => console.log(err))
};

