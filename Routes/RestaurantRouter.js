import express from "express";
import asyncHandler from "express-async-handler";
import Restaurant from "../Models/RestaurantModel.js";
import { admin, protect } from "./../Middleware/AuthMiddleware.js";

const restaurantRoute = express.Router();

// GET ALL RESTAURANT
restaurantRoute.get(
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
      const count = await Restaurant.countDocuments({ ...keyword });
      const restaurant = await Restaurant.find({ ...keyword })
        .limit(pageSize)
        .skip(pageSize * (page - 1))
        .sort({ _id: -1 });
      res.json({ restaurant,count, page, pages: Math.ceil(count / pageSize) });
    })
  );

// ADMIN GET ALL RESTAURANT WITHOUT SEARCH AND PEGINATION
restaurantRoute.get(
    "/all",
    protect,
    admin,
    asyncHandler(async (req, res) => {
      const restaurant = await Restaurant.find({}).sort({ _id: -1 });
      res.json(restaurant);
    })
  );

// GET SINGLE RESTAURANT
restaurantRoute.get(
    "/:id",
    asyncHandler(async (req, res) => {
      const restaurant = await Restaurant.findById(req.params.id);
      if (restaurant) {
        res.json(restaurant);
      } else {
        res.status(404);
        throw new Error("Restaurant not Found");
      }
    })
  );

// RESTAURANT REVIEW
restaurantRoute.post(
    "/:id/review",
    protect,
    asyncHandler(async (req, res) => {
      const { rating, comment } = req.body;
      const restaurant = await Restaurant.findById(req.params.id);
  
      if (restaurant) {
        const alreadyReviewed = restaurant.reviews.find(
          (r) => r.user.toString() === req.user._id.toString()
        );
        if (alreadyReviewed) {
          res.status(400);
          throw new Error("Restaurant already Reviewed");
        }
        const review = {
          name: req.user.name,
          rating: Number(rating),
          comment,
          user: req.user._id,
        };
  
        restaurant.reviews.push(review);
        restaurant.numReviews = product.reviews.length;
        restaurant.rating =
          restaurant.reviews.reduce((acc, item) => item.rating + acc, 0) /
          restaurant.reviews.length;
  
        await restaurant.save();
        res.status(201).json({ message: "Reviewed Added" });
      } else {
        res.status(404);
        throw new Error("Restaurant not Found");
      }
    })
  );

// DELETE Restaurant
restaurantRoute.delete(
    "/:id",
    protect,
    admin,
    asyncHandler(async (req, res) => {
      const restaurant = await Restaurant.findById(req.params.id);
      if (restaurant) {
        await restaurant.remove();
        res.json({ message: "Restaurant deleted" });
      } else {
        res.status(404);
        throw new Error("Restaurant not Found");
      }
    })
  );

// CREATE RESTAURANT
restaurantRoute.post(
    "/",
    protect,
    admin,
    asyncHandler(async (req, res) => {
      const { name, description,province, district, ward, street, contact, image, thumb, menu_id } = req.body;
      const restaurantExist = await Restaurant.findOne({ name });
      if (restaurantExist) {
        res.status(400);
        throw new Error("Restaurant name already exist");
      } else {
        const restaurant = new Restaurant({
          name,
          description,
          province, district, ward, street,
          contact,
          image,
          thumb,
          menu_id,
          user: req.user._id,
        });
        if (restaurant) {
          const createdRestaurant = await restaurant.save();
          res.status(201).json(createdRestaurant);
        } else {
          res.status(400);
          throw new Error("Invalid restaurant data");
        }
      }
    })
  );

// UPDATE RESTAURANT
restaurantRoute.put(
    "/:id",
    protect,
    admin,
    asyncHandler(async (req, res) => {
      const { name, description,province, district, ward, street, contact, image, thumb, menu_id } = req.body;
      const restaurant = await Restaurant.findById(req.params.id);
      if (restaurant) {
        restaurant.name = name || restaurant.name;
        restaurant.description = description || restaurant.description;
        restaurant.province = province || restaurant.province;
        restaurant.district = district || restaurant.district;
        restaurant.ward = ward || restaurant.ward;
        restaurant.street = street || restaurant.street;
        restaurant.contact = contact || restaurant.contact;
        restaurant.image = image || restaurant.image;
        restaurant.thumb = thumb || restaurant.thumb;
        restaurant.menu_id = menu_id || restaurant.menu_id;
        
  
        const updatedRestaurant = await restaurant.save();
        res.json(updatedRestaurant);
      } else {
        res.status(404);
        throw new Error("Restaurant not found");
      }
    })
  );
  
export default restaurantRoute;