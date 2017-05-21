"use strict";

var express = require('express'),
    mongoose = require('mongoose'),    
    db = require('./model'),
    config = require('./config'),    
    route = require('./route'),
    signupRoute = require('./signup'),
    loginRoute = require('./login'),  
    app = express(),
    http = require('http').Server(app),
    io = require('socket.io')(http),
    model = db(),
    payments = require("./finance"),
    Nexmo = require("nexmo"),    
    sms = new Nexmo({
    	apiKey: process.env.NEXMO_API_KEY,
 			apiSecret: process.env.NEXMO_API_SECRET
    }), 
    placement = require("./placement"),
    mySocket = require("./socket"),
    port = process.env.PORT || 9000;



//var ExpressPeerServer = require('peer').ExpressPeerServer;
http.listen(port,function(){
    console.log('listening on *:9000')
});
//var options = { debug: true}

//app.use('/peer', ExpressPeerServer(server, options));

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://127.0.0.1:27017/medicalmull");
config.configuration(app,model);
route(model,sms);
mySocket(model,io)
signupRoute(model,sms);
loginRoute(model);
payments(model,sms);
placement(model,sms);

var a = ["a","b","c","d"]
a.splice(0);
console.log(a)


