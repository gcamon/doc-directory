"use strict";

var express = require('express'),
    mongoose = require('mongoose'),
    https = require('https'),
    db = require('./model'),
    config = require('./config'),    
    route = require('./route'),
    signupRoute = require('./signup'),
    loginRoute = require('./login'),  
    app = express(),
    model = db(),
    payments = require("./finance"),
    Nexmo = require("nexmo"),    
    sms = new Nexmo({
    	apiKey: process.env.NEXMO_API_KEY,
 			apiSecret: process.env.NEXMO_API_SECRET
    }), 
    placement = require("./placement"),
    port = process.env.PORT || 9000;


app.listen(port);
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://127.0.0.1:27017/medicalmull");
config.configuration(app,model);
route(model);
signupRoute(model,sms);
loginRoute(model);
payments(model,sms);
placement(model,sms);

var a = ["a","b","c","d"];
var b = a.slice(0,3)
console.log(b)
/**var now = new Date();
var oneYr = new Date();
oneYr.setYear(now.getFullYear() - 1);
var stamp = + new Date(oneYr);
console.log(stamp);

var oneMonth = new Date();
oneMonth.setMonth(now.getMonth() - 2);
var stamp2 = + new Date(oneMonth)
console.log(stamp2)**/

/*var data = JSON.stringify({
 api_key: "1c9ae030",
 api_secret: "ddb306aa9194c137",
 to: '2348159074941',
 from: '2348096461927',
 text: 'Hello from Nexmo'
});

var options = {
 host: 'rest.nexmo.com',
 path: '/sms/json',
 port: 443,
 method: 'POST',
 headers: {
   'Content-Type': 'application/json',
   'Content-Length': Buffer.byteLength(data)
 }
};

var req = https.request(options);

req.write(data);
req.end();

var responseData = '';
req.on('response', function(res){
 res.on('data', function(chunk){
 	console.log(data)
   responseData += chunk;
 });

 res.on('end', function(){
   console.log(responseData);
 });
});*/

