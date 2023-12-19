const loginService = require("./login.service");
const { USER_TYPE } = require("../_helpers/constant");
const createResponse = require("../utils/response");
const catchAsync = require("../utils/catchAsync");
const httpStatus = require("http-status");
const Message = require("../utils/message");


const userRegistrationDetails = catchAsync(async (req, res) => {

  const { userEmail } = req.body;

  const customerEmails = await db.Customer.findAll({
    attributes: ['customerEmail'],
  });

  const customerEmailList = customerEmails.map(customer => customer.customerEmail);

  if (customerEmailList.includes(userEmail)) {
    return res.status(httpStatus.FORBIDDEN).json({
      status: httpStatus.FORBIDDEN,
      message: "You are not allowed to login from here"
    });
  }

  const loginRegistrationData = await loginService.userCredentialsDetails(req.body)

  createResponse(res, httpStatus.OK, Message.GENERAL, loginRegistrationData)

})


module.exports = {
  userRegistrationDetails

};