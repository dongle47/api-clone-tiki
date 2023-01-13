module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            productSlug: String,
            userId: String,
        },
    );

    const WishList = mongoose.model("wishList", schema);
    return WishList;
};
