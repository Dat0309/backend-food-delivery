import express from "express";
import asyncHandler from "express-async-handler";
import CategoriesType from "../Models/CategoriesTypeModel.js";
import { admin, protect } from "./../Middleware/AuthMiddleware.js";

const categoriesTypeRoute = express.Router();

// GET ALL CATEGORIES TYPE
categoriesTypeRoute.get(
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
        const count = await CategoriesType.countDocuments({ ...keyword });
        const type = await CategoriesType.find({ ...keyword })
            .limit(pageSize)
            .skip(pageSize * (page - 1))
            .sort({ _id: -1 });
        res.json({ type,count , page, pages: Math.ceil(count / pageSize) });
    })
);

// ADMIN GET ALL CATEGORIES TYPE WITHOUT SEARCH AND PEGINATION
categoriesTypeRoute.get(
    "/all",
    protect,
    admin,
    asyncHandler(async (req, res) => {
        const type = await CategoriesType.find({}).sort({ _id: -1 });
        res.json(type);
    })
);

// GET SINGLE CATEGRIES
categoriesTypeRoute.get(
    "/:id",
    asyncHandler(async (req, res) => {
        const type = await CategoriesType.findById(req.params.id);
        if (type) {
            res.json(type);
        } else {
            res.status(404);
            throw new Error("Categries not Found");
        }
    })
);

// DELETE CATEGRIES
categoriesTypeRoute.delete(
    "/:id",
    protect,
    admin,
    asyncHandler(async (req, res) => {
        const categories = await CategoriesType.findById(req.params.id);
        if (categories) {
            await categories.remove();
            res.json({ message: "Type deleted" });
        } else {
            res.status(404);
            throw new Error("Type not Found");
        }
    })
);

// CREATE CATEGRIES
categoriesTypeRoute.post(
    "/",
    protect,
    admin,
    asyncHandler(async (req, res) => {
        const { name, description, image } = req.body;
        const categoryExist = await CategoriesType.findOne({ name });
        if (categoryExist) {
            res.status(400);
            throw new Error("Type name already exist");
        } else {
            const category = new CategoriesType({
                name,
                description,
                image,
                user: req.user._id,
            });
            if (category) {
                const createdcategory = await category.save();
                res.status(201).json(createdcategory);
            } else {
                res.status(400);
                throw new Error("Invalid type data");
            }
        }
    })
);

// UPDATE CATEGORY
categoriesTypeRoute.put(
    "/:id",
    protect,
    admin,
    asyncHandler(async (req, res) => {
        const { name, description, image } = req.body;
        const category = await Categories.findById(req.params.id);
        if (category) {
            category.name = name || category.name;
            category.description = description || product.description;
            category.image = image || category.image;

            const updatedCategory = await category.save();
            res.json(updatedCategory);
        } else {
            res.status(404);
            throw new Error("Type not found");
        }
    })
);

export default categoriesTypeRoute;
