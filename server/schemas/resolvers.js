//TODO: add in models here once created
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        //TODO: add in queries here 
    },
    
    Mutation: {
        //!!!!ADD LOGIN and token to use auth.js
        //need to have a user model for this
    },
};

module.exports = resolvers;