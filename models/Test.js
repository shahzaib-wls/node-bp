import mongoose from "mongoose";

export const Test = mongoose.model("Test", {
    name: {
        type: String,
        required: true
    }
});

