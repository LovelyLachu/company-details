const { companyModel } = require("../models/company.model");
const { postCompanySchema } = require("../validations/company.validation");

exports.postCompany = async (req, res) => {
  console.log(req.body, "req.body");
  const { error, value } = postCompanySchema.validate(req.body);
  const newCompany = await companyModel.create(value);
  if (error) {
    return res.status(400).json({
      msg: error.details[0].message,
    });
  }

  return res.status(201).json({
    msg: "COMPANY CREATED SUCCESSFULLY",
    data: newCompany,
  });
};

exports.getCompany = async (req, res) => {
  try {
    const { page, pageSize, search } = req.body;
    const skip = (page - 1) * pageSize;

    const comapnies = await companyModel
      .find({})
      .skip(skip)
      .limit(pageSize)
      .lean();

    res.status(200).json({
      data: comapnies,
      msg: "FETCHED SUCCESSFULLY",
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      msg: "Internal server error",
    });
  }
};
