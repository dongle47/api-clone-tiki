module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            productId: String,
            userId: String,
        },
    );

    const WishList = mongoose.model("wishList", schema);
    return WishList;
};
