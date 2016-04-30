var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
var userSchema = mongoose.Schema({

    account          : {
        email        : String,
        password     : String
    },
    infomation       :{
        name         : String,
        dob          : Date,
        address      :String,
        phonenumber  : String,
        dop          : Date, // ngay mang thai
        predict      : Date // ngay sinh du doan
    },
    history_visit    :[{ //lich su kham benh
        place        : String,
        date         : Date,
        doctor       : String
    }],
    nutrient         : [{
        month        : Number,
        food         : String
    }]

});

// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
