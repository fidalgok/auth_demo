var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = mongoose.Schema({
	username: String,
	password: String
});

//adds lots of useful functions to our userschema from passport local mongoose package
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);