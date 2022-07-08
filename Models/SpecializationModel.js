import mongoose from "mongoose";

const specializationSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        thumb: {
            type: String,
        }
    },
    {
        timestamps: true,
    }
);

const Specialization = mongoose.model("Specialization", specializationSchema);

export default Specialization;