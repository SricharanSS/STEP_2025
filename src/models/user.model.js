import mongoose, { Schema, model, types } from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    bio: {
        type: String,
    },
    email: {
		type: String,
		required: true,
	},
    password: {
        type: String,
        required: true
    },
    followers: {
        type: Array,
        ref: "User",
    },
    following: {
        type: Array,
        ref: "User",
    },
    createdAt: {
        type: Date,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }

});

module.exports = mongoose.model("User",UserSchema);
