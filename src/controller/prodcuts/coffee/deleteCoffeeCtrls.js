const Coffee = require("../../../modal/coffeedb");
const coffeeDeleteCtrls = (req, res) => {
  Coffee.findOne({ name: req.params["name"] })
    .then((result) => {
      if (!result) {
        res.status(404).json({ message: "Coffee not found", response: 404 });
      }
      result.deleteOne().then(() => {
        res.status(200).json({
          message: "Coffee deleted successfully",
          response: 200,
          data: result,
        });
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err.message,
        response: 500,
        message: "Error in deleting the coffee",
      });
    });
};

module.exports = coffeeDeleteCtrls;
