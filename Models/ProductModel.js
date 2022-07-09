import mongoose from "mongoose";

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
    },
    {
        timestamps: true,
    },
);

const productSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        image_banner: {
            type: String,
            required: true,
        },
        categories_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Categories",
        },
        menu_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Menu",
        },
        description: {
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
        price: {
            type: Number,
            required: true,
            default: 0,
        },
        quantity: {
            type: Number,
            required: true,
            default: 0,
        },
        unit: {
            type: String,
            required: true,
        },
        active: {
            type: Boolean,
            required: true,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model("Product", productSchema);

export default Product;