'use strict';
var path = require('path');
var route = require('./config');
var router = route.router;

var basicRoute = function (model) {

	router.get("/",function (req,res) {
		res.render('index');
	});

    router.get("/assets", function (req,res) {
        res.send('css');
        res.send('js');
        res.send('images');
    });

    //navigates to list views accordingly
    router.get("/topview/:name", function (req,res) {
        switch (req.params.name) {
            case "doctors":
                res.render("grid-view");
                break;
            case "hospitals":
                res.render("grid-view"); 
                break;
            case "pharmacy":
                res.render("grid-view"); 
                break;
            case "laboratories":
                res.render("grid-view"); 
                break;
            case "radiology":
                res.render("grid-view"); 
                break;
            case "fitness":
                res.render("grid-view"); 
                break;
            default:
                res.sendFile(path.join(__dirname + "/404.html"));            
        }
    })
}

module.exports = basicRoute;
