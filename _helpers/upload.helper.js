const httpStatus = require("http-status");
const AppError = require("../utils/AppError");
const httpStatusCodes = require("../utils/httpStatusCodes");
const s3 = require("./s3.util");
const { v4: uuidv4 } = require("uuid");
const uploadOnS3 = (file, key, callback) => {
  console.log(key, "================key");
  const unique = uuidv4();
  try {
    s3.upload(
      {
        Bucket: "bigtrader",
        Key: `uploads/${key}/${unique}_${file.originalname}`,
        Body: file.buffer,
        ContentType: file.mimetype,
        ACL: "public-read",
      },
      (err, data) => {
        if (err) {
          throw new AppError(
            httpStatus.INTERNAL_SERVER,
            "Fail to upload on s3"
          );
        }
        // console.log(data, "============upload helper data");
        callback(data);
      }
    );
  } catch (err) {
    throw new AppError(httpStatusCodes.INTERNAL_SERVER, "Fail to upload on s3");
  }
};
module.exports = { uploadOnS3 };
