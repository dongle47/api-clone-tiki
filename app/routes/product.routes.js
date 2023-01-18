module.exports = app => {
    const product = require("../controllers/product.controller.js");

    var router = require("express").Router();

    router.get("/", product.findPaginate);

    router.get("/:slug", product.findBySlug);

    router.get("/all", product.findAll);

    router.post("/", product.findBySearch);

    app.use("/api/products", router);

};
