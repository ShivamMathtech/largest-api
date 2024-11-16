const User = require("../../modal/userdb");
let showProfileCtrls = (req, res) => {
  User.findOne({ email: req.params["email"] })
    .then((user) => {
      if (user) {
        res.status(200).json({
          message: "Profile found successfully",
          response: 200,
          data: user,
        });
      } else {
        res.status(404).json({
          message: "User not found",
          response: 404,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Internal Server Error",
        response: 500,
        error: err,
      });
    });
};

module.exports = showProfileCtrls;
