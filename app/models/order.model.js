module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            userId: String,
            address: Object,
            shipping: Object,
            payment: Object,
            products: Array,
            totalPrice: String,
            createdAt: String,
        },
    );

    const Order = mongoose.model("order", schema);
    return Order;
};
