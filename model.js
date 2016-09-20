'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var myModel = function () {
	var fileSchema = Schema({
		filename: String,
		path: String,
		file_id: String,
	},{
		collections: "fileinfo"
	});

	var userSchema = Schema({	  
		firstname: String,
		lastname: String,
		user_id: String,
		password: String,
		age: Number,
		email: String,
		gender: String,
		address: String,
		state: String,
		Location: String,
		marital_status: String,
		medications: [],
		date: Date,
		profile_url: String,
		dashboardUrl: String,
		ewallet: {
			data: Date,
			amount: Number,
			transactions: []
		},
		admin: Boolean,
		type: String,
		profile_pic: {
			fieldname: String,
			originalname: String,
			encoding: String,
			mimetype: String,
			destination: String,
			filename: String,
			path: String,
			size: Number
		},
		files:[],
		rating: Number,
		profile_pic_url: String
	},{
		collections: "userinfos"
	})
	//models
	var models = {};
	models.user = mongoose.model('userinfos', userSchema);
	models.files = mongoose.model('fileinfo', fileSchema);
	return models		
}

module.exports = myModel;











