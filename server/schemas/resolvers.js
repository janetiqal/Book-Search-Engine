const { User } = requre('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers={
    Query:{
        me: async (parent, { id })=>{
            console.log('user id', id)
            const user = await User.findById(id)
            console.log('user', user)
            return user;
        }
    },
    Mutation:{
        login: async (parent, {email, password})=>{
            const user = await User.findOne(email)
            if (!user){
                throw new AuthenticationError('No user found with this email.')
            }
            //check password match
            const correctPassword = await User.isCorrectPassword(password)
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

            return {token, user: userWithOutPassword}
        },
        addUser: async( parent, args)=>{
            console.log('adding user:', args)
            const user = await User.create(args)
            
            //create userToken
            const userDataforToken={
                _id: user._id,
                email: user.email,
                username: user.username
            }
            const token = signToken(userDataforToken)
            console.log(token)
            //dont need the password returned
            return { token, user:userDataforToken }
        },
        savedBooks: async (parent, args)=>{

        },
        removeBook: async (parent, args)=>{

        }
        
    }
}


module.exports = resolvers;
