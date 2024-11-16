let User = require("../../modal/userdb");
let deleteCtrls = (req, res) => {
  // All the logic of the delete implemented here
  User.findOne({ email: req.params["email"] }).then((user) => {
    if (!user) {
      res.status(404).json({
        message: "User not found",
        response: 404,
      });
    } else {
      user
        .deleteOne()
        .then((user) => {
          res.status(200).json({
            message: "User deleted successfully",
            response: 200,
            data: user,
          });
        })
        .catch((err) => {
          res.status(500).json({
            message: "Failed to delete user",
            response: 500,
          });
        });
    }
  });
};

module.exports = deleteCtrls;
