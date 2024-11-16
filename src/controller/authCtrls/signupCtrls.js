const User = require("../../modal/userdb");
let signUpCtrls = (req, res) => {
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      res.status(409).json({
        message: "Email already exists",
        response: 409,
      });
    } else {
      const newuser = new User(req.body);
      newuser
        .save()
        .then((user) => {
          res.status(201).json({
            message: "Signup successful",
            user: user,
            response: 201,
          });
        })
        .catch((error) => {
          res.status(500).json({
            message: "Server Error",
            error: error,
            response: 500,
          });
        });
    }
  });
};

module.exports = signUpCtrls;
