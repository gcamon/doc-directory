'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var myModel = function () {

	var patientSchema = new Schema({
	  patient_id: String,
		firstname: String,
		lastname: String,
		age: Number,
		gender: String,
		address: String,
		state: String,
		Location: String,
		marital_status: String,
		prescriptions: [],
		date: Date,
		ewallet: {
			data: Date,
			amount: Number,
			transactions: []
		}
	},{
		collections: "patientsInfo"
	})

	var specialistSchema = new Schema({
		uid: String,
		location: String,
		firstname: String,
		lastname: String,
		username: String,
		password: String,
		email: String,
		phone: String,
		proffession: String,
		notifications: Array,
		patientsBox: Array,
		awards: Array,
		verification: String,
		Nunber_of_specialists : Number,
		rating: Number,
		type: String,
		ewallet: {
			data: Date,
			amount: Number,
			transactions: Array
		}
	},{
		collection: 'specialistInfo'
	});

	var hospitalSchema = new Schema({
		hospital_id: String,
		hospital_name: String,
		city: String,
		number_of_specialist: Number,
	},{
		collection: "hospital"
	});

	var clinicSchema = new Schema({
		clinic_id: String,
		clinic_name: String,
		city: String,
		number_of_specialist: Number,
	},{
		collection: "clinic"
	});

	var pharmacySchema = new Schema({
		pharmacy_id: String,
		pharmacy_name: String,
		city: String,
		number_of_specialist: Number,
	},{
		collection: "Pharmacy"
	});

	var radiologySchema = new Schema({
		radiology_id: String,
		radiology_name: String,
		city: String,
		number_of_specialist: Number,
	},{
		collection: "radiology"
	})

	var laboratorySchema = new Schema({
		laboratory_id: String,
		laboratory_name: String,
		city: String,
		number_of_specialist: Number,
	},{
		collection: "laboratory"
	})

	var fitnessSchema = new Schema({
		fitness_id: String,
		fitness_name: String,
		city: String,
		number_of_specialist: Number,
	},{
		collection: "fitness"
	})

	var models = {};

	//model
	models.newSpecialist = mongoose.model('specialistInfo', specialistSchema);
	models.newPatient = mongoose.model('patientsInfo', patientSchema);
	models.newHospital = mongoose.model('hospital', hospitalSchema);
	models.newClinic = mongoose.model('clinic', clinicSchema);
	models.newPharmacy = mongoose.model('pharmacy', pharmacySchema);
	models.newRadiology = mongoose.model('radiology', radiologySchema);
	models.newLaboratory = mongoose.model('laboratory', laboratorySchema);
	models.newFitness = mongoose.model('fitness', fitnessSchema);		

	return models;

}

module.exports = myModel;











/*var mongoose = require('mongoose');

var myModel = function () {

	var Schema = mongoose.Schema;

	var medicalSchema = Schema({
		uid: String,
		firstname: String,
		lastname: String,
		username: String,
		password: String,
		email: String,
		phone: String,
		data: String
	},{
		collection: 'medicalInfo'
	});

	var SpecialistSchema = Schema({
	  firstname: String,
	  lastname: String,
	  username: String,
	  password: String
	},{
	  collection: "specialistsInfo"
	});

	var patientSchema = Schema({
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
	  collection: "patientsInfo"
	});

	var models = {};

	//model
	models.newAdmin = mongoose.model('medicalInfo', medicalSchema);
	models.newUser = mongoose.model('spacialistsInfo',  SpecialistSchema);
	models.newBook = mongoose.model('patientsInfo', patientSchema);

	return models;

}



function binarySearch(items, value){

    var startIndex  = 0,
        stopIndex   = items.length - 1,
        middle      = Math.floor((stopIndex + startIndex)/2);

    while(items[middle] != value && startIndex < stopIndex){

        //adjust search area
        if (value < items[middle]){
            stopIndex = middle - 1;
        } else if (value > items[middle]){
            startIndex = middle + 1;
        }

        //recalculate middle
        middle = Math.floor((stopIndex + startIndex)/2);
    }

    //make sure it's the right value
    return (items[middle] != value) ? -1 : middle;
}

module.exports = myModel;*/