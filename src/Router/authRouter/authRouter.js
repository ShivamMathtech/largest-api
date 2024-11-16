const express = require("express");
const signUpCtrls = require("../../controller/authCtrls/signupCtrls");
const loginCtrls = require("../../controller/authCtrls/loginCtrls");
const updateCtrls = require("../../controller/authCtrls/updateCtrls");
const deleteCtrls = require("../../controller/authCtrls/deleteCtrls");
const forgetPasswordCtrls = require("../../controller/authCtrls/forgetPasswordCtrls");
const showProfileCtrls = require("../../controller/authCtrls/showProfileCtrls");
const authRouter = express.Router();
authRouter.post("/api/login", loginCtrls);

authRouter.post("/api/signup", signUpCtrls);

authRouter.put("/api/update/:email", updateCtrls);

authRouter.delete("/api/delete/:email", deleteCtrls);

authRouter.post("/api/forgetpassword/:email", forgetPasswordCtrls);

authRouter.get("/api/profile/:email", showProfileCtrls);

module.exports = authRouter;
