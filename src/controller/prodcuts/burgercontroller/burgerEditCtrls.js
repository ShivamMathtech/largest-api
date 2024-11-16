let burger = require("../../../modal/burgerdb");
let burgerEditCtrls = (req, res) => {
  burger
    .findOne({ burger_name: req.params["burger_name"] })
    .then((result) => {
      if (result) {
        result.burger_name = req.body.burger_name;
        result.price = req.body.price;
        result
          .save()
          .then((user) => {
            res.status(200).json({
              message: "Burger updated successfully",
              response: 200,
              user: result,
            });
          })
          .catch((err) => {
            res.status(500).json({
              message: "Internal server error",
              response: 500,
              error: err,
            });
          });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Internal server error", response: 500, error: err });
    });
};

module.exports = burgerEditCtrls;
