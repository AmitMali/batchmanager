// validate user
const { getUserByEmail } = require("../db/db");
const bcrypt = require("bcrypt");
const validateUser = async (email, password) => {
  const user = await getUserByEmail(email);
  console.log(user);
  if (user) {
    bcrypt.compare(password, user.password, (err, result) => {
      if (!result) {
        throw new Error("Please enter correct username or password");
      } else {
        return true;
      }
    });
  }
};

module.exports = { validateUser };
