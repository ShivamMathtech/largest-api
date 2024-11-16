let Coffee = require("../../../modal/coffeedb");
const coffeeAddCtrls = (req, res) => {
  Coffee.findOne({ name: req.body.name })
    .then((results) => {
      if (results) {
        res.status(409).json({
          message: "Coffee already exists",
          response: 409,
        });
      } else {
        const newCoffee = new Coffee(req.body);
        newCoffee
          .save()
          .then((coffee) => {
            res.status(200).json({
              message: "Coffee added successfully",
              response: 200,
              coffee: coffee,
            });
          })
          .catch((err) => {
            res.status(500).json({
              message: "Failed to add coffee",
              response: 500,
              error: err,
            });
          });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Failed to find coffee",
        response: 500,
        error: err,
      });
    });
};

module.exports = coffeeAddCtrls;
