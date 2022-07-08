import express from "express";
import asyncHandler from "express-async-handler";
import Diseases from "../Models/DiseasesModel.js";

const diseasesRoute = express.Router();

diseasesRoute.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', ['*']);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// GET ALL DISEASES
diseasesRoute.get(
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
        const count = await Diseases.countDocuments({ ...keyword });
        const diseases = await Diseases.find({ ...keyword })
            .limit(pageSize)
            .skip(pageSize * (page - 1))
            .sort({ _id: -1 });
        res.json({ diseases, page, pages: Math.ceil(count / pageSize) });
    })
);

// GET SINGLE DISEASES
diseasesRoute.get(
    "/:id",
    asyncHandler(async (req, res) => {
        const diseases = await Diseases.findById(req.params.id);
        if (diseases) {
            res.json(diseases);
        } else {
            res.status(404);
            throw new Error("Diseases not Found");
        }
    })
);

//Get diseases by specialization
diseasesRoute.get(
    "/specialization/:id",
    asyncHandler(async (req, res) => {
        const category = req.params.id;
        const diseases = await Diseases.find({ "category": category })
            .sort({ _id: -1 });
        res.json({ diseases });
    })
);

export default diseasesRoute;