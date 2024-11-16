const Coffee = require("../../../modal/coffeedb");
const showcoffeeSpecifiedCtrls = (req, res) => {
  Coffee.findOne({ name: req.params["name"] })
    .then((result) => {
      if (!result) {
        res.status(404).json({ message: "Coffee not found", response: 404 });
      }
      res.status(200).json({
        message: "Coffee found successfully",
        response: 200,
        data: result,
      });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Internal Server Error", response: 500, error: err });
    });
};

module.exports = showcoffeeSpecifiedCtrls;
