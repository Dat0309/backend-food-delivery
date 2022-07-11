import express from "express";
import asyncHandler from "express-async-handler";
import { admin, protect } from "../Middleware/AuthMiddleware";
import Booking from "../Models/BookingModel";

const bookingRouter = express.Router();

//CREATE BOOKING
bookingRouter.post(
    "/",
    protect,
    asyncHandler(async (req, res)=>{
        const {bookingItems, itemPrice, paymentMethod} = req.body;

        if(bookingItems && bookingItems.length == 0){
            res.status(400);
            throw new Error("No booking items");
            return;
        }else{
            const booking = new Booking({
                bookingItems,
                user_id: req.user._id,
                table_id: req.table._id,
                restaurant_id: req.restaurant_id,
                itemPrice,
                paymentMethod,
            });

            const createBooking = await booking.save();
            res.status(201).json(createBooking);
        }
    })
);

// ADMIN GET ALL BOOKING
bookingRouter.get(
    "/all",
    protect,
    admin,

    asyncHandler(async (req, res) => {
        const bookings = await Booking.find({})
        .sort({_id: -1})
        .populate("user", "id name email");
        res.json(bookings);
    })
);

// USER LOGIN BOOKING
bookingRouter.get(
    "/",
    protect,
    asyncHandler(async (req, res) => {
      const booking = await Booking.find({ user: req.user._id }).sort({ _id: -1 });
      res.json(booking);
    })
  );

// GET BOOKING BY ID
bookingRouter.get(
    "/:id",
    protect,
    asyncHandler(async (req, res) => {
      const booking = await Booking.findById(req.params.id).populate(
        "user",
        "name email"
      );
  
      if (booking) {
        res.json(booking);
      } else {
        res.status(404);
        throw new Error("Booking Not Found");
      }
    })
  );

// BOOKING IS PAID
bookingRouter.put(
    "/:id/pay",
    protect,
    asyncHandler(async (req, res) => {
        const booking = await Booking.findById(req.params.id);

        if(booking){
            booking.is_paid = true;
            booking.paid_at = Date.now();
            booking.payment_result = {
                id: req.body.id,
                status: req.body.status,
                update_time: req.body.update_time,
                email_address: req.body.email_address,
            };

            const updatedBooking = await booking.save();
            res.json(updatedBooking);
        }else{
            res.status(404);
            throw new Error("Booking not found");
        }
    })
);

export default bookingRouter;