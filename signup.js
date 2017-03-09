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
						country: req.body.country,
						name: req.body.name,
						verified: false					
						});

						User.ewallet = {
							available_amount: 0,
							firstname: req.body.firstname,
	                    	lastname: req.body.lastname,
						}

					
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
	      	res.send(false);
	    } else {
	    	res.send(true);
	    }

	  })(req, res, next);
	});

	router.post("/user/emergency-signup",function(req, res, next) {

		model.user.findOne({phone:req.body.phone},function(err,user){
			
			if(err) throw err;
			if(user){
				res.json({message: "User with this phone number " + "'" + req.body.phone + "'" + " already exist"})
			} else {
				var uid = genId();				
				var User = new model.user({
					email: req.body.email,
					user_id: uid,
			    phone: req.body.phone,	                    
			    type: req.body.typeOfUser,
			    city: req.body.city,
			    firstname: req.body.firstname,
			    lastname: req.body.lastname,
			    username: req.body.username,
					address: req.body.address,		
					profile_pic_url: "/download/profile_pic/nopic",						
					country: req.body.country,
					emergency_ref_url: "/patient/emergency-profile/" + uid									
				});
				
				var patient = {
					patient_firstname:req.body.firstname,
					patient_lastname:req.body.lastname,
					patient_id: uid,
					patient_profile_pic_url:User.profile_pic_url
				}
			  
			  User.save(function(err,info){
			  	if(err) throw err;			  	
			  	tellDoctor(patient)
			  	sendSMS(req.body.phone);
			  	if(req.body.email)
			  		sendEMAIL(req.body.email)			  	
			  })
			  res.send(patient)
			}
		})

		//importantly, sms or email if available will be sent to patient including the referrral link for the patiento view his profile.
		function sendSMS(number){
			
		}

		function sendEMAIL(email){
			
		}
		
		function tellDoctor(patientObj) {
			model.user.findOne({email: req.user.email},{doctor_patients_list:1}).exec(function(err,data){
				if(err) throw err;
				data.doctor_patients_list.unshift(patientObj);
				data.save(function(err,info){
					if(err) throw err;
					console.log("doctorTold")
				})
			})		
		}
		

	  function genId() {
		var text = "";
		var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567899966600555777222";

	    for( var i=0; i < 12; i++ )
	        text += possible.charAt(Math.floor(Math.random() * possible.length));
	    return text;
		}
	  
	});

	
 
}

module.exports = signupRoute;