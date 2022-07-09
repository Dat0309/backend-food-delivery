import mongoose from "mongoose";

const addressSchema = mongoose.Schema(
    {
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
    }
);

const reviewSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
        },
        comment: {
            type: String,
            required: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
        menu_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Menu",
        }
    },
    {
        timestamps: true,
    },
);

const restaurantSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        address: addressSchema,
        contact: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        image_banner: {
            type: String,
            required: true,
        },
        thumb: {
            type: String,
            required: true,
        },
        revirews: [reviewSchema],
        rating: {
            type: Number,
            required: true,
            default: 0,
        },
        num_reviews: {
            type: Number,
            required: true,
            default: 0,
        },
        longitude: {
            type: String,
            required: true,
        },
        latitude: {
            type: String,
            required: true,
        },
        menu_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Menu",
        },
    },
    {
        timestamps: true,
    }
);

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

export default Restaurant;