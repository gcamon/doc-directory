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
			total_balance: Number,
			firstname: String,
			lastname: String,
			activity: String,
			amount_withdrawn: Number,
			amount_deposited: Number
	});

	var noteSchema = Schema({
		sender_id: String,
		message_id: Number,
		type: String,
		date: String,
		message: String,
		sender_firstname: String,
		sender_lastname: String,
		sender_profile_pic_url: String
	});

	var periodSchema = Schema({
		day: String,
		from: String,
		to: String
	});

	var subspecialtySchema = Schema({
		id: Number,
		sub_specialty: String
	});

	var procedureSchema = Schema({
		id: Number,
		procedure_description: String
	});

	var accessSchema = Schema({
		patient_id: String,
		access_to_record: Boolean
	});

	var patient_noteSchema = Schema({
		doctor_id: String,
		doctor_firstname: String,
		doctor_lastname: String,
		date: Date,
		consultation_fee: Number,
		service_access: Boolean,
		doctor_profile_pic_url: String,
		doctor_specialty: String,
	});

	var doc_briefSchema = Schema({
		doctor_id: String,
		date_of_acceptance: Number,
		doctor_firstname: String,
		doctor_lastname: String,
		doctor_profile_pic_url: String,
		service_access: String,
		doctor_specialty: String
	});

	var patient_briefSchema = Schema({
		patient_firstname: String,
		patient_lastname: String,
		patient_id: String,
		patient_profile_pic_url: String,
	})

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
		ewallet:{			
			available_amount: Number,
			firstname: String,
			lastname: String,
			transaction:[transactionSchema]
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
		country: String,
		notification:[noteSchema],
		patient_notification: [patient_noteSchema],
		office_hour:[periodSchema],
		record_access:[accessSchema],
		accepted_doctors: [doc_briefSchema],
		doctor_patients_list : [patient_briefSchema]		
	},{
		collections: "userinfos"
	})
	//models
	var models = {};
	models.user = mongoose.model('userinfos', userSchema);
	models.files = mongoose.model('fileinfo', fileSchema);
	/*models.award = mongoose.model('awardinfo', AwardSchema);
	models.education = mongoose.model('educationinfo', EducationSchema);
	models.prescribtion = mongoose.model("prescribtioninfo", prescribtionSchema);
	models.transaction = mongoose.model("transactioninfo",transactionSchema);
	models.procedure = mongoose.model("procedureinfo",procedureSchema);
	models.subSpecialty = mongoose.model("subspecialtyinfo",subspecialtySchema);*/
	return models		
}

module.exports = myModel;











