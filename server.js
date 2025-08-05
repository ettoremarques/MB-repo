const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "dist")));

const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;
const telRegex = /^\(\d{2}\) (\d{4}|\d{5})\-\d{4}$/;

const validateJuridicForm = (data) => {
  const errors = {};
  const isCNPJValidFormat = cnpjRegex.exec(data.cnpj);
  const isCompanyNameValid = !!data.companyName;

  const currentDate = new Date();
  const openingDate = new Date(data.openingDate);

  const isDateValid = openingDate < currentDate;

  if (!isDateValid) {
    errors.openingDate = "Data de abertura da empresa inválida";
  }

  if (!isCNPJValidFormat) {
    errors.cnpj = "CNPJ inválido";
  }

  if (!isCompanyNameValid) {
    errors.companyName = "Nome da empresa inválido";
  }

  return errors;
};

const validateNaturalForm = (data) => {
  const errors = {};
  const isCPFValidFormat = cpfRegex.exec(data.cpf);
  const isNameValid = !!data.name;

  const currentDate = new Date();
  const birthDate = new Date(data.birthDate);

  const isDateValid = birthDate < currentDate;

  if (!isDateValid) {
    errors.birthDate = "Data de nascimento inválida";
  }

  if (!isCPFValidFormat) {
    errors.cnpj = "CPF inválido";
  }

  if (!isNameValid) {
    errors.companyName = "Nome inválido";
  }

  return errors;
};

app.get("/registration", (req, res) => {
  res.sendFile(path.join(__dirname, "./dist/index.html"));
});

app.post("/registration", (req, res) => {
  const isTelValid = telRegex.exec(req.body.tel);
  let formErrors = {};

  if (!isTelValid) {
    formErrors.tel = "Telefone inválido";
  }

  if (!req.body.password) {
    formErrors.password = "Senha inválida";
  }

  if (!req.body.personType) {
    formErrors.personType = "Selecione o tipo de pessoa";
  }

  if (req.body.personType === "juridic") {
    formErrors = { ...formErrors, ...validateJuridicForm(req.body) };
  }

  if (req.body.personType === "natural") {
    formErrors = { ...formErrors, ...validateNaturalForm(req.body) };
  }

  if (Object.keys(formErrors).length) {
    res.status(400).send(JSON.stringify(formErrors));
  } else {
    res.status(200).send({});
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
