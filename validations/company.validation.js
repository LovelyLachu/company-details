const Joi = require("joi");

const managementTeamSchema = {
  name: Joi.string(),
  designation: Joi.string(),
  profile: Joi.string().max(150),
  linkedin: Joi.string().uri(),
};

const projectPortfolioSchema = {
  productName: Joi.string().required(),
  productDescription: Joi.string().required(),
  link: Joi.string().uri(),
};

exports.postCompanySchema = Joi.object({
  companyName: Joi.string().min(3).max(50).required(),
  logo: Joi.string(),
  hoAddress: Joi.string().required(),
  country: Joi.string().required(),
  postalCode: Joi.number().required(),
  city: Joi.string().required(),
  contactNumber: Joi.string().required(),
  websiteUrl: Joi.string().uri(),
  keyContact: Joi.object({
    name: Joi.string().min(3).max(20).required(),
    designation: Joi.string().required(),
    contactNumber: Joi.string().required(),
    email: Joi.string().email().required(),
  }),
  briefDetails: Joi.object({
    profile: Joi.string().max(200).required(),
    url: Joi.string().uri(),
    vision: Joi.string().max(200).required(),
  }),
  managementTeam: Joi.array().items(managementTeamSchema),
  productPortFolio: Joi.array().items(projectPortfolioSchema),
});
