const express = require("express");
const router = express.Router();
// const userValidation = require("../users/user.validation");
const loginController = require("../login/login.controller");


router.post(
  "/user_registration",
  loginController.userRegistrationDetails
);



module.exports = router;