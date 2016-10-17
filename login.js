"use strict";
var passport = require('passport');
var LocalStrategy = require("passport-local").Strategy;
var path = require('path');
var config = require('./config');
var salt = require('./salt');
var router = config.router;



var loginRoute = function(model) {    
   passport.use('login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function (req, email, password, done) {
           	

        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        model.user.findOne({ email :  email }, function(err, user) {
            
            // if there are any errors, return the error before anything else
            if (err) {
                return done(err);
            }
            // if no user is found, return the message
            if (!user) {
                return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash
            }
            // if the user is found but the password is wrong
            if (!salt.isValidPassword(user,password)) {
                return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata
            }
            
            // all is well, return successful user
            return done(null, user);
        });

    }));

router.post('/user/login', passport.authenticate('login', {
        successRedirect : '/login', // redirect to the secure profile section
        failureRedirect : '/failed', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
}));

router.get('/login',function(req,res){
        if(req.user){      
         res.json({isLoggedIn: true,typeOfUser: req.user.type});
        } else {
        res.sendFile(path.join(__dirname + "/404.html"));
        }  
});

router.get('/Failed',function(req,res){        
    res.send(false);
})




}

module.exports = loginRoute;