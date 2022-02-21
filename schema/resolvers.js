// const Post = require("./../models/post");
// const Book = require("./../models/book");
const models = require("./../models");

const resolvers = {
    Query: {
        posts: async () => {
            return await models.Post.find();
        },

        books: async () => {
            return await models.Book.find();
        }
    },

    Mutation: {
        createPost: async (parent, args, context, info) => {
            const { title, description } = args.post;
            console.log(title, description);
            const post = new models.Post({ title, description });
            await post.save();
            return post;
        },

        createBook: async (parent, args, context, info) => {
            const { title, author } = args.book;
            console.log(title, author);
            const book = new models.Book({ title, author });
            await book.save();
            return book;
        },
    },
};

module.exports = resolvers;