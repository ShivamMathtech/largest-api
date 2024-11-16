const { response } = require("express");
let User = require("../../modal/userdb");
let updateCtrls = (req, res) => {
  User.findOne({ email: req.params["email"] }).then((user) => {
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    } else {
      user.FirstName = req.body.FirstName;
      user
        .save()
        .then((user) => {
          res.status(200).json({
            message: "User updated successfully",
            updatedUser: user,
            response: 200,
          });
        })
        .catch((error) => {
          res
            .status(500)
            .json({ message: "Server error", error: error, response: 500 });
        });
    }
  });
};

module.exports = updateCtrls;
