"use strict";
var path = require('path');
var route = require('./config');
var salt = require('./salt');
var router = route.router;

var loginRoute = function(model) {
    router.post("/login",function (req,res) {
        
    })
}

module.exports = loginRoute;