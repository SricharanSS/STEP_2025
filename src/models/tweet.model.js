import mongoose, { Schema, model, types } from "mongoose";

const TweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    likes: {
        type: Array,
        ref: "User"
    },
    comments: {
        type: Array,
        ref: "Comment"
    },
    createdAt: {
        type: Date,
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("Tweet",TweetSchema);