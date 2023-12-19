const adminService = require("./admin.service");
const { USER_TYPE } = require("../_helpers/constant");
const createResponse = require("../utils/response");
const catchAsync = require("../utils/catchAsync");
const httpStatus = require("http-status");
const Message = require("../utils/message");


const adminRegistrationDetails = catchAsync(async (req, res) => {

  // console.log("req.body is :- ", req.body)

  const adminRegistrationData = await adminService.adminCredentialsDetails(req.body)

  createResponse(res, httpStatus.OK, Message.GENERAL, adminRegistrationData)

})


module.exports = {
  adminRegistrationDetails

};