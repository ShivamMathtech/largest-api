const Noodle = require("../../../modal/noodle");
let noodleShowByName = (req, res) => {
  Noodle.findOne({ name: req.params["name"] })
    .then((noodle) => {
      if (noodle) {
        res.status(200).json({
          message: "Noodle found successfully",
          response: 200,
          data: noodle,
        });
      } else {
        res.status(404).json({
          message: "Noodle not found",
          response: 404,
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: "Error while fetching noodle",
        response: 500,
        error: error,
      });
    });
};

module.exports = noodleShowByName;
