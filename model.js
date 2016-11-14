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

	//prescriptionbodyschema goes inside prescription schema

	var prescriptionBodySchema = Schema({
		sn: Number,
		dosage: String,
		frequency: String,
		drug_name: String,
		duration: String
	});

	var statusSchema = Schema({
		date: Date,
		center_name: String,
		address: String,
		city:String,
		country: String,
		ref_id: Number,
		prescriptionId: Number
	});

	var prescriptionSchema = Schema({
		prescriptionId: Number,
		allergy: String,
		date: Date,
		doctor_experience: Number,	
		doctor_firstname: String,
		doctor_lastname: String,
		doctor_address: String,		
		doctor_id: String,
		doctor_work_place: String,
		doctor_city: String,
		doctor_country: String,
		doctor_phone: String,
		lab_analysis: String,
		scan_analysis: String,
		Doctor_profile_pic_url: String,
		patient_profile_pic_url: String,
		patient_firstname: String,
		patient_id: String,
		patient_lastname: String,
		patient_address: String,
		patient_gender: String,
		patient_age: Number,
		patient_city: String,
		patient_country: String,
		prescription_body: [prescriptionBodySchema],
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
		message: String
	});

	var doc_briefSchema = Schema({
		doctor_id: String,
		date_of_acceptance: Date,
		doctor_firstname: String,
		doctor_lastname: String,
		doctor_profile_pic_url: String,
		service_access: String,
		doctor_specialty: String,
		work_place: String,
		office_hour:[periodSchema]		
	});

	var patient_briefSchema = Schema({
		patient_firstname: String,
		patient_lastname: String,
		patient_id: String,
		patient_profile_pic_url: String,
		patient_address: String,
		patient_city: String,
		Patient_country: String,
		patient_gender: String,
		patient_age: Number,
		patient_body_weight: String
	});

	var diagnosisSchema = Schema({
		doctor_note: String,
		doctor_firstname: String,
		doctor_lastname: String,
		date: Date,
		illness: String
	});

	var medical_recordSchema = Schema({		
		files: [fileSchema],		
		diagnosis: [diagnosisSchema],		
		prescription: [prescriptionSchema]
	});

	var laboratory_refSchema = Schema({
		test_to_run: String
	});

	var radiology_refSchema = Schema({
		test_to_run: String
	});

	var drug_refSchema = Schema({
		dosage: String,
	    drugName: String,
	    frequency: String,
	    duration: String,
	    drugId: Number
	});

	var refSchema = Schema({
		ref_id: Number,
		referral_firstname: String,
		referral_lastname: String,
		referral_title: String,
		referral_id: String,		
		date: Date,		
		laboratory: laboratory_refSchema,
		radiology: radiology_refSchema,
		pharmacy: prescriptionSchema
	});

	var appointment_schema = Schema({
		date: Date,
		time: String,
		firstname: String,
		lastname: String,
		ref_id: String
	});

	var ref_notificationSchema = Schema({
		sender_firstname: String,
		sender_lastname: String,
		sender_title : String,
		sent_date: Date,
		ref_id: Number,
		note_id: Number,
		sender_profile_pic_url: String,
		message: String
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
		medications: [prescriptionSchema],
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
		doctor_notification:[noteSchema],
		referral: [refSchema],
		patient_notification: [patient_noteSchema],
		office_hour:[periodSchema],
		record_access:[accessSchema],
		accepted_doctors: [doc_briefSchema],
		doctor_patients_list : [patient_briefSchema],
		medical_records: [medical_recordSchema],
		name: String,
		diagnostic_center_notification:[ref_notificationSchema],
		accepted_patients: [patient_briefSchema],
		appointment:[appointment_schema],
		prescription_tracking: [statusSchema]		
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











