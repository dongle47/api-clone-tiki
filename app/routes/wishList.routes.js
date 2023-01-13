const { authJwt } = require("../middlewares");
const controller = require("../controllers/wishList.controller");

module.exports = app => {
    var router = require("express").Router();

    router.get("/:userId", controller.findByUser);

    router.post("/", controller.create);

    router.delete("/:id", controller.delete);

    app.use("/api/wishList", router);

};
