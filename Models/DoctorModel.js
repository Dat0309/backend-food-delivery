import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
    {
        rating: { type: Number, required: true },
    },
    {
        timestamps: true,
    }
);

const specialization_id = mongoose.Schema(
    {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Specialization",
        }
    }
);

const doctorSchema = mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
        first_name: {
            type: String,
            required: true,
        },
        last_name: {
            type: String,
            required: true,
        },
        date_of_birth: {
            type: String,
            required: true,
        },
        genre: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        telephone: {
            type: String,
            required: true,
        },
        avatar_url: {
            type: String,
            required: true,
        },
        facebook_id: {
            type: String,
            default: "",
        },
        zalo_id: {
            type: String,
            default: "",
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
        latitute: {
            type: String,
            required: true,
        },
        longtitute: {
            type: String,
            required: true,
        },
        level_of_education: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
            default: 0,
        },
        numReviews: {
            type: Number,
            required: true,
            default: 0,
        },
        specializations: {
            type: String,
            ref: "Specialization",
        },
        reviews: [reviewSchema],
        company_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Company",
        },
    },
    {
        timestamps: true,
    }
);


const Doctor = mongoose.model("Doctor", doctorSchema);

export default Doctor;