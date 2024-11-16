const express = require("express");
const burgerRouter = require("./burgerRouter/burgerRouter");
const pizzaRouter = require("./pizzaRouter/pizzaRouter");
const coffeeRouter = require("./coffeeRouter/coffeeRouter");
const noodleRouter = require("./noodlesRouter/noodleRouter");
const productRouter = express.Router();

// Mock data
productRouter.use("/burgers", burgerRouter);
productRouter.use("/pizzas", pizzaRouter);
productRouter.use("/coffee", coffeeRouter);
productRouter.use("/noodle", noodleRouter);
module.exports = productRouter;
