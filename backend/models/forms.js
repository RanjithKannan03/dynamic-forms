import mongoose, { Schema } from "mongoose";

const formSchema = new mongoose.Schema({
    schema: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    entries: [String]
});

export const Form = mongoose.model('Form', formSchema);