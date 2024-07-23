const { companyModel } = require("../models/company.model");
const { postCompanySchema } = require("../validations/company.validation");
const logger = require("../config/logger");

exports.postCompany = async (req, res) => {
  try {
    logger.info(JSON.stringify(req.body));
    const { error, value } = postCompanySchema.validate(req.body);
    const newCompany = await companyModel.create(value);
    if (error) {
      logger.error(error);
      return res.status(400).json({
        msg: error.details[0].message,
      });
    }

    return res.status(201).json({
      msg: "COMPANY CREATED SUCCESSFULLY",
      data: newCompany,
    });
  } catch (e) {
    logger.error(e);
    return res.status(500).json({
      msg: "Internal server error",
    });
  }
};

exports.getCompany = async (req, res) => {
  try {
    logger.info(JSON.stringify(req.body));

    const { page, pageSize, search } = req.body;
    const skip = (page - 1) * pageSize;
    const match = search
      ? {
          $or: [
            { companyName: { $regex: search, $options: "i" } },
            { country: { $regex: search, $options: "i" } },
            {
              "productPortFolio.productName": { $regex: search, $options: "i" },
            },
          ],
        }
      : {};
    const comapnies = await companyModel
      .find(match)
      .skip(skip)
      .limit(pageSize)
      .lean();

    res.status(200).json({
      data: comapnies,
      msg: "FETCHED SUCCESSFULLY",
    });
  } catch (e) {
    console.log(e);
    logger.error(e);
    return res.status(500).json({
      msg: "Internal server error",
    });
  }
};
