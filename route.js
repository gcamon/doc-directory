'use strict';
var path = require('path');
var route = require('./config');
var router = route.router;


var basicRoute = function () {

	router.get('/',function (req,res){
		res.sendFile(path.join(__dirname + '/index.html'));
	})

    router.get('/assets', function(req,res){
        res.send('css');
        res.send('js');
        res.send('images');
    })

}

module.exports = basicRoute;
