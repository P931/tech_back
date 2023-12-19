const db = require("_helpers/db");

const createResponse = async (res, status, message, payload) => {
  return res.status(status).json({
    status,
    message,
    payload,
  });
};
module.exports = createResponse;
