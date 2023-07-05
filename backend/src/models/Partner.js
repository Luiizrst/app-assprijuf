const mongoose = require("mongoose");
const aws = require("aws-sdk");

const s3 = new aws.S3();

const PartnerSchema = new mongoose.Schema({
  name: {
    type: String,
  },

  advantages: {
    type: String,
  },

  description: {
    type: String,
  },

  imageURL: {
    type: String,
  },

  key: {
    type: String,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

if (this.key != null) {
  PartnerSchema.pre("remove", function () {
    return s3
      .deleteObject({
        Bucket: "app-assprijuf",
        Key: this.key,
      })
      .promise();
  });
}

module.exports = mongoose.model("Partner", PartnerSchema);
