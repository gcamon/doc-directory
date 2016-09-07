"use strict";

var util = require('util');
var Ewallet = require('./e-wallet');

function PatientActivities() {}

PatientActivities.prototype.call = function (patient_id) {

}

PatientActivities.prototype.videoCall = function (patient_id) {

}

PatientActivities.prototype.chat = function (patient_id) {

}

PatientActivities.prototype.sendMail = function (patient_id) {

}

util.inherits(PatientActivities,Ewallet);

module.exports = PatientActivities;


