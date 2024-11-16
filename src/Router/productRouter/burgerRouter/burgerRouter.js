const express = require("express");
const burgerAddCtrl = require("../../../controller/prodcuts/burgercontroller/bureraddCtrls");
const burgerEditCtrls = require("../../../controller/prodcuts/burgercontroller/burgerEditCtrls");
const burgerGetCtrls = require("../../../controller/prodcuts/burgercontroller/burgergetCtrls");
const deleteBurgerCtrls = require("../../../controller/prodcuts/burgercontroller/deleteburgerCtrls");
const burgerViewCtrls = require("../../../controller/prodcuts/burgercontroller/buregerViewCtrls");
const burgerRouter = express.Router();
burgerRouter.get("/showburger", burgerGetCtrls);

burgerRouter.post("/putburger", burgerAddCtrl);

burgerRouter.put("/editburger/:burger_name", burgerEditCtrls);

burgerRouter.delete("/deleteburger/:burger_name", deleteBurgerCtrls);

burgerRouter.get("/burgerview/:burger_name", burgerViewCtrls);

module.exports = burgerRouter;
