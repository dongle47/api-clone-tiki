const { authJwt } = require("../middlewares");
const controller = require("../controllers/order.controller");

module.exports = app => {

    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    var router = require("express").Router();

    router.get("/:userId", [authJwt.verifyToken], controller.findByUser);

    router.post("/", [authJwt.verifyToken], controller.create);

    app.use("/api/order", router);

};
