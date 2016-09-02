"use strict";

var express = require('express'),
    mongoose = require('mongoose'),
    db = require('./model'),
    config = require('./config'),
    route = require('./route'),
    signupRoute = require('./signup'),
    app = express(),
    model = db(),
    port = process.env.PORT || 1986;

app.listen(port);
mongoose.connect("mongodb://127.0.0.1:27017/medicalmull");
config.configuration(app);
route();



