const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name : {
        type : String,
        required : true,
    },

    email : {
        type : String,
        required : true,
        unique : true,
    },

    password : {
        type : String,
        required : true,
    },

    gender : {
        type : String,
        required : true,
    },

    photo : {
        type : String,
    },

    date : {
        type : Date,
        default : Date.now
    }
});

module.exports = mongoose.model('auth', UserSchema);