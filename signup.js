"use strict";
var passport = require('passport');
var LocalStrategy = require("passport-local").Strategy;
var path = require('path');
var chance = require("chance").Chance();
var config = require('./config');
var salt = require('./salt');
var router = config.router;


var signupRoute = function(model) {

passport.use('signup', new LocalStrategy({
	usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true 
},
function(req,email,password,done){
	process.nextTick(function(){	
		model.user.findOne({email:email},function(err,user){
			if(err) return done(err);
			if(user){
				console.log("user exist")
				return done(null, false, req.flash('signupMessage', 'That email has already been use please find another one'));	
			} else {											
					var User = new model.user({
					email: email,
					user_id: genId(req.body.email),
                    password: salt.createHash(password),
                    phone: req.body.phone,
                    admin: false,
                    type: req.body.typeOfUser,
                    location: req.body.city,
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    username: req.body.username,
					profile_pic: {
						filename:""
					}					
				});			
				User.save(function(err){
					if(err) throw err;					
					return done(null,User);
				})
			}
		})

		function genId(userId) {
			var getRandomString = chance.string(userId);
			return getRandomString;
		}
	})
}));

router.post('/user/signup', function(req, res, next) {    
  passport.authenticate('signup', function(err, user, info) {

    if (err) {
      return next(err); // will generate a 500 error
    }
    // Generate a JSON response reflecting signup
    if (!user) {
    	console.log("user already exist")	
      	res.send(false);
    } else {
    	res.send(true);
    }

  })(req, res, next);
})
 
}

module.exports = signupRoute;