import mongoose from "mongoose";

const appointmentSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        doctor: {
            type: String,
            required: true,
            ref: "Doctor",
        },
        customer: {
            type: String,
            required: true,
            ref: "Customer",
        },
        province: {
            type: String,
            required: true,
        },
        district: {
            type: String,
            required: true,
        },
        ward: {
            type: String,
            required: true,
        },
        street: {
            type: String,
            required: true,
        },
        contact: {
            type: String,
            required: true,
        },
        start_time: {
            type: String,
            required: true,
        },
        end_time: {
            type: String,
            required: true,
        },
        status: {
            type: String,
        }
    },
    {
        timestamps: true,
    }
);

const Appointment = mongoose.model("Appointment", appointmentSchema);

export default Appointment;
