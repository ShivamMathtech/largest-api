const express = require("express");
const cors = require("cors");
const authRouter = require("./Router/authRouter/authRouter");
const productRouter = require("./Router/productRouter/productRouter");
const env = require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());
app.use("/auth", authRouter);
app.use("/products", productRouter);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
