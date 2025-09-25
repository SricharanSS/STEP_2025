const typeDefs = `#graphql
  type User {
    id: ID
    username: String
    name: String
    email: String
    password: String
    tweets: [Tweet]
  }

  type Tweet {
    id: ID
    content: String
    createdAt: String
    author: User
    comments: [Comment]
  }

  type Comment {
    id: ID
    content: String
    author: User
    tweet: Tweet
    createdAt: String
  }

  type Query {
    getUsers: [User]
    getUser(id: ID!): User
    getTweets: [Tweet]
    getTweet(id: ID!): Tweet
  }

  input CommentInput {
    content: String
    author: ID
    tweet: ID
  }

  input UserInput {
    id: ID,
    username: String
    name: String
    email: String
    password: String
  }

  input TweetInput {
    content: String!
    author: ID!
  }

  type Query{
    getAllTweets: [Tweet]
    getUsers: [User]
    getComments: [Comment]
    getUserByUserName(username: String!): User
    getTweetById(id: ID!): Tweet
    getCommentsByTweet(tweetId: ID!): [Comment]
  }

  type Mutation {
    createUser(input: UserInput!): User
    createTweet(input: TweetInput!): Tweet
    addComment(input: CommentInput!): Comment
    likeTweet(tweetId: ID!, userId: ID!): Tweet
    updateUser(id: ID!, input: UserInput!): User
    updateTweet(id: ID!, content: String!): Tweet
    updateComment(id: ID!, content: String!): Comment
    deleteUser(id: ID!): User
    deleteTweet(id: ID!): Tweet
    deleteComment(id: ID!): Comment
  }
`;

export default typeDefs;
