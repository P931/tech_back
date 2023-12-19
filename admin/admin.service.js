const httpStatus = require("http-status");
const db = require("../_helpers/db");
const AppError = require("../utils/AppError");
const bcrypt = require("bcryptjs");
const moment = require("moment/moment");

const adminCredentialsDetails = async ({
  adminFirstName,
  adminLastName,
  adminEmail,
  adminPassword,

}) => {

  try {

    if (!adminFirstName || !adminLastName || !adminEmail || !adminPassword) {
      throw new AppError(httpStatus.NOT_FOUND, "Please Enter the valid adminCredentialsDetails")
    }

    const adminCredentialData = await db.Admin.create({
      adminFirstName,
      adminLastName,
      adminEmail,
      adminPassword,

    })

    // console.log("adminCredentialData is :- ", adminCredentialData)

    return adminCredentialData

  } catch (error) {

    console.log("error in adminCredentialsDetails is :- ", error)
  }
}


module.exports = {
  adminCredentialsDetails,

};