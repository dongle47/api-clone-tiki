module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            fullName: String,
            phone: String,
            provinceCode: String,
            districtCode: String,
            wardCode: String,
            detail: String,
            userId: String,
        },
    );

    const Address = mongoose.model("address", schema);
    return Address;
};
