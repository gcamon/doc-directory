'use strict';
var path = require('path');
var route = require('./config');
var router = route.router;
var gravatar = require("gravatar");
var fs = require("fs");

var basicRoute = function (model) {

	router.get("/",function (req,res) {
		res.render('index',{"message":""});
	});

    router.get("/user/dashboard",function(req,res){
        if(req.user){
       // var unsecureUrl = gravatar.url('gcamon29@gmail.com', {s: '200', r: 'pg', d: 'retro'}, true);       
        res.render("profile",{"person":req.user});
        } else {
        res.redirect("/");
        }
    });

    router.get("/user/user-update",function(req,res){
        if(req.user){            
        res.render("profile-update",{"person":req.user});
        } else {
        res.redirect("/");
        }
    });

    router.get("/download/profile_pic", function(req,res){        
        if(req.user.profile_pic.path !== undefined){            
            var file = __dirname + "/" + req.user.profile_pic.path;
            res.download(file); // Set disposition and send it.
        } else {
            model.files.findOne({file_id:"nopic"},function(err,data){
                if(err) throw err;               
                var nopic = __dirname + "/uploads/" + data.filename;
                res.download(nopic);
            })
        }
    })

    router.put("/user/update",function(req,res){
        if(req.user){
            /*console.log(req.body);
            console.log(req.files);
            var ima = req.files[0].path;
            var readable = fs.createReadStream(__dirname + "/" + ima);
	        var writable = fs.createWriteStream(__dirname + '/public/images/dashboard/profile.jpg');
            readable.on('data',function(chunk){	
		        writable.write(chunk);
	        });

            ///uploaded no image file just for it to be in the server.
            
            var no_profile_pic = new model.files({
                filename: req.files[0].filename,
                path: req.files[0].path,
                file_id: "nopic"
            });

            no_profile_pic.save(function(err){
                if(err) throw err;
                console.log("file saved");
            })*/

            model.user.update({email: req.user.email},{$set : {
                "profile_pic.filename": req.files[0].filename,
                "profile_pic.path":  req.files[0].path,
                "profile_pic.mimetype":  req.files[0].mimetype,
                "profile_pic.encoding":  req.files[0].encoding,
                "profile_pic.size":  req.files[0].size,
                "profile_pic.destination":  req.files[0].destination,
                "profile_pic.fieldname":  req.files[0].fieldname,
                "profile_pic.originalname":  req.files[0].originalname
            }},function(err,data){
                if(err) throw err;
                console.log(data);
            })        
            res.send("success");
        } else {
        res.redirect("/");
        }
    })

    router.get("/user/user-schedule",function(req,res){
        if(req.user){
        res.render("profile",{"person":req.user});
        } else {
        res.sendFile(path.join(__dirname + "/404.html"));
        }
    });

    router.get("/assets", function (req,res) {
        res.send('css');
        res.send('js');
        res.send('images');
    });

    router.get('/account-created',function(req,res){
        res.render("success",{"message":""})
    })

    //navigates to list views accordingly
    router.get("/topview/:name", function (req,res) {
        switch (req.params.name) {
            case "doctors":
                model.user.find({type:"You are?"},function(err,data){
                    if(err) throw err;
                    console.log(data.length);
                }).limit(5);
                res.render("grid-view",{"userInfo":""});
                break;
            case "hospitals":
                res.render("grid-view",{"message":""}); 
                break;
            case "pharmacy":
                res.render("grid-view",{"message":""}); 
                break;
            case "laboratories":
                res.render("grid-view",{"message":""}); 
                break;
            case "radiology":
                res.render("grid-view",{"message":""}); 
                break;
            case "fitness":
                res.render("grid-view",{"message":""}); 
                break;
            default:
                res.sendFile(path.join(__dirname + "/404.html"));            
        }
    });

    router.get("/ranking/views/:id",function(req,res){

    })

    router.get("/user/logout",function(req,res){
        req.logout();
        res.redirect('/');
    });
}

module.exports = basicRoute;
