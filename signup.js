"use strict";
var path = require('path');
var route = require('./config');
var salt = require('./salt');
var router = route.router;

var signupRoute = function(model) {
    router.post ("/signup",function (req,res) {   
        switch (req.body.typeOfUser) {
        case "Doctor":
        model.newSpecialist.findOne({"email": req.body.email},function(err,user){
            if(err) throw err;
            if(user){
                res.render('index',{"message" : "username already exist"})
            } else {
                var user_id = saltId();
                console.log(user_id);
                var data = model.newSpecialist({
                    location: req.body.city,
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    username: req.body.username,
                    user_id: user_id,
                    email: req.body.email,
                    phone: req.body.phone,
                });
                data.save(function(err){
                    if(err) throw err;
                    console.log("specialist save");                   
                    success();                   
                });
            }
        })
        break;
        case "Patient":
        model.newPatient.findOne({"email": req.body.email},function(err,user){
            if(err) throw err;
            if(user){
                res.render('index',{"message" : "username already exist"})
            } else {
                var user_id = saltId();
                console.log(user_id);
                var data = model.newSpecialist({
                    location: req.body.city,
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    username: req.body.username,
                    user_id: user_id,
                    email: req.body.email,
                    phone: req.body.phone,
                });
                data.save(function(err){
                    if(err) throw err;
                    console.log("specialist save");                   
                    success();                   
                })
            }
        })
        break;
        case "Hospital":
        model.newHospital.findOne({"email": req.body.email},function(err,user){
            if(err) throw err;
            if(user){
                res.render('index',{"message" : "username already exist"})
            } else {
                var user_id = saltId();
                console.log(user_id);
                var data = model.newSpecialist({
                    location: req.body.city,
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    username: req.body.username,
                    user_id: user_id,
                    email: req.body.email,
                    phone: req.body.phone,
                });
                data.save(function(err){
                    if(err) throw err;
                    console.log("specialist save");                   
                    success();                   
                })
            }
        })
        break;
        case "Clinic":
        model.newClinic.findOne({"email": req.body.email},function(err,user){
            if(err) throw err;
            if(user){
                res.render('index',{"message" : "username already exist"})
            } else {
                var user_id = saltId();
                console.log(user_id);
                var data = model.newSpecialist({
                    location: req.body.city,
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    username: req.body.username,
                    user_id: user_id,
                    email: req.body.email,
                    phone: req.body.phone,
                });
                data.save(function(err){
                    if(err) throw err;
                    console.log("specialist save");                   
                    success();                   
                })
            }
        })
        break;
        case "Pharmacy":
        model.newPharmacy.findOne({"email": req.body.email},function(err,user){
            if(err) throw err;
            if(user){
                res.render('index',{"message" : "username already exist"})
            } else {
                var user_id = saltId();
                console.log(user_id);
                var data = model.newSpecialist({
                    location: req.body.city,
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    username: req.body.username,
                    user_id: user_id,
                    email: req.body.email,
                    phone: req.body.phone,
                });
                data.save(function(err){
                    if(err) throw err;
                    console.log("specialist save");                   
                    success();                   
                })
            }
        })
        break;
        case "Radiology Center":
        model.newRadiology.findOne({"email": req.body.email},function(err,user){
            if(err) throw err;
            if(user){
                res.render('index',{"message" : "username already exist"})
            } else {
                var user_id = saltId();
                console.log(user_id);
                var data = model.newSpecialist({
                    location: req.body.city,
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    username: req.body.username,
                    user_id: user_id,
                    email: req.body.email,
                    phone: req.body.phone,
                });
                data.save(function(err){
                    if(err) throw err;
                    console.log("specialist save");                   
                    success();                   
                })
            }
        })
        break;
        case "Laboratory Center":
        model.newLaboratory.findOne({"email": req.body.email},function(err,user){
            if(err) throw err;
            if(user){
                res.render('index',{"message" : "username already exist"})
            } else {
                var user_id = saltId();
                console.log(user_id);
                var data = model.newSpecialist({
                    location: req.body.city,
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    username: req.body.username,
                    user_id: user_id,
                    email: req.body.email,
                    phone: req.body.phone,
                });
                data.save(function(err){
                    if(err) throw err;
                    console.log("specialist save");                   
                    success();                   
                })
            }
        })
        break;
        case "Fitness Center":
        model.newFitness.findOne({"email": req.body.email},function(err,user){
            if(err) throw err;
            if(user){
                res.render('index',{"message" : "username already exist"})
            } else {
                var user_id = saltId();
                console.log(user_id);
                var data = model.newSpecialist({
                    location: req.body.city,
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    username: req.body.username,
                    user_id: user_id,
                    email: req.body.email,
                    phone: req.body.phone,
                });
                data.save(function(err){
                    if(err) throw err;
                    console.log("specialist save");                   
                    success();                   
                })
            }
        })
        break;
        default:
            res.send('error : user not identified');        
        }

            function success() {
                var msgObj = userObjectToBeSent();
                res.render("success",{"message": msgObj});
            }

            function newUser(email,user) {
                var getLastString = email.split("@");
                var random = Math.floor(Math.random() * 1000);
                switch (user) {
                    case "Doctor":
                        return getLastString[0] + random + "d";
                    case "Patient":
                        return getLastString[0] + random + "p";                        
                    case "Hospital":
                        return getLastString[0] + random + "h";                        
                    case "Clinic":
                        return getLastString[0] + random + "c";
                    case "Pharmacy":
                        return getLastString[0] + random + "f";                        
                    case "Radiology Center":
                        return getLastString[0] + random + "r";                        
                    case "Laboratory Center":
                        return getLastString[0] + random + "l";                        
                    case "Fitness Center":
                        return getLastString[0] + random + "ft";                        
                    default:
                        return null;                    
                }
            }

            function userObjectToBeSent() {
                var user_id = createId();
                return {
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    email: req.body.email,
                    user_id: user_id,
                    typeOfUser: req.body.typeOfUser
                }
            }

            function createId() {
                var userId = newUser(req.body.email,req.body.typeOfUser);
                return userId;
            }

            function saltId() {
                return salt.createHash(createId());
            }
    })
}

module.exports = signupRoute;