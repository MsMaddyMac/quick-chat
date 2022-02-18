//Query, Mutation, User, Message
const Query = require("./Query");
const Mutation = require("./Mutation");
const User = require("./User");
const Message = require("./Message");

const resolvers = {
  Query,
  Mutation,
  User,
  Message,
};

module.exports = {
  resolvers,
};
