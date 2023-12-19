const express = require("express");
const router = express.Router();
// const userValidation = require("../users/user.validation");
const customerController = require("../customer/customer.controller");


router.post(
  "/customer_registration",
  customerController.customerRegistrationDetails
);


module.exports = router;