const Noodel = require("../../../modal/noodle");
let addNoodelCtrls = (req, res) => {
  Noodel.findOne({ name: req.body.name })
    .then((result) => {
      if (result) {
        res
          .status(409)
          .json({ message: "Noodle already exists", response: 409 });
      } else {
        const newNoodel = new Noodel(req.body);
        newNoodel
          .save()
          .then((savedNoodel) => {
            res.status(201).json({
              message: "Noodle added successfully",
              response: 201,
              data: savedNoodel,
            });
          })
          .catch((err) => {
            res
              .status(500)
              .json({ message: "Server error", response: 500, error: err });
          });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Server error", response: 500, error: err });
    });
};

module.exports = addNoodelCtrls;
