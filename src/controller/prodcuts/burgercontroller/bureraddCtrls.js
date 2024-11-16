let burger = require("../../../modal/burgerdb");
let burgerAddCtrl = (req, res) => {
  // adding logic written here

  burger
    .findOne({ name: req.body.burger_name })
    .then((result) => {
      if (result) {
        res.status(409).json({
          message: "Burger already exists",
          response: 409,
        });
      } else {
        let newBurger = new burger(req.body);
        newBurger
          .save()
          .then((burger) => {
            res.status(201).json({
              message: "Burger added successfully",
              response: 201,
              data: burger,
            });
          })
          .catch((error) => {
            res.status(500).json({
              message: "Server Error",
              error: error.message,
              response: 500,
            });
          });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Server Error",
        error: err.message,
        response: 500,
      });
    });
};

module.exports = burgerAddCtrl;
