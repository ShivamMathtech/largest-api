const express = require("express");
const coffeeRouter = express.Router();
coffeeRouter.get("/showcoffee", (req, res) => {
  res.status(200).json({
    message: "Welcome to the Coffee Shop!",
  });
});

coffeeRouter.post("/addCoffee", (req, res) => {
  const coffee = req.body;
  res.status(201).json({
    message: "Coffee added successfully",
    coffee,
  });
});

coffeeRouter.put("/editCoffee", (req, res) => {
  const coffeeId = req.params.coffeeId;
  const updatedCoffee = req.body;
  res.status(200).json({
    message: `Coffee with ID ${coffeeId} updated successfully`,
    updatedCoffee,
  });
});

coffeeRouter.delete("/deleteCoffee/:coffeeId", (req, res) => {
  const coffeeId = req.params.coffeeId;
  res.status(200).json({
    message: `Coffee with ID ${coffeeId} deleted successfully`,
  });
});

module.exports = coffeeRouter;
