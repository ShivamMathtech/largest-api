const Noodle = require("../../../modal/noodle");
let deleteNoodel = (req, res) => {
  Noodle.findOne({ name: req.params["name"] })
    .then((result) => {
      if (!result) {
        return res
          .status(404)
          .json({ message: "Noodle not found", response: 404 });
      } else {
        result.deleteOne().then(() => {
          res.status(200).json({
            message: "Noodle deleted successfully",
            response: 200,
            data: result,
          });
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Failed to delete noodle",
        error: err,
        response: 500,
      });
    });
};

module.exports = deleteNoodel;
