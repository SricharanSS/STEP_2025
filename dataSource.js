import Tweet from "./models/Tweet.js";
import User from "./models/User.js";
import Comment from "./models/Comment.js";

export const createUser = async (input) => {
    const user = new User(input);
    return await user.save();
}

export const createTweet = async (input) => {
    const tweet = new Tweet(input);
    return await tweet.save();
}

export const addComment = async (input) => {
    const comment = new Comment(input);
    return await comment.save();
}

export const likeTweet = async (tweetId, userId) => {
    const tweet = await Tweet.findById(tweetId);

    if (tweet.likes.includes(userId)) {
        tweet.likes.pull(userId);
    } else {
        tweet.likes.push(userId);
    }

    await tweet.save();
    return tweet;   
}

export const updateUser = async (id, input) => {
    const user = await User.findByIdAndUpdate(id, input, { new: true });
    return user;
}

export const updateTweet = async (id, content) => {
    const tweet = await Tweet.findByIdAndUpdate(id, { content }, { new: true });
    return tweet;
}

export const updateComment = async (id, content) => {
    const comment = await Comment.findByIdAndUpdate(id, { content }, { new: true });
    return comment;
}

export const deleteUser = async (id) => {
    const user = await User.findByIdAndDelete(id);
    return user;
}

export const deleteTweet = async (id) => {
    const tweet = await Tweet.findByIdAndDelete(id);
    return tweet;
}

export const deleteComment = async (id) => {
    const comment = await Comment.findByIdAndDelete(id);
    return comment;
}

export const getAllTweets = async () => {
    const tweets = await Tweet.find().populate('author');
    
    for (let tweet of tweets) {
        tweet.comments = await Comment.find({ tweet: tweet._id }).populate('author', 'username name');
    }
    
    return tweets;
}

export const getUsers = async () => {
    return await User.find();
}

export const getComments = async () => {
    return await Comment.find().populate('author', 'username name').populate('tweet', 'content');
}

export const getUserByUserName = async (username) => {
    return await User.findOne({ username });
}

export const getTweetById = async (id) => {
    return await Tweet.findById(id).populate('author');
}

export const getCommentsByTweet = async (tweetId) => {
    return await Comment.find({ tweet: tweetId }).populate('author', 'username name');
}
