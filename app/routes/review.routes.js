module.exports = app => {
    const reviews = require("../controllers/review.controller.js");

    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/", reviews.create);

    // Retrieve all Tutorials
    router.post("/find", reviews.find);

    app.use("/api/reviews", router);

};
