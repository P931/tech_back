const express = require("express");
const router = express.Router();
// const userValidation = require("../users/user.validation");
const adminController = require("../admin/admin.controller");


router.post(
  "/admin_registration",
  adminController.adminRegistrationDetails
);


module.exports = router;