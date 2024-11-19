const Noodel = require("../../../modal/noodle");
let editNoodelCtrls = (req, res) => {
  Noodel.findOne({ name: req.params["name"] })
    .then((result) => {
      if (!result) {
        res.status(404).json({ message: "Noodle not found", response: 404 });
      } else {
        result.name = req.body.name;
        result.price = req.body.price;
        result
          .save()
          .then((savedNoodle) => {
            res.status(200).json({
              message: "Noodle updated successfully",
              response: 200,
              data: savedNoodle,
            });
          })
          .catch((err) => {
            res.status(500).json({
              message: "Failed to update noodle",
              error: err,
              response: 500,
            });
          });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Server Error", error: err.message, response: 500 });
    });
};

module.exports = editNoodelCtrls;
