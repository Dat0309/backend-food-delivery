import express from "express";
import asyncHandler from "express-async-handler";
import Table from "../Models/TableModel";
import { admin, protect } from "./../Middleware/AuthMiddleware.js";

const tableRoute = express.Router();

//GET ALL TABLE
tableRoute.get(
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

        const count = await Table.countDocuments({...keyword});
        const tables = await Table.find({...keyword})
        .limit(pageSize)
        .skip(pageSize * (page - 1))
        .sort({ _id: -1});

        res.json({tables,count, page, pages: Math.ceil(count / pageSize)});
    })
);

// ADMIN GET ALL TABLE WITHOUT SEARCH AND PEGINATION
tableRoute.get(
    "/all",
    protect,
    admin,
    asyncHandler(async (req, res) => {
      const tables = await Table.find({}).sort({ _id: -1 });
      res.json(tables);
    })
);

// GET SINGLE TABLE
tableRoute.get(
    "/:id",
    asyncHandler(async (req, res) => {
        const table = await Table.findById(req.params.id);
        if(table){
            res.json(table);
        }else{
            res.status(404);
            throw new Error("Table not found");
        }
    })
);

// DELETE TABLE
tableRoute.delete(
    "/:id",
    protect,
    admin,
    asyncHandler(async (req, res) => {
        const table = await Table.findById(req.params.id);
        if(table){
            await table.remove();
            res.json({message: "Table deleted"});
        }else{
            res.status(404);
            throw new Error("Table not found");
        }
    })
);

// CREATE TABLE
tableRoute.post(
    "/",
    protect,
    admin,
    asyncHandler(async (req, res) => {
        const {restaurant_id,code, capacity} = req.body;
        const tableExits = await Table.findOne({code});
        if(tableExits){
            res.status(400);
            throw new Error("Table name already exits in restaurant");
        }else{
            const table = new Table({
                restaurant_id,
                code,
                capacity,
            });
            if(table){
                const createdTable = await table.save();
                res.status(201).json(createdTable);
            }else{
                res.status(400);
                throw new Error("Invalid table data");
            }
        }
    })
);

// UPDATE TABLE
tableRoute.put(
    "/:id",
    protect,
    admin,
    asyncHandler(async (req, res) => {
        const {code, capacity, status} = req.body;
        const table = await Table.findById(req.params.id);
        if(table){
            table.code = code || table.code;
            table.capacity = capacity || table.capacity;
            table.status = status || table.status;

            const updateTable = await table.save();
            res.json(updateTable);
        } else{
            res.status(404);
            throw new Error("Table not found");
        }
    })
);

export default tableRoute;