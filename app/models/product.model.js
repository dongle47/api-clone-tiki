module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            id: {
                type: String,
                required: true,
            },
            image: {
                type: String,
                required: true,
            },
            name: {
                type: String,
                required: true,
            },
            rate: {
                type: Number,
                required: true,
            },
            price: {
                type: Number,
                required: true,
            },
            discount: {
                type: Number,
                required: true,
            },
            sold: {
                type: Number,
                required: true,
            },
            detail: {
                type: Object,
                required: true,
            },
        }
    );

    // schema.method("toJSON", function () {
    //     const { __v, _id, ...object } = this.toObject();
    //     object.id = _id;
    //     return object;
    // });

    const Product = mongoose.model("product", schema);
    return Product;
};
