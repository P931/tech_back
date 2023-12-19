const AWS = require("aws-sdk");
AWS.config.update({ region: "me-central-1" });

const s3Account = {
  accessKeyId: "AKIAT5QTMYKIV7VHBR3U",
  secretAccessKey: "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",
};
const s3 = new AWS.S3(s3Account);

module.exports = s3;
