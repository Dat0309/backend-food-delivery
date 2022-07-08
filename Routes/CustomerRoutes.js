import express from "express";
import asyncHandler from "express-async-handler";
import Customer from "../Models/CustomerModel.js";
import { admin, protect } from "./../Middleware/AuthMiddleware.js";

const customerRoute = express.Router();

customerRoute.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', ['*']);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

//GET ALLL DOCTOR
customerRoute.get(
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

        const count = await Customer.countDocuments({ ...keyword });
        const customers = await Customer.find({ ...keyword })
            .limit(pageSize)
            .skip(pageSize * (page - 1))
            .sort({ _id: -1 });

        res.json({ customers, page, pages: Math.ceil(count / pageSize) });
    })
);

// ADMIN GET ALL DOCTOR WITHOUT SEARCH AND PEGINATION
customerRoute.get(
    "/all",
    protect,
    admin,
    asyncHandler(async (req, res) => {
        const customers = await Customer.find({}).sort({ _id: -1 });
        res.json(customers);
    })
);

// GET SINGLE DOCTOR
customerRoute.get(
    "/:id",
    asyncHandler(async (req, res) => {
        const customer = await Customer.findById(req.params.id);
        if (customer) {
            res.json(customer);
        } else {
            res.status(404);
            throw new Error("customer not Found");
        }
    })
);

// DELETE customer
customerRoute.delete(
    "/:id",
    protect,
    admin,
    asyncHandler(async (req, res) => {
        const customer = await Customer.findById(req.params.id);
        if (customer) {
            await customer.remove();
            res.json({ message: "customer deleted" });
        } else {
            res.status(404);
            throw new Error("customer not Found");
        }
    })
);

// CREATE customer
customerRoute.post(
    "/",
    asyncHandler(async (req, res) => {
        const { user_id, first_name, last_name, date_of_birth, genre,
            description, telephone, avatar_url,
            province, district, ward, street } = req.body;
        const customerExist = await Customer.findOne({ user_id });
        if (customerExist) {
            res.status(400);
            throw new Error("customer name already exist");
        } else {
            const customer = new Customer({
                user_id,
                first_name,
                last_name,
                date_of_birth,
                genre,
                description,
                telephone,
                avatar_url,
                province,
                district,
                ward,
                street,
            });
            if (customer) {
                const createdcustomer = await customer.save();
                res.status(201).json(createdcustomer);
            } else {
                res.status(400);
                throw new Error("Invalid customer data");
            }
        }
    })
);

// Get customer by user_id
customerRoute.get(
    "/users/:id",
    asyncHandler(async (req, res) => {
        const user_id = req.params.id;
        const customer = await Customer.find({ "user_id": user_id })
            .sort({ _id: -1 });
        res.json({ customer });
    })
);

// UPDATE customer
customerRoute.put(
    "/:id",
    asyncHandler(async (req, res) => {
        const { user_id, first_name, last_name, date_of_birth, genre,
            description, telephone, avatar_url,
            province, district, ward, street} = req.body;
        const customer = await Customer.findById(req.params.id);
        if (customer) {
            customer.user_id = user_id || customer.user_id;
            customer.first_name = first_name || customer.first_name;
            customer.last_name = last_name || customer.last_name;
            customer.date_of_birth = date_of_birth || customer.date_of_birth;
            customer.genre = genre || customer.genre;
            customer.description = description || customer.description;
            customer.telephone = telephone || customer.telephone;
            customer.avatar_url = avatar_url || customer.avatar_url;
            customer.province = province || customer.province;
            customer.district = district || customer.district;
            customer.ward = ward || customer.ward;
            customer.street = street || customer.street;

            const updatedcustomer = await customer.save();
            res.json(updatedcustomer);
        } else {
            res.status(404);
            throw new Error("customer not found");
        }
    })
);
export default customerRoute;