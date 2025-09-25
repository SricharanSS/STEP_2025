import { createUser, createTweet, updateUser, deleteUser, addComment, getAllTweets, getUsers, getComments, getUserByUserName, getTweetById, getCommentsByTweet,
    likeTweet, updateTweet, updateComment, deleteTweet, deleteComment
} from "./dataSource.js";
const resolvers = {
    Mutation:{
        createUser: async (_, { input }) => {
       return await createUser(input);
    },
     createTweet: async (_, {input}) => {
        return await createTweet(input);
     },
     addComment: async (_, { input }) => {
        return await addComment(input);
    },
      likeTweet: async (_, { tweetId, userId }) => {
         return await likeTweet(tweetId, userId);
      },
     updateUser: async(_, {id, input}) => {
     return await updateUser(id, input);
     },
     updateTweet: async(_, {id, content}) => {
        return await updateTweet(id, content);
     },
     updateComment: async(_, {id, content}) => {
        return await updateComment(id, content);
     },

     deleteUser: async(_, {id}) => {
        return await deleteUser(id);
     },
     deleteTweet: async(_, {id}) => {
        return await deleteTweet(id);
      },
     deleteComment: async(_, {id}) => {
        return await deleteComment(id);
     }
},
Query: {
    getAllTweets: async () => {
        return await getAllTweets();
},
    getUsers: async () => {
        return await getUsers();
},
    getComments: async () => {
        return await getComments();
},
    getUserByUserName: async (_, { username }) => {
    return await getUserByUserName(username);
},
    getTweetById: async (_, { id }) => {
    return await getTweetById(id);  
},
    getCommentsByTweet: async (_, { tweetId }) => {
    return await getCommentsByTweet(tweetId);
}
}
};

export default resolvers;