import mongoose, { Schema } from "mongoose";


const userScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    forms: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: "Form"
        }],
    }
});

export const User = mongoose.model("User", userScheme);
