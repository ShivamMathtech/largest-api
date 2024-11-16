let burger = require("../../../modal/burgerdb");
let deleteBurgerCtrls = (req, res) => {
  // Implement the logic of the delete controller here
  burger.findOne({ burger_name: req.params["burger_name"] }).then((result) => {
    if (!result) {
      res.status(404).json({ message: "Burger not found", response: 404 });
    } else {
      result
        .deleteOne()
        .then((d) => {
          res.status(200).json({
            message: "Burger deleted successfully",
            response: 200,
            data: d,
          });
        })
        .catch((err) => {
          res.status(500).json({
            message: "Failed to delete burger",
            response: 500,
            error: err,
          });
        });
    }
  });
};

module.exports = deleteBurgerCtrls;
