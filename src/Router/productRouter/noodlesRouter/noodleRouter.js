const express = require("express");
const noodleRouter = express.Router();
noodleRouter.get("/shownoodel", (req, res) => {
  res.status(200).json({
    message: "Welcome to the Noodle Shop!",
  });
});

noodleRouter.post("/addnoodle", (req, res) => {
  res.status(201).json({
    message: "Noodle added successfully",
  });
});

noodleRouter.get("/shownoodel/:id", (req, res) => {
  res.status(200).json({
    message: `Noodle with ID ${req.params.id} viewed successfully!`,
  });
});

noodleRouter.put("/editnoodle/:id", (req, res) => {
  res.status(200).json({
    message: `Noodle with ID ${req.params.id} updated successfully`,
  });
});

noodleRouter.delete("/deletenoodle/:id", (req, res) => {
  res.status(200).json({
    message: `Noodle with ID ${req.params.id} deleted successfully!`,
  });
});

module.exports = noodleRouter;
