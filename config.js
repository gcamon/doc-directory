'use strict';
var express = require('express');
var multer = require('multer');
var bodyParser = require('body-parser');
var router = express.Router();


var configuration = function (app){
	//config
	app.set('view engine', 'ejs');
	app.set('views', __dirname + '/views');    


	//middleware	
	app.use('/assets',express.static(__dirname + '/public'));
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json())
	app.use('/',router)

}

module.exports = {
	configuration: configuration,
	router: router
}