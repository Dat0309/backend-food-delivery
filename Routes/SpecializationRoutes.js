import express from "express";
import asyncHandler from "express-async-handler";
import Specialization from "../Models/SpecializationModel.js";
import { admin, protect } from "./../Middleware/AuthMiddleware.js";

const specializationRoute = express.Router();

specializationRoute.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', ['*']);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// GET ALL CATEEGORIES
specializationRoute.get(
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
        const count = await Specialization.countDocuments({ ...keyword });
        const specialization = await Specialization.find({ ...keyword })
            .limit(pageSize)
            .skip(pageSize * (page - 1))
            .sort({ _id: -1 });
        res.json({ specialization, page, pages: Math.ceil(count / pageSize) });
    })
);

// ADMIN GET ALL CATEGORIES WITHOUT SEARCH AND PEGINATION
specializationRoute.get(
    "/all",
    protect,
    admin,
    asyncHandler(async (req, res) => {
        const specialization = await Specialization.find({}).sort({ _id: -1 });
        res.json(specialization);
    })
);

// GET SINGLE CATEGRIES
specializationRoute.get(
    "/:id",
    asyncHandler(async (req, res) => {
        const specialization = await Specialization.findById(req.params.id);
        if (specialization) {
            res.json(specialization);
        } else {
            res.status(404);
            throw new Error("Categries not Found");
        }
    })
);

// DELETE CATEGRIES
specializationRoute.delete(
    "/:id",
    protect,
    admin,
    asyncHandler(async (req, res) => {
        const specialization = await Specialization.findById(req.params.id);
        if (specialization) {
            await specialization.remove();
            res.json({ message: "Specialization deleted" });
        } else {
            res.status(404);
            throw new Error("Categries not Found");
        }
    })
);

// CREATE CATEGRIES
specializationRoute.post(
    "/",
    protect,
    admin,
    asyncHandler(async (req, res) => {
        const { name, description } = req.body;
        const specializationExist = await Specialization.findOne({ name });
        if (specializationExist) {
            res.status(400);
            throw new Error("Categries name already exist");
        } else {
            const specialization = new Specialization({
                name,
                description,
                user: req.user._id,
            });
            if (specialization) {
                const createdspecialization = await specialization.save();
                res.status(201).json(createdspecialization);
            } else {
                res.status(400);
                throw new Error("Invalid category data");
            }
        }
    })
);

// UPDATE CATEGORY
specializationRoute.put(
    "/:id",
    protect,
    admin,
    asyncHandler(async (req, res) => {
        const { name, description } = req.body;
        const specialization = await Specialization.findById(req.params.id);
        if (specialization) {
            specialization.name = name || specialization.name;
            specialization.description = description || specialization.description;

            const updatedSpecialization = await specialization.save();
            res.json(updatedSpecialization);
        } else {
            res.status(404);
            throw new Error("Category not found");
        }
    })
);

export default specializationRoute;