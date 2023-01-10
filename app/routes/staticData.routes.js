module.exports = app => {
    const staticData = require("../controllers/staticData.controller.js");

    var router = require("express").Router();

    router.get("/", staticData.findAll);

    router.get("/sliderThuongHieu", staticData.findThuongHieu);

    router.get("/sliderKhuyenMai", staticData.findKhuyenMai);

    router.get("/supportCustomer", staticData.findHoTro);

    router.get("/quickLink", staticData.findQuickLink);

    router.get("/categories", staticData.findCategories);

    router.get("/categorySpecify", staticData.findCategorySpecify);

    app.use("/api/staticData", router);
};
