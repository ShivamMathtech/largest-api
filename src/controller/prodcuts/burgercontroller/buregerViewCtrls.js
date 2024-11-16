let burger = require("../../../modal/burgerdb");
let burgerViewCtrls = (req, res) => {
  // Implementation of the view burger with specified name
  burger
    .findOne({ burger_name: req.params["burger_name"] })
    .then((burger) => {
      if (burger) {
        res.status(200).json({
          message: "Burger found successfully",
          response: 200,
          data: burger,
        });
      } else {
        res.status(404).json({
          message: "Burger not found",
          response: 404,
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        error: error,
        response: 500,
        message: "Error in finding the burger",
      });
    });
};

module.exports = burgerViewCtrls;
