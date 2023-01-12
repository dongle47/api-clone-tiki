const { authJwt } = require("../middlewares");
const controller = require("../controllers/address.controller");

// module.exports = app => {
//     app.use(function (req, res, next) {
//         res.header(
//             "Access-Control-Allow-Headers",
//             "x-access-token, Origin, Content-Type, Accept"
//         );
//         next();
//     });

//     app.get("/api/address/:userId", [authJwt.verifyToken], controller.findByUser);

//     app.put("/api/address/update", [authJwt.verifyToken], controller.update);

//     app.delete("/api/address/delete", [authJwt.verifyToken], controller.update);

// };

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

    router.put("/", [authJwt.verifyToken], controller.update);

    router.delete("/:id", [authJwt.verifyToken], controller.delete);

    app.use("/api/address", router);

};
