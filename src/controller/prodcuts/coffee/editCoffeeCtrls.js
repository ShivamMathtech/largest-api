const Coffee = require("../../../modal/coffeedb");
const editCoffeeCtrls = (req, res) => {
  Coffee.findOne({ name: req.params["name"] }).then((result) => {
    if (!result) {
      return res.status(404).json({ message: "Coffee not found" });
    }
    result.name = req.body.name;
    result.price = req.body.price;

    result
      .save()
      .then((savedCoffee) => {
        res.status(200).json({
          message: "Coffee updated successfully",
          data: savedCoffee,
          response: 200,
        });
      })
      .catch((error) => {
        res
          .status(500)
          .json({ message: "Error updating coffee", error, response: 500 });
      })
      .catch((err) => {
        res
          .status(500)
          .json({ message: "Internal Server Error", err, response: 500 });
      });
  });
};

module.exports = editCoffeeCtrls;
