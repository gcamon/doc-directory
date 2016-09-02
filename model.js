'use strict';
var mongoose = require('mongoose');

var myModel = function () {

	var Schema = mongoose.Schema;

	var adminSchema = Schema({
		uid: String,
		firstname: String,
		lastname: String,
		username: String,
		password: String,
		email: String,
		phone: String,
		data: String
	},{
		collection: 'doctorsInfo'
	});

	var userSchema = Schema({
	  firstname: String,
	  lastname: String,
	  username: String,
	  password: String,
	  email: String,
	  phone: String,
	  address: String
	},{
	  collection: "patientsInfo"
	});

	var bookSchema = Schema({
	  book_id: String,
	  book_title: String,
	  category: String,
	  collector_firstname: String,
	  collector_lastname: String,
	  collector_address: String,
	  collector_phone: String,
	  status: String,
	  date_of_collection: String,
	  surcharge: Number,
	  quantity: Number,
	  multiple: Array,
	  check: Boolean
	},{
	  collection: "userInfo"
	});

	var models = {};

	//model
	models.newAdmin = mongoose.model('doctorsInfo',adminSchema);
	models.newUser = mongoose.model('patientsInfo', userSchema);
	models.newBook = mongoose.model('userInfo',bookSchema);

	return models;

}

module.exports = myModel;