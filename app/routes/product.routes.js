module.exports = app => {
    const product = require("../controllers/product.controller.js");

    var router = require("express").Router();

    router.get("/", product.findAll);

    router.get("/paginate", product.paginateProducts);

    app.use("/api/products", router);

};
