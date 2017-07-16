
var ObjectID = require('mongodb').ObjectID;
const db = require('../db');

module.exports={
    newUser: function newUser(user, callback) {
        db.get().collection('users').insert(user, function (err, docs) {
            callback(err, docs)
        })
    },
    newAllUsers: function newAllUsers(callback) {
        db.get().collection('users').find().toArray(function (err, docs) {
            callback(err, docs)
        })
    },
    updateById: function updateById(userId,name,email,callback) {
        db.get().collection('users').updateOne({user_id:userId},{name:name,email:email},(err,docs)=>{
            callback(err,docs);
        })
    },
    deleteUser: function deleteUser(userId,callback) {
        db.get().collection('users').deleteOne({user_id:userId},(err,docs)=>{
            callback(err,docs);
        })
    },

};










