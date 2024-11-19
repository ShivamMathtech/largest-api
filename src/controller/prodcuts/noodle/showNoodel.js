let Noodel = require("../../../modal/noodle");
let showNoodel = (req, res) => {
  Noodel.find()
    .then((noodles) => {
      if (noodles) {
        res.status(200).json({
          message: "Noodles found successfully",
          response: 200,
          data: noodles,
        });
      } else {
        res.status(404).json({
          message: "Noodles not found",
          response: 404,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error in finding noodles",
        response: 500,
        error: err,
      });
    });
};

module.exports = showNoodel;
