let User = require("../../modal/userdb");
let forgetPasswordCtrls = (req, res) => {
  // the mail sending approach for reseting the password will be here
  User.findOne({ email: req.params["email"] })
    .then((user) => {
      if (user) {
        const otp = Math.floor(Math.random() * 100000);
        // sending the OTP via email or SMS
        res.status(200).json({
          message: "OTP sent successfully",
          response: 200,
          otp,
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
        error: err,
        response: 500,
        message: "Error in finding the user",
      });
    });
};

module.exports = forgetPasswordCtrls;
