import { Schema, model } from "mongoose";

const tweetSchema = new Schema({
  content: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
}, { timestamps: true });

const Tweet = model("Tweet", tweetSchema);
export default Tweet;
