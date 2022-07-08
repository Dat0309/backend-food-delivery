import express from "express";
import asyncHandler from "express-async-handler";
import { admin, protect } from "../Middleware/AuthMiddleware.js";
import Appointment from "./../Models/AppointmentModel.js";

const appointmentRouter = express.Router();

appointmentRouter.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', ['*']);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// CREATE ORDER
appointmentRouter.post(
  "/",
  asyncHandler(async (req, res) => {
    const {
      name,
      doctor,
      customer,
      province,
      district,
      ward,
      street,
      contact,
      start_time,
      end_time,
      status,
    } = req.body;

    if (start_time.length === 0 && end_time.length === 0) {
      res.status(400);
      throw new Error("No appointment time");
      return;
    } else {
      const appointment = new Appointment({
        name,
        doctor,
        customer,
        province,
        district,
        ward,
        street,
        contact,
        start_time,
        end_time,
        status,
      });

      const createAppointment = await appointment.save();
      res.status(201).json(createAppointment);
    }
  })
);

// ADMIN GET ALL APPOINTMENT
appointmentRouter.get(
  "/all",
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const appointments = await Appointment.find({})
      .sort({ _id: -1 })
      .populate("doctor", "id name email");
    res.json(appointments);
  })
);
// DOCTOR LOGIN APPOINTMENT
appointmentRouter.get(
  "/doctor/:id",
  asyncHandler(async (req, res) => {
    const doctor_id = req.params.id;
    const appointment = await Appointment.find({ "doctor": doctor_id })
      .sort({ _id: -1 });
    res.json({ appointment });
  })
);

// CUSTOMER LOGIN APPOINTMENT
appointmentRouter.get(
  "/customer/:id",
  asyncHandler(async (req, res) => {
    const customer_id = req.params.id;
    const appointment = await Appointment.find({ "customer": customer_id })
      .sort({ _id: -1 });
    res.json({ appointment });
  })
);

// GET APPOINMENT BY ID
appointmentRouter.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const appointment = await Appointment.findById(req.params.id).populate(
      "doctor",
      "name email"
    );

    if (appointment) {
      res.json(appointment);
    } else {
      res.status(404);
      throw new Error("Appointment Not Found");
    }
  })
);

// UPDATE appointment
appointmentRouter.put(
  "/:id",
  asyncHandler(async (req, res) => {
      const { status } = req.body;
      const appointment = await Appointment.findById(req.params.id);
      if (appointment) {
          appointment.status = status || appointment.status;

          const updatedappointment = await appointment.save();
          res.json(updatedappointment);
      } else {
          res.status(404);
          throw new Error("appointment not found");
      }
  })
);

// DELETE doctor
appointmentRouter.delete(
  "/:id",
  asyncHandler(async (req, res) => {
      const appointment = await Appointment.findById(req.params.id);
      if (appointment) {
          await appointment.remove();
          res.json({ message: "appointment deleted" });
      } else {
          res.status(404);
          throw new Error("appointment not Found");
      }
  })
);

export default appointmentRouter;