import mongoose from "mongoose";

const diseasesSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        thumb: {
            type: String,
            required: true,
        },
        symptom: {
            type: String,
            required: true,
        },
        dangerous_lv: {
            type: String,
            required: true,
        },
        spread: {
            type: String,
            required: true,
        },
        healing_day: {
            type: String,
        },
        object: {
            type: String,
        }
    }
);

const Diseases = mongoose.model("Diseases", diseasesSchema);

export default Diseases;