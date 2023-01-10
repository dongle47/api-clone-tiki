const mongoosePaginate = require("mongoose-paginate-v2");

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
            slug: {
                type: String,
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

    schema.plugin(mongoosePaginate);

    const Product = mongoose.model("product", schema);
    return Product;
};
