const { Schema, model } = require("mongoose");

const companySchema = new Schema(
  {
    companyName: {
      type: String,
      index: true,
      unique: true,
    },
    logo: {
      type: String,
    },
    hoAddress: {
      type: String,
    },
    country: {
      type: String,
      index: true,
    },
    postalCode: {
      type: Number,
    },
    city: {
      type: String,
    },
    contactNumber: {
      type: String,
    },
    websiteUrl: {
      type: String,
    },
    keyContact: {
      type: Object,
    },
    briefDetails: {
      type: Object,
    },
    managementTeam: {
      type: Array,
    },
    productPortFolio: {
      type: Array,
      index: true,
    },
  },
  { timestamps: true }
);

exports.companyModel = model(
  "company_details",
  companySchema,
  "company_details"
);
