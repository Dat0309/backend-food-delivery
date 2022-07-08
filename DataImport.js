import express from "express";
import User from "./Models/UserModel.js";
import users from "./data/users.js";
import asyncHandler from "express-async-handler";
import Doctor from "./Models/DoctorModel.js";
import doctors from "./data/doctor.js";
import Customer from "./Models/CustomerModel.js";
import customers from "./data/customer.js";
import Specialization from "./Models/SpecializationModel.js";
import specializations from "./data/specialization.js";
import Company from "./Models/CompanyModel.js";
import companies from "./data/company.js";
import diseases from "./data/diseases.js";
import Diseases from "./Models/DiseasesModel.js";

const ImportData = express.Router();

ImportData.post(
  "/user",
  asyncHandler(async (req, res) => {
    await User.deleteMany({});
    const importUser = await User.insertMany(users);
    res.send({ importUser });
  })
);

ImportData.post(
  "/doctor",
  asyncHandler(async (req, res) => {
    await Doctor.deleteMany({});
    const importDoctor = await Doctor.insertMany(doctors);
    res.send({ importDoctor });
  })
);

ImportData.post(
  "/customer",
  asyncHandler(async (req, res) => {
    await Customer.deleteMany({});
    const importCustomer = await Customer.insertMany(customers);
    res.send({ importCustomer });
  })
);

ImportData.post(
  "/specialization",
  asyncHandler(async (req, res) => {
    await Specialization.deleteMany({});
    const importSpecialization = await Specialization.insertMany(specializations);
    res.send({importSpecialization});
  })
);

ImportData.post(
  "/company",
  asyncHandler(async (req, res) => {
    await Company.deleteMany({});
    const importCompany = await Company.insertMany(companies);
    res.send({importCompany});
  })
);

ImportData.post(
  "/disease",
  asyncHandler(async (req, res) => {
    await Diseases.deleteMany({});
    const importDisease = await Diseases.insertMany(diseases);
    res.send({importDisease});
  })
);

export default ImportData;
