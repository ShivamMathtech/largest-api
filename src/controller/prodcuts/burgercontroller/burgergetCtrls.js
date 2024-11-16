const { response } = require("express");
let burger = require("../../../modal/burgerdb");
let burgerGetCtrls = (req, res) => {
  // Fetch the burger from the database
  burger
    .find()
    .then((burger) => {
      if (!burger) {
        res.status(404).json({ message: "Burger not found", response: 400 });
      } else {
        res.status(200).json({
          message: "Burger found successfully",
          response: 200,
          data: burger,
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: "Error in fetching burger",
        response: 500,
        error: error,
      });
    });
};

module.exports = burgerGetCtrls;
