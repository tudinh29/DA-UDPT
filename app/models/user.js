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
        avatar       :String,
        dob          : Date,
        address      :String,
        phonenumber  : String,
        dop          : Date, // ngay mang thai
        predict      : Date // ngay sinh du doan
    },
    facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    history_visit    :[{ //lich su kham benh
        place        : String,
        date         : Date,
        info       : String, //noi dung kham
        result        :String //ket qua
    }]

});

// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.account.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
