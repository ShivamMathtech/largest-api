const express = require("express");
const coffeeAddCtrls = require("../../../controller/prodcuts/coffee/coffeeAddCtr");
const showCoffeeCtrls = require("../../../controller/prodcuts/coffee/showCoffeeCtrls");
const showcoffeeSpecifiedCtrls = require("../../../controller/prodcuts/coffee/showSpecifiedCoffeeCtrls");
const editCoffeeCtrls = require("../../../controller/prodcuts/coffee/editCoffeeCtrls");
const coffeeDeleteCtrls = require("../../../controller/prodcuts/coffee/deleteCoffeeCtrls");
const coffeeRouter = express.Router();
coffeeRouter.get("/showcoffee", showCoffeeCtrls);

coffeeRouter.post("/addCoffee", coffeeAddCtrls);

coffeeRouter.get("/getCoffee/:name", showcoffeeSpecifiedCtrls);

coffeeRouter.put("/editCoffee/:name", editCoffeeCtrls);

coffeeRouter.delete("/deleteCoffee/:name", coffeeDeleteCtrls);

module.exports = coffeeRouter;
