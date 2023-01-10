module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      mobile: Number,
      password: String,
      avatar: String,
      fullName: String,
      dateOfBirth: Date,
      sex: Boolean,
      email: String
    },
  );

  const User = mongoose.model("user", schema);
  return User;
};
