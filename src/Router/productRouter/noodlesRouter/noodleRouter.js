const express = require("express");
const showNoodel = require("../../../controller/prodcuts/noodle/showNoodel");
const addNoodelCtrls = require("../../../controller/prodcuts/noodle/addNoodleCtrls");
const editNoodelCtrls = require("../../../controller/prodcuts/noodle/editNoodelCtrls");
const noodleShowByName = require("../../../controller/prodcuts/noodle/shownoodelIdCtrls");
const deleteNoodel = require("../../../controller/prodcuts/noodle/deleteNoodlebyname");
const noodleRouter = express.Router();
noodleRouter.get("/shownoodel", showNoodel);

noodleRouter.post("/addnoodle", addNoodelCtrls);

noodleRouter.get("/shownoodel/:name", noodleShowByName);

noodleRouter.put("/editnoodle/:name", editNoodelCtrls);

noodleRouter.delete("/deletenoodle/:name", deleteNoodel);

module.exports = noodleRouter;
