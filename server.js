"use strict";

var express = require('express'),
    mongoose = require('mongoose'),
    db = require('./model'),
    config = require('./config'),
    route = require('./route'),
    signupRoute = require('./signup'),
    loginRoute = require('./login'),
    app = express(),
    model = db(),
    port = process.env.PORT || 1986;

app.listen(port);
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://127.0.0.1:27017/medicalmull");
config.configuration(app,model);
route(model);
signupRoute(model);
loginRoute(model);


