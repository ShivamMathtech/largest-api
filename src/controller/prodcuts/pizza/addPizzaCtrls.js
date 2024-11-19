const { response } = require("express");
let Pizza = require("../../../modal/pizzadb");
let addPizzaCtrls = (req, res) => {
  // all the logic of adding pizza into the data base will be written here
  Pizza.findOne({ name: req.params["name"] })
    .then((result) => {
      if (!result) {
        res.status(400).json({
          message: "Pizza are already existed",
          response: 409,
        });
      } else {
        // Create a new instance of the Pizza
        const newPizza = new Pizza(req.body);
        newPizza
          .save()
          .then((pizza) => {
            res.status(200).json({
              message: "Pizza is saved successfully",
              response: 200,
            });
          })
          .catch((err) => {
            res.status(500).json({
              message: "Internal Server Error",
              response: 500,
              error: err.message,
            });
          });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Server error", response: 500, error: err });
    });
};
module.exports = addPizzaCtrls;
