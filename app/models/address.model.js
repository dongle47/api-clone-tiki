module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            fullName: String,
            phone: String,
            province: String,
            district: String,
            ward: String,
            detail: String,
            userId: String,
        },
    );

    const Address = mongoose.model("address", schema);
    return Address;
};
