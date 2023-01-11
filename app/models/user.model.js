module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      mobile: String,
      password: String,
      avatar: String,
      fullName: String,
      birthDay: String,
      sex: String,
      email: String
    },
  );

  const User = mongoose.model("user", schema);
  return User;
};
