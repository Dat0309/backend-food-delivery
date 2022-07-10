import mongoose from "mongoose";

const categoriesTypeSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

const CategoriesType = mongoose.model("CategoriesType", categoriesTypeSchema);

export default CategoriesType;