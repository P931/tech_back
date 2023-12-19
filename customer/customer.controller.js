const customerService = require("./customer.service");
const { USER_TYPE } = require("../_helpers/constant");
const createResponse = require("../utils/response");
const catchAsync = require("../utils/catchAsync");
const httpStatus = require("http-status");
const Message = require("../utils/message");


const customerRegistrationDetails = catchAsync(async (req, res) => {

  // console.log("req.body is :- ", req.body)

  const customerRegistrationData = await customerService.customerCredentialsDetails(req.body)

  createResponse(res, httpStatus.OK, Message.GENERAL, customerRegistrationData)

})


module.exports = {
  customerRegistrationDetails

};