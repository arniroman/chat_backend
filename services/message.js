var ObjectID = require('mongodb').ObjectID;
const db = require('../db');
module.exports={
    createMessage: function createMessage(message, callback) {
        db.get().collection('message').insert(message, function (err, docs) {
            callback(err, docs)
        })
    },
    getAllMessage: function getAllMessage(callback) {
        db.get().collection('message').find().toArray(function (err, docs) {
            callback(err, docs)
        })
    },
    updateMessage: function updateMessage(messageId,sendeId,receiveId,callback) {
        db.get().collection('message').updateOne({user_id:userId},{name:name,email:email},(err,docs)=>{
            callback(err,docs);
        })
    },
    deleteMessage: function deleteMessage(messageId,callback) {
        db.get().collection('message').deleteOne({user_id:userId},(err,docs)=>{
            callback(err,docs);
        })
    },

};








