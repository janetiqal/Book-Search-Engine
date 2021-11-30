const { User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers={
    Query:{
        me: async (parent, args, context)=>{
            if(context.user){
            const userData = await User.findOne({_id:context.user._id}).select('-__v -password');
            console.log('user', userData)
            return userData;
        }
        throw new AuthenticationError('You Need to be Logged in!');
        },
    },
    Mutation:{
        login: async (parent, {email, password})=>{
            const user = await User.findOne({email})
            if (!user){
                throw new AuthenticationError('No user found with this email.')
            }
            //check password match on this specific user
            const correctPassword = await user.isCorrectPassword(password)
            if (!correctPassword) {
                throw new AuthenticationError('Incorrect credentials');
              }
            //create token w out password
            const userWithOutPassword = {
                email: user.email,
                _id: user._id,
                username: user.username
            }
            console.log('user w out password:', userWithOutPassword)
            const token = signToken(userWithOutPassword)
            // console.log(token)

            return {token, user: userWithOutPassword}
        },
        addUser: async( parent, args)=>{
            console.log('adding user:', args)
            const user = await User.create(args)
            
           //create token w out password
           const userWithOutPassword = {
            email: user.email,
            _id: user._id,
            username: user.username
        }
            const token = signToken(userWithOutPassword)
            console.log(token)
            //dont need the password returned
            return { token, user:userWithOutPassword }
        },
        saveBook: async (parent, { bookData }, context) => {
            if (context.user) {
              const updatedUser = await User.findByIdAndUpdate(
                { _id: context.user._id },
                { $push: { savedBooks: bookData } },
                { new: true }
              );
            console.log("user:" ,updatedUser)
              return updatedUser;
            }
      
            throw new AuthenticationError('You need to be logged in!');
          },
        removeBook: async (parent, { bookId }, context) => {
            if (context.user) {
              const updatedUser = await User.findOneAndUpdate(
                { _id: context.user._id },
                { $pull: { savedBooks: { bookId: bookId } } },
                { new: true }
              );
              return updatedUser;
            }
            throw new AuthenticationError("You must be logged in!");
          },
        
    }
}


module.exports = resolvers;
