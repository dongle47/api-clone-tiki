module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            // code: {
            //     type: String,
            //     required: true,
            // },
            // main: {
            //     type: Array,
            //     required: true
            // }
        },
        { strict: false }
    );

    const staticData = mongoose.model("static-data", schema);
    return staticData;
};
