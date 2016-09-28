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

	var AwardSchema = Schema({
		id: Number,
		type_of_Award: String,
		data: String,
		description: String
	});

	var EducationSchema = Schema({
		id: Number,
		school: String,
		start_year: Date,
		end_year: Date,
		certificate: String
	});

	var prescribtionSchema = Schema({
		dose: String,
		id: Number,
		date: Date,
		name_of_doctor: String,
		frequency: String,
		drug: String,
		duration: String
	});

	var transactionSchema = Schema({
			date: Date,
			available_amount: Number,
			firstname: String,
			lastname: String
	});

	var subspecialtySchema = Schema({
		id: Number,
		sub_specialty: String
	});

	var procedureSchema = Schema({
		id: Number,
		procedure_description: String
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
		city: String,
		marital_status: String,
		medications: [prescribtionSchema],
		date: Date,
		profile_url: String,
		ewallet:[transactionSchema],
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
		files:[fileSchema],
		rating: Number,
		profile_pic_url: String,
		sub_specialty: [subspecialtySchema],
		procedure: [procedureSchema],
		introductory: String,
		awards: [AwardSchema],
		education: [EducationSchema],
		specialty: String,
		work_place: String,
		phone: Number,
		experience: Number,
		country: String
	},{
		collections: "userinfos"
	})
	//models
	var models = {};
	models.user = mongoose.model('userinfos', userSchema);
	models.files = mongoose.model('fileinfo', fileSchema);
	models.award = mongoose.model('awardinfo', AwardSchema);
	models.education = mongoose.model('educationinfo', EducationSchema);
	models.prescribtion = mongoose.model("prescribtioninfo", prescribtionSchema);
	models.transaction = mongoose.model("transactioninfo",transactionSchema);
	models.procedure = mongoose.model("procedureinfo",procedureSchema);
	models.subSpecialty = mongoose.model("subspecialtyinfo",subspecialtySchema);
	return models		
}

module.exports = myModel;











