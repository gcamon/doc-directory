"use strict";

var util = require('util');
var Ewallet = require('./e-wallet');

function Activities() {}

Activities.prototype.call = function (patient_id) {

}

Activities.prototype.videoCall = function (patient_id) {

}

Activities.prototype.chat = function (patient_id) {

}

Activities.prototype.sendMail = function (patient_id) {

}

Activities.prototype.prescribe = function (patientObj) {
    
}

util.inherits(Activities,Ewallet);

module.exports = Activities;


