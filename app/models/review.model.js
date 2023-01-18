module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            userId: String,
            productId: String,
            rating: Number,
            productName: String || "",
            content: String,
            userName: String,
            userAvatar: String,
        },
    );

    const Review = mongoose.model("review", schema);
    return Review;
};
