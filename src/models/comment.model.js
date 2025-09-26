import mongoose, {Schema, Types, Document} from "mongoose";

const CommentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    }, 
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    tweet: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tweet"
    },
    createdAt: {
        type: Date
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("Comment",CommentSchema);