const router = require("express").Router();
const { postCompany, getCompany } = require("../controller/company.controller");
const bodyParser = require("body-parser");

const urlEnCodedParser = bodyParser.urlencoded({ extended: false });

router.post("/company", urlEnCodedParser, postCompany);
router.get("/company", getCompany);

module.exports.router;
