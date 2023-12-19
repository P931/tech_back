const httpStatus = require("http-status");
const db = require("../_helpers/db");
const AppError = require("../utils/AppError");
const bcrypt = require("bcryptjs");
const moment = require("moment/moment");

const customerCredentialsDetails = async ({

  customerFirstName,
  customerLastName,
  customerEmail,
  customerPassword,

}) => {

  try {

    if (!customerFirstName || !customerLastName || !customerEmail || !customerPassword) {
      throw new AppError(httpStatus.NOT_FOUND, "Please Enter the valid customerCredentialsDetails")
    }

    const customerCredentialData = await db.Customer.create({

      customerFirstName,
      customerLastName,
      customerEmail,
      customerPassword,

    })

    // console.log("customerCredentialData is :- ", customerCredentialData)

    return customerCredentialData

  } catch (error) {

    console.log("error in customerCredentialsDetails is :- ", error)
  }
}


module.exports = {
  customerCredentialsDetails,

};