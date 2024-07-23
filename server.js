require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const fs = require("fs");

const YAML = require("yaml");
const swaggerUi = require("swagger-ui-express");
const file = fs.readFileSync("./schema.yaml", "utf8");
const swaggerDocument = YAML.parse(file);

const { getCompany, postCompany } = require("./controller/company.controller");

require("./config/database");

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan("combined"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get("/company", getCompany);
app.post("/company", postCompany);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(process.env.PORT, () =>
  console.log(`Server running on port number ${process.env.PORT}`)
);
