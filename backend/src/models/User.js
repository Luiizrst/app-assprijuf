const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const aws = require("aws-sdk");

const s3 = new aws.S3();

const UserSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  responsible: {
    type: String,
    required: true,
  },

  registration_number: {
    type: String,
    required: true,
  },

  masp: {
    type: String,
    required: true,
  },

  blood_type: {
    type: String,
    required: true,
  },

  rg: {
    type: String,
    required: true,
  },

  cpf: {
    type: String,
    required: true,
  },

  date_of_birth: {
    type: String,
    required: true,
  },

  marital_status: {
    type: String,
    required: true,
  },

  naturalness: {
    type: String,
    required: true,
  },

  profession: {
    type: String,
    required: true,
  },

  prison_unit: {
    type: String,
    required: true,
  },

  fathers_name: {
    type: String,
    required: true,
  },

  mothers_name: {
    type: String,
    required: true,
  },

  adress: {
    type: String,
    required: true,
  },

  number: {
    type: String,
    required: true,
  },

  city: {
    type: String,
    required: true,
  },

  neighborhood: {
    type: String,
    required: true,
  },

  cep: {
    type: String,
    required: true,
  },

  whatsapp_phone: {
    type: String,
    required: true,
  },

  cell_phone: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    lowercase: true,
  },

  password: {
    type: String,
    required: true,
    selected: false,
  },

  admin: {
    type: Number,
  },

  imageURL: {
    type: String,
  },

  key: {
    type: String,
  },

  accept: {
    type: Boolean,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;

  next();
});

if (this.key != null) {
  UserSchema.pre("remove", function () {
    return s3
      .deleteObject({
        Bucket: "app-assprijuf",
        Key: this.key,
      })
      .promise();
  });
}

module.exports = mongoose.model("User", UserSchema);
