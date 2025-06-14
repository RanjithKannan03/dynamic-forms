import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
    schema: {
        type: String,
        required: true
    },
    entries: [String]
});

export const Form = mongoose.model('Form', formSchema);