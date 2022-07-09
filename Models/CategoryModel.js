import mongoose from "mongoose";

const categoriesSchema = mongoose.Schema(
    {
        category_name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        thumb: {
            type: String,
            required: true,
        },
        type_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "CategoriesType",
        },
    },
    {
        timestamps: true,
    }
);

const Categories = mongoose.model("Categories", categoriesSchema);

export default Categories;