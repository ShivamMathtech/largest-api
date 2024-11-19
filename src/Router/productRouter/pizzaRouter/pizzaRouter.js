const express = require("express");
const addPizzaCtrls = require("../../../controller/prodcuts/pizza/addPizzaCtrls");
const pizzaRouter = express.Router();

pizzaRouter.get("/showpizza", (req, res) => {
  res.status(200).json({
    message: "Welcome to our pizza delivery service!",
  });
});

pizzaRouter.post("/addpizza", addPizzaCtrls);

pizzaRouter.put("/update/:id", (req, res) => {
  res.status(200).json({
    message: "Pizza updated successfully!",
    updatedPizza: req.body,
  });
});

pizzaRouter.delete("/delete/:id", (req, res) => {
  res.status(200).json({
    message: "Pizza deleted successfully!",
    pizzaId: req.params.id,
  });
});

module.exports = pizzaRouter;
