import mongoose from "mongoose";

const tableSchema = mongoose.Schema(
    {
        code: {
            type: String,
            required: true,
        },
        status: {
            type: Boolean,
            required: true,
            default: false,
        },
        capacity: {
            type: Number,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

const Table = mongoose.model("Table", tableSchema);

export default Table;