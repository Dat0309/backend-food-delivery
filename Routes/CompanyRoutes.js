import express from "express";
import asyncHandler from "express-async-handler";
import Company from "../Models/CompanyModel.js";
import { admin, protect } from "./../Middleware/AuthMiddleware.js";

const companyRoute = express.Router();

companyRoute.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', ['*']);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// GET ALL CATEEGORIES
companyRoute.get(
    "/",
    asyncHandler(async (req, res) => {
        const pageSize = 12;
        const page = Number(req.query.pageNumber) || 1;
        const keyword = req.query.keyword
            ? {
                name: {
                    $regex: req.query.keyword,
                    $options: "i",
                },
            }
            : {};
        const count = await Company.countDocuments({ ...keyword });
        const company = await Company.find({ ...keyword })
            .limit(pageSize)
            .skip(pageSize * (page - 1))
            .sort({ _id: -1 });
        res.json({ company, page, pages: Math.ceil(count / pageSize) });
    })
);

// ADMIN GET ALL COMPANY WITHOUT SEARCH AND PEGINATION
companyRoute.get(
    "/all",
    protect,
    admin,
    asyncHandler(async (req, res) => {
        const company = await Company.find({}).sort({ _id: -1 });
        res.json(company);
    })
);

// GET SINGLE COMPANY
companyRoute.get(
    "/:id",
    asyncHandler(async (req, res) => {
        const company = await Company.findById(req.params.id);
        if (company) {
            res.json(company);
        } else {
            res.status(404);
            throw new Error("Company not Found");
        }
    })
);

// DELETE COMPANY
companyRoute.delete(
    "/:id",
    protect,
    admin,
    asyncHandler(async (req, res) => {
        const company = await Company.findById(req.params.id);
        if (company) {
            await company.remove();
            res.json({ message: "Company deleted" });
        } else {
            res.status(404);
            throw new Error("Company not Found");
        }
    })
);

// CREATE COMPANY
companyRoute.post(
    "/",
    protect,
    admin,
    asyncHandler(async (req, res) => {
        const { name, description, image, province, district, ward, street, longtitude, latitute } = req.body;
        const companyExist = await Company.findOne({ name });
        if (companyExist) {
            res.status(400);
            throw new Error("Company name already exist");
        } else {
            const company = new Company({
                name,
                description,
                image,
                province,
                district,
                ward,
                street,
                longtitude,
                latitute
            });
            if (company) {
                const createdcompany = await company.save();
                res.status(201).json(createdcompany);
            } else {
                res.status(400);
                throw new Error("Invalid company data");
            }
        }
    })
);

// UPDATE Company
companyRoute.put(
    "/:id",
    protect,
    admin,
    asyncHandler(async (req, res) => {
        const { name, description, image, province, district, ward, street, longtitude, latitute } = req.body;
        const company = await Company.findById(req.params.id);
        if (company) {
            company.name = name || company.name;
            company.description = description || company.description;
            company.image = image || company.image;
            company.province = province || company.province;
            company.district = district || company.district;
            company.ward = ward || company.ward;
            company.street = street || company.street;
            company.longtitude = longtitude || company.longtitude;
            company.latitute = latitute || company.latitute;

            const updatedCompany = await company.save();
            res.json(updatedCompany);
        } else {
            res.status(404);
            throw new Error("Company not found");
        }
    })
);

export default companyRoute;