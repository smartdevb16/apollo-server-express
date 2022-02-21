const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Book {
        id: ID!
        title: String!
        author: String!
    }

    type Post {
        id: ID!
        title: String
        description: String
    }

    # Queries
    type Query {
        posts: [Post]
        books: [Book!]!,
    }

    input PostInput {
        title: String
        description: String
    }

    input BookInput {
        title: String
        author: String
    }

    # Mutations
    type Mutation {
        createPost(post: PostInput): Post
        createBook(book: BookInput): Book
    }
`

module.exports = typeDefs;