"use strict";
var path = require('path');
var route = require('./config');
var salt = require('./salt');
var router = route.router;

var signupRoute = function(model) {
    router.post("/signup",function (req,res) {
        var password = salt.createHash(req.body.password);
        console.log(req.body.typeOfUser);
        var userObj = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
            typeOfUser: req.body.typeOfUser
        }
        switch(req.body.typeOfUser){
            case "Doctor":
                var data = model.newSpecialist({
                    location: req.body.city,
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    username: req.body.username,
                    password: password,
                    email: req.body.email,
                    phone: req.body.phone,
                });
                data.save(function(err){
                    if(err) throw err;
                    console.log("specialist save");                   
                    success(userObj);                   
                })
                break;
            case "Patient":
                var data = model.newSpecialist({
                    location: req.body.city,
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    username: req.body.username,
                    password: password,
                    email: req.body.email,
                    phone: req.body.phone,
                });
                data.save(function(err){
                    if(err) throw err;
                    console.log("specialist save");
                    success(userObj);  
                })
                break;
                case "Hospital":
                    var data = model.newSpecialist({
                    location: req.body.city,
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    username: req.body.username,
                    password: password,
                    email: req.body.email,
                    phone: req.body.phone,
                });
                data.save(function(err){
                    if(err) throw err;
                    console.log("specialist save");
                    success(userObj);  
                })
                break;
                case "Clinic":
                    var data = model.newSpecialist({
                    location: req.body.city,
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    username: req.body.username,
                    password: password,
                    email: req.body.email,
                    phone: req.body.phone,
                });
                data.save(function(err){
                    if(err) throw err;
                    console.log("specialist save");
                    success(userObj);  
                })
                break;
                case "Radiology Center":
                    var data = model.newSpecialist({
                    location: req.body.city,
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    username: req.body.username,
                    password: password,
                    email: req.body.email,
                    phone: req.body.phone,
                });
                data.save(function(err){
                    if(err) throw err;
                    console.log("specialist save");
                    success(userObj);  
                })
                break;
                case "Laboratory Center":
                    var data = model.newSpecialist({
                    location: req.body.city,
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    username: req.body.username,
                    password: password,
                    email: req.body.email,
                    phone: req.body.phone,
                });
                data.save(function(err){
                    if(err) throw err;
                    console.log("specialist save");
                    success(userObj);  
                })
                break;
                case "Fitness Center":
                    var data = model.newSpecialist({
                    location: req.body.city,
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    username: req.body.username,
                    password: password,
                    email: req.body.email,
                    phone: req.body.phone,
                });
                data.save(function(err){
                    if(err) throw err;
                    console.log("specialist save");
                    success(userObj);  
                })
                break;
                default:
                    res.send('error : user not identified');        
            }

            function success(msgObj) {
                res.render("success",{"message": msgObj})
            }

    })
}

module.exports = signupRoute;