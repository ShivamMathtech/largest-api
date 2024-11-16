const Coffee = require("../../../modal/coffeedb");
let showCoffeeCtrls = (req, res) => {
  Coffee.find()
    .then((result) => {
      if (result) {
        res.status(200).json({
          message: "Coffees found successfully",
          response: 200,
          data: result,
        });
      } else {
        res.status(404).json({
          message: "No coffees found",
          response: 404,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error in finding coffees",
        response: 500,
        error: err,
      });
    });
};

module.exports = showCoffeeCtrls;
