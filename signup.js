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
					var uid = genId(req.body.email);											
					var User = new model.user({
					email: email,
					user_id: uid,
                    password: salt.createHash(password),
                    phone: req.body.phone,
                    admin: false,
                    type: req.body.typeOfUser,
                    city: req.body.city,
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    username: req.body.username,
					address: req.body.address,
					profile_pic: {
						filename:""
					},
					specialty: req.body.specialty,
					profile_url: "/ranking/views/" + uid,
					profile_pic_url: "/download/profile_pic/nopic",
					work_place: req.body.work_place,
					country: req.body.country					
					});

					User.ewallet.push({available_amount:0});

				
				User.save(function(err){
					console.log("user saved");
					if(err) throw err;					
					return done(null,User);
				})
			}
		})

		function genId(userId) {
			var getRandomNumber = Math.floor(Math.random() * 199999999);
			return getRandomNumber;
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