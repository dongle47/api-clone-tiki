module.exports = app => {
    const staticData = require("../controllers/staticData.controller.js");

    var router = require("express").Router();

    router.get("/", staticData.findAll);

    app.use("/api/staticData", router);
};
