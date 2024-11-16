let User = require("../../modal/userdb");
let loginCtrls = (req, res) => {
  // Controller for login functionality
  User.findOne({ email: req.body.email }).then((user) => {
    if (!user) {
      res.status(404).json({ message: "User not found", response: 404 });
    } else {
      let password = req.body.password;
      if (user.password === password) {
        res
          .status(200)
          .json({ message: "Login successful", response: 200, user: user });
      } else {
        res
          .status(401)
          .json({ message: "Invalid password or User name", response: 401 });
      }
    }
  });
};

module.exports = loginCtrls;
