module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      mobile: String,
      password: String,
      avatar: String,
      fullName: String,
      birthDay: Date,
      sex: String,
      email: String
    },
  );

  const User = mongoose.model("user", schema);
  return User;
};
