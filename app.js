var express = require('express'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	passport = require('passport'),
	LocalStrategy = require("passport-local"),
	passportLocalMongoose = require('passport-local-mongoose'),
	User = require("./models/user");

var app = express();
mongoose.connect("mongodb://localhost/auth_demo_app", {useMongoClient: true});

app.set('view engine', 'ejs');
//sets up the passport package
app.use(passport.initialize());
app.use(passport.session());
app.use(require("express-session")({
	secret : "Goopin Gus is a crazy cat",
	resave: false,
	saveUninitialized: false
}));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//set up routes
app.get("/", function(req, res){
	res.render("index");
});

app.get("/secret", function(req, res){
	res.render("secret");
});

app.listen(3000, function(){
	console.log("server has started.....");
});