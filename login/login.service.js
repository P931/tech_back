const httpStatus = require("http-status");
const db = require("../_helpers/db");
const customerEmail = require("../customer/customer.model");
const AppError = require("../utils/AppError");
const bcrypt = require("bcryptjs");
const moment = require("moment/moment");

const userCredentialsDetails = async ({

  userEmail,
  userPassword,

}) => {

  try {

    if (!userEmail || !userPassword) {
      throw new AppError(httpStatus.NOT_FOUND, "Please Enter the valid userCredentialsDetails")
    }

    const userCredentialData = await db.User.findOne({

      where: { userEmail: userEmail },

      attributes: [

        "id",
        "userEmail",
        // "userPassword",
      ],

    })

    if (!userCredentialData) {
      throw new AppError(httpStatus.NOT_FOUND, "You are not allowed to login from here");
    }

    return userCredentialData

  } catch (error) {

    console.log("error in userCredentialsDetails is :- ", error)
  }
}


module.exports = {
  userCredentialsDetails,

};