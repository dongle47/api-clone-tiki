module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            fullName: String,
            phone: String,
            province: Object,
            district: Object,
            ward: Object,
            detail: String,
            userId: String,
        },
    );

    const Address = mongoose.model("address", schema);
    return Address;
};
