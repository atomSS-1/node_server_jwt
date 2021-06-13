const jwt = require("jsonwebtoken");
function signJwt(user, next) {
  return new Promise((resolve, reject) => {
    try {
      const token = jwt.sign(
        {
          user_id: user.id,
        },
        "123", //YOUR_SECRET_KEY,
        {
          expiresIn: "1h",
        }
      );
      resolve(token);
    } catch (err) {
      next(err);
    }
  });
}
module.exports = {
  signJwt,
};
