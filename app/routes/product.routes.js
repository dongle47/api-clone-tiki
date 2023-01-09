module.exports = app => {
    const product = require("../controllers/product.controller.js");

    var router = require("express").Router();

    router.get("/", product.findAll);

    app.use("/api/products", router);

};
