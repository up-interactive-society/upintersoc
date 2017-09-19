/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    email: {
      type: 'string',
      email: 'true',
      unique: 'true'
    },

    username: {
      type: 'string',
      unique: 'true'
    },

    // TODO: Consider Encryption
    password: {
      type: 'string'
    },
    
    gravatarURL: {
      type: 'string'
    },

    deleted: {
      type: 'boolean'
    },
    
    admin: {
      type: 'boolean'
    },

    banned: {
      type: 'boolean'
    },
    
    passwordRecoveryToken: {
      type: 'string'
    },

    followers: {
      collection: 'user',
      via: 'following'
    },

    following: {
      collection: 'user',
      via: 'followers'
    },   
    
    articles: {
      collection: 'article',
      via: 'owner'
    },

    ratings: {
      collection: 'rating',
      via: 'byUser'
    },

  }
};

