
var app = angular.module('myApp',["ngRoute","ngAnimate","angularModalService","angularMoment",'ui.bootstrap','angular-clipboard']);

app.config(function($routeProvider){
	$routeProvider

	.when("/",{
		templateUrl: '/assets/pages/result-page.html',
		controller: 'resultController'
	})

  .when("/list",{
		templateUrl: '/assets/pages/list-doctors.html',
		controller: 'listController'
	})

  .when("/list/:num",{
		templateUrl: '/assets/pages/list-doctors.html',
		controller: 'listController'
	})

  .when("/patient-dashboard",{
    templateUrl: '/assets/pages/in-patient-dashboard-welcome.html',
    controller: 'patientWelcomeController'
  })

  .when("/appointment",{
    templateUrl: '/assets/pages/in-patient-dashboard.html',
    controller: 'appointmentController'
  })

  .when("/welcome",{
    templateUrl: '/assets/pages/doc-welcome.html',
    controller: 'docNotificationController'
  })

  .when("/patient-request",{
    templateUrl: '/assets/pages/request-body.html',
    controller: 'requestController'
  })

  .when("/granted-request/:id",{
    templateUrl: '/assets/pages/view-request.html',
    controller: 'patientViewRequestController'
  })

 .when("/patient-doctor/treatment",{
  templateUrl: '/assets/pages/patient-treatment.html',
  controller: 'patientTreatmentController'
 })

 .when("/patient-doctor/treatment/:id",{
  templateUrl: '/assets/pages/specific-doctor.html',
  controller: 'myDoctorController'
 })

 .when("/doctor-patient/treatment/:id",{
  templateUrl: '/assets/pages/specific-patient.html',
  controller: 'myPatientController'
 })  

 .when("/wallet",{
  templateUrl: '/assets/pages/my-wallet.html',
  controller: 'walletController'
 })

 .when("/edit-profile", {
  templateUrl: '/assets/pages/patient-edit-profile.html',
  controller: 'patientProfileEditController'
 })

 .when("/medical-record",{
  templateUrl: "/assets/pages/patient-view-medical-record.html",
  controller: "medicalRecordTemplateController"
 })

 .when("/patient-prescriptions",{
  templateUrl: "/assets/pages/patient-view-prescriptions.html",
  controller: "prescriptionTemplateController"
 })

 .when("/patient-prescriptions/em",{
  templateUrl: "/assets/pages/patient-view-prescriptions.html",
  controller: "emprescriptionTemplateController"
 })

 .when("/patient-prescriptions/:id",{
  templateUrl: "/assets/pages/patient-view-prescriptions.html",
  controller: "prescriptionTemplateController"
 })

 .when("/patient-prescriptions/em/:id",{
  templateUrl: "/assets/pages/patient-view-prescriptions.html",
  controller: "emprescriptionTemplateController"
 })

 .when("/patient-prescription/view-from-notification/:id",{
  templateUrl: "/assets/pages/patient-view-prescriptions.html",
  controller: "viewPrescriptionFromNoticeTemplateController"
 })
 
 .when("/search/pharmacy",{
  templateUrl: "/assets/pages/search-phamarcy.html",
  controller: "searchForPharmacyController"
 })
//for pharmacy
 .when("/referred-patients",{
  templateUrl: "/assets/pages/referred-patients-list.html",
  controller: "referredPatientsController"
 })
////////////////////////////////////////////////////////////////////////////////////////////////////////

 //for laboratory
 .when("/referral/laboratory-test",{
  templateUrl:"/assets/pages/laboratory/referral-lab.html",
  controller: "labReferredPatientsController"
 })

 .when("/laboratory-edit-profile",{
  templateUrl: "/assets/pages/laboratory/profile-edit.html",
  controller: "labProfileEdit"
 })

 .when("/lab/test-service/update",{
  templateUrl: "/assets/pages/laboratory/test-update.html",
  controller: "labTestServicesUpdateController"
 })

 .when("/lab/off-service",{
  templateUrl: "/assets/pages/laboratory/not-ran-test.html",
  controller: "testNotRanBycenterController"
 })

 .when("/laboratory/test-search/result",{
  templateUrl: "/assets/pages/utilities/test-search-result.html",
  controller: "testSearchResultController"
 })

 .when("/test/selected-laboratory",{
  templateUrl: "/assets/pages/utilities/selected-center.html",
  controller: "testSearchSelectedCenterController"
 })

 //for radiology

 .when("/radiology-edit-profile",{
  templateUrl: "/assets/pages/radiology/profile-edit.html",
  controller: "radioProfileEdit"
 })

 .when("/radio/test-service/update",{
  templateUrl: "/assets/pages/radiology/test-update.html",
  controller: "radioTestServicesUpdateController"
 })

 .when("/radio/off-service",{
  templateUrl: "/assets/pages/radiology/not-ran-test.html",
  controller: "radioTestNotRanBycenterController"
 })

 .when("/referral/radiology-test",{
  templateUrl: "/assets/pages/radiology/referral-scan.html",
  controller: "radioReferredPatientController"
 })

 .when("/radiology/scan-search/result",{
  templateUrl: "/assets/pages/utilities/scan-search-result.html",
  controller: "scanSearchResultController"
 })

 .when("/scan/selected-radiology",{
  templateUrl: "/assets/pages/utilities/selected-center.html",
  controller: "scanSearchSelectedCenterController"
 })

 //for pharmacy

 .when("/pharmacy-edit-profile",{
  templateUrl: "/assets/pages/pharmacy-inner-pages/profile-edit.html",
  controller: "pharmacyProfileEditController"
 })

 .when("/pharmacy/drug-service/update",{
  templateUrl: "/assets/pages/pharmacy-inner-pages/drug-update.html",
  controller: "pharmacyDrugServicesUpdateController"
 })

 .when("/pharmacy/off-service",{
  templateUrl: "/assets/pages/pharmacy-inner-pages/not-have-drugs.html",
  controller: "pharmacyDrugNotHaveBycenterController"
 })

 .when("/pharmacy/view-prescription/:id",{
  templateUrl: "/assets/pages/pharmacy-inner-pages/view-prescription.html",
  controller: "pharmacyViewPrescriptionController"
 })

 .when("/pharmacy/drug-search/result",{
  templateUrl: "/assets/pages/utilities/drug-search-result.html",
  controller: "drugSearchResultController"
 })

 .when("/drug/selected-pharmacy",{
  templateUrl:"/assets/pages/utilities/selected-center.html",
  controller:"searchSelectedCenterController"
 })


 /////////////////////////////////////////////////////

 .when("/patient/selected-center/:id",{
  templateUrl: "/assets/pages/selected-center.html",
  controller: "selectedCenterController"
 })

 .when("/patient/view-prescription-history/:id",{
  templateUrl : "/assets/pages/patient-view-prescription-history.html",
  controller : "trackedPrescriptionController"
 })

 .when('/doctor/call',{
  templateUrl: "/assets/pages/empty.html",
  controller: "callController"
 })

 .when("/selected-appointment/:id",{
  templateUrl: "/assets/pages/doctor-appointment.html",
  controller: "selectedAppointmentController"
 })

 .when("/p/selected-appointment/:id",{
  templateUrl: "/assets/pages/patient/patient-appointment.html",
  controller: "selectedAppointmentControllerForPatient"
 })

 .when("/lab",{
  templateUrl: "/assets/pages/lab-test-list.html",
  controller: "labController"
 })

 .when("/preview-test",{
  templateUrl: "/assets/pages/preview-lab-test.html",
  controller: "previewLabTestController"
 })

 .when("/preview-scan-test",{
  templateUrl: "/assets/pages/radiology/preview-scan-test.html",
  controller: "previewScanTestController"
 })

 .when("/find-laboratory",{
  templateUrl: "/assets/pages/find-laboratory.html",
  controller: "findLabController"
 })

 .when("/find-radiology",{
  templateUrl: "/assets/pages/radiology/find-radiology.html",
  controller: "findRadioController"
 })

 .when("/selected-laboratory/:id",{
  templateUrl: "/assets/pages/selected-laboratory.html",
  controller: "selectedLabController"
 })

 .when('/selected-radiology/:id',{
  templateUrl: "/assets/pages/radiology/selected-radiology.html",
  controller: "selectedRadioController"
 })

 .when("/laboratory/selected-laboratory/:id",{
  templateUrl: "/assets/pages/selected-laboratory.html",
  controller: "laboratorySelectedLabController"
 })

 .when("/laboratory/view-test/:id",{
   templateUrl:"/assets/pages/laboratory/lab-view-test.html",
   controller: "labTestControler"
 })

 .when("/laboratory/find-laboratory",{
  templateUrl: "/assets/pages/find-laboratory.html",
  controller: "laboratoryfindLabController"
 })

 //for radiology

 .when('/scan',{
  templateUrl: "/assets/pages/radiology/scan-test-list.html",
  controller: "scanController"
 })

 .when("/radiology/view-test/:id",{
   templateUrl:"/assets/pages/radiology/radio-view-test.html",
   controller: "radioTestControler"
 })

 .when("/radiology/find-radiology",{
  templateUrl: "/assets/pages/radiology/find-radiology.html",
  controller: "radiologyfindRadioController"
 })

 .when('/radiology/selected-radiology/:id',{
  templateUrl: "/assets/pages/radiology/selected-radiology.html",
  controller: "radiologySelectedRadioController"
 })

 .when("/pending/lab-test",{
  templateUrl: "/assets/pages/pending-test.html",
  controller: "pendingLabTestController"
 })

 .when("/pending/scan-test",{
  templateUrl: "/assets/pages/pending-test.html",
  controller: "pendingRadioTestController"
 })

 .when("/patient/laboratory-test",{
  templateUrl:"/assets/pages/laboratory/lab-test.html",
  controller: "patientLabTestController"
 })

 .when("/patient/radiology-test",{
  templateUrl:"/assets/pages/radiology/scan-test.html",
  controller: "patientRadioTestController"
 })

 .when("/patient/my-doctors",{
  templateUrl:"/assets/pages/patient/my-doctors.html",
  controller: "chooseDoctorController"
 })
  
 .when("/patient/selected-doctor",{
  templateUrl: "/assets/pages/patient/selected-doctor.html",
  controller: "selectedDoctorToSendTestController"
 })

 /**for emergency profile user **/
 .when("/emp",{
  templateUrl: "/assets/pages/em/em-note.html",
  controller: "emNoteController"
 })


 /**** for utilities ****/
 .when("/drug",{
  templateUrl: "/assets/pages/utilities/search-drug.html",
  controller: "drugController"
 })

 .when("/search-test",{
  templateUrl: "/assets/pages/utilities/search-test.html",
  controller: "searchTestController"
 })

 .when("/scan-search",{
  templateUrl: "/assets/pages/utilities/search-test.html",
  controller: "searchScanController"
 })

 .when("/help",{
  templateUrl: "/assets/pages/utilities/help.html",
  controller: "helpController"
 })

 .when("/courier",{
  templateUrl: "/assets/pages/utilities/courier.html",
  controller: "courierController"
 })

});

app.service('templateService',[function(){
  this.isThroughLogin = false;
  this.getname = "";
  this.getid = "";
  this.getpic = "";
  this.getRealDate = new Date();
  this.getfirstname = "";
  this.getLastname = "";
  this.getFee = 0;
  this.patientName = "";
  this.wallet = {};
  this.getspecialty = "";
  this.holdAllNotification = [];
  this.holdId = "";

  //holds patients id as soon as patient logs in for communication purpose
  this.holdPatientIdForCommunication;

  //HOLDS DOCTOR id for communication purpose
  this.holdDoctorIdForCommunication;
  //hold id of a doctor in the checkOutcontroller
  this.holdIdForSpecificDoc = "";

  //holds id for a specific patient clicked in the checkoutcontroller
  this.holdIdForSpecificPatient;
  
  //this service is just to hold the consultation and current wallet amount for insuficientfundController.
  this.holdfee = "";
  this.holdwalletAmount = "";

  //holds doctor info for search result page ie listcontroller
  this.doctorsData = [];

  //holds medical records
  this.holdMedicalRecord = [];

  //holds prescriptions
  this.holdPrescriptions = [];
  //holds id for finding prescription or medical record in an array above
  this.holdIdForFindingRecord;
  //this holds prescription for patientview request controller.
  this.holdAllPrescriptionForOtherCtrl;
  //holds prescription to be forwarded to a phamarcy.note this can hold for prescription that can be forward from doctor to pharmacy, patient
  //to pharmacy and pharmacy to pharmacy.
  this.holdPrescriptionToBeForwarded;
  

  //hol attendance list
  this.holdList = [];

  //checks the list for already exist patient
  this.checkInTheList = {};

  //holds prescription id
  this.holdPrescriptionsId;

  //holds referral data for pharmacy
  this.holdPharmacyReferralData;

  //holds where prescriptions has been sent to.
  this.holdTrackRecord;
  //holds prescription for where prescriptions have been sent.
  this.holdPrescriptionForTrackRecord;

  //holds all lab test from the back end
  this.holdAllLabTest;

  //holds all scan test from the back end
  this.holdAllRadioTest;

  //holds all pending laboratory
  this.pendingLab;

  //holds all pending radiolography
  this.pendingScan; 


  //hodls fn to call when patients wants to view prescription from the notification template.
  this.holdFnToViewNotification = function(fn) {
    fn();
  }

  this.changedProfilePic = "";
  this.isUpdated = false;

  //holds the referral for diagnostic centers
  this.holdReferral;

  //holds the selected center a patient finally picked to forward his or her prescription to;
  this.holdTheCenterToFowardPrescriptionTo;
  //holds the current page of the user browser.
  this.holdCurrentPage = "/welcome";

  //this holds the selected appointment by the doctor
  this.holdAppointmentData;

  //holds the selected lab test be run
  this.holdSelectedLabTest;

  //holds patient data which will be sent to a laboratory
  this.holdForSpecificPatient

  //holds for selected doctor
  this.holdForSpecificDoc;

  //holds lab referral data
  this.holdLaboratoryReferralData

  //holds unRantest array 
  this.holdUnranTest;

  this.holdTheRadiologyToFowardTestTo;

  //holds  test to be forwarded to another center;
  this.holdTestToBeForwarded;

  //holds patients accepted doctors for chooseDoctorController
  this.holdMyDoctorsForSendingTest;

  //holds selected doctor obj
  this.holdSelectedDoctorToSendTest;

  //holds the scan images for a particular referral in any 
  this.holdScanImageList;

  //holds the list of precription request for the doctor
  this.holdPrescriptionRequestData
  //hold a particular prescription test obj
  this.holdPrescriptionTestObj

  //hold the urrent length of prescription request list
  this.holdlabLenOfPrescriptionRequest;

  this.holdRadioLenOfPrescriptionRequest;

  //holds labPrescriptionReq for lab 
  this.labPrescriptionReq;
  //holds radioPrescriptionReq for scan
  this.radioPrescriptionReq;

  //this holds doctor's patients list
  this.holdDocPatientList

  //just holds truthy
  this.isTrue

  //holds drug search results
  this.holdDrugSearchResult;

    
}]);

app.service("multiData",["$http","$window","templateService",function($http,$window,templateService){
	this.sendPic = function(url,data){
    console.log(data)
		var fd = new FormData();
		for(var key in data){
			fd.append(key,data[key]);
		};
		$http.put(url,fd,{
			transformRequest: angular.identity,
			headers: {"Content-Type":undefined}
		})
    .success(function(response){
      templateService.changedProfilePic = response;
      templateService.isUpdated = true;
      templateService.holdScanImageList = response;
      console.log(response)
      alert("sent!!!")
    });
	}
}]);


app.factory("localManager",["$window",function($window){
  return {
    setValue: function(key, value) {
        $window.localStorage.setItem(key, JSON.stringify(value));
    },
    getValue: function(key) {
        try {
            return JSON.parse($window.localStorage.getItem(key));
        } catch (e) {
          console.log(e);
        }
    },
    removeItem: function(key) {
      $window.localStorage.removeItem(key);
    }
  };
}]);

app.factory("requestManager",[function(){
  var data = {};
  return {
      set: function(patient) {
        data.user = patient;
      },
      get: function() {
        return data.user;
      }
  };
}]);

app.factory("userData",function(){
  var user = {};
  return {
    set: function(data){
      console.log(data)
      user["userInfo"] = data;
    },
    get: function(){
      return user["userInfo"];
    }
  }
});
////////////////////////////// move the controll below to a right place later.

//laboratory
app.controller("labProfileEdit",["$scope","$http","$location","$window","ModalService","templateService","localManager",
  function($scope,$http,$location,$window,ModalService,templateService,localManager) {

}]);

app.controller("labTestServicesUpdateController",["$scope","$http","$location","localManager","templateService","labTests","ModalService",
  function($scope,$http,$location,localManager,templateService,labTests,ModalService) {

    /*** todo ajax call will be made to get the center unran test if any from the backend***/
    var ObjList = Object.keys(labTests);
    var objLen = Object.keys(labTests).length;

    var count = 0;
    while(objLen > count){
      labTests[ObjList[count]].forEach(function(item){
        item.val = true;
      })
      count++
    }

    $scope.tests1 = labTests.listInfo;
    $scope.tests2 = labTests.listInfo2;
    $scope.tests3 = labTests.listInfo3;
    $scope.tests4 = labTests.listInfo4;
    $scope.tests5 = labTests.listInfo5;
    $scope.tests6 = labTests.listInfo6;
    $scope.tests7 = labTests.listInfo7;

    $scope.saveSelection = function() {     
       ModalService.showModal({
          templateUrl: 'selected-test-not-ran.html',
          controller: "labTestNotRanByCenterModalController"
      }).then(function(modal) {
          modal.element.modal();
          modal.close.then(function(result) {
            $scope.message = "You said " + result;
          });
      });
    }

}]);

app.controller("labTestNotRanByCenterModalController",["$scope","$http","$location","templateService","labTests",
  function($scope,$http,$location,templateService,labTests) {
    
    
    var notRanList = [];
    var ObjList = Object.keys(labTests);
    var objLen = Object.keys(labTests).length;

    var count = 0;
    while(objLen > count){
      labTests[ObjList[count]].forEach(function(item){
        if(item.val === false)
          notRanList.push(item)
      })
      count++
    }
    $scope.selectedTest = notRanList;

    $scope.save = function(){
      $http({
        method  : 'POST',
        url     : "/laboratory/create-services",
        data    : $scope.selectedTest, //forms user object
        headers : {'Content-Type': 'application/json'} 
       })
      .success(function(data) {
        console.log(data)
        
      });                                  
    }

    $scope.goBack = function(){
      $location.path("/lab/test-service/update")
    }
}]);

app.controller("testNotRanBycenterController",["$scope","$http",function($scope,$http){
    $http({
      method  : 'GET',
      url     : "/laboratory/not-ran-services",        
      headers : {'Content-Type': 'application/json'} 
     })
    .success(function(data) {
      console.log(data)
      $scope.notService = data;
    });

    $scope.saveTests = function() {
      var picked = [];
      var testList = $scope.notService;
      for(var i = 0; i < testList.length; i++){
        if(testList[i].val === true) {
          picked.push(testList[i].id)
        }
      }
      $http({
      method  : 'PUT',
      url     : "/laboratory/update-services",
      data    :   picked,       
      headers : {'Content-Type': 'application/json'} 
     })
      .success(function(data) {
        if(data.message) {
          alert("Success! Tests services updated")
        } else {
          alert("tests services not updated! Something went wrong")
        }
        
      });
    }

    $scope.$watch("notService",function(newVal,oldVal){
      console.log("i am watching")
      console.log(oldVal)
      if(oldVal){
        $scope.isToSave = true;
      }
    },true);                                     
}]);

//radiology
app.controller("radioProfileEdit",["$scope","$http","$location","$window","ModalService","templateService","localManager",
  function($scope,$http,$location,$window,ModalService,templateService,localManager) {

}]);

app.controller("radioTestServicesUpdateController",["$scope","$http","$location","localManager","templateService","scanTests","ModalService",
  function($scope,$http,$location,localManager,templateService,scanTests,ModalService) {

    /*** todo ajax call will be made to get the center unran test if any from the backend***/
    var ObjList = Object.keys(scanTests);
    var objLen = Object.keys(scanTests).length;

    var count = 0;
    while(objLen > count){
      scanTests[ObjList[count]].forEach(function(item){
        item.val = true;
      })
      count++
    }

    $scope.tests1 = scanTests.listInfo1;
    $scope.tests2 = scanTests.listInfo2;
    $scope.tests3 = scanTests.listInfo3;
    $scope.tests4 = scanTests.listInfo4;
    $scope.tests5 = scanTests.listInfo5;
    $scope.tests6 = scanTests.listInfo6;

    $scope.saveSelection = function() {     
       ModalService.showModal({
          templateUrl: 'selected-test-not-ran.html',
          controller: "radioTestNotRanByCenterModalController"
      }).then(function(modal) {
          modal.element.modal();
          modal.close.then(function(result) {
            $scope.message = "You said " + result;
          });
      });
    }

}]);

app.controller("radioTestNotRanByCenterModalController",["$scope","$http","$location","templateService","scanTests",
  function($scope,$http,$location,templateService,scanTests) {
    
    
    var notRanList = [];
    var ObjList = Object.keys(scanTests);
    var objLen = Object.keys(scanTests).length;

    var count = 0;
    while(objLen > count){
      scanTests[ObjList[count]].forEach(function(item){
        if(item.val === false)
          notRanList.push(item)
      })
      count++
    }
    $scope.selectedTest = notRanList;

    $scope.save = function(){
      $http({
        method  : 'POST',
        url     : "/radiology/create-services",
        data    : $scope.selectedTest, //forms user object
        headers : {'Content-Type': 'application/json'} 
       })
      .success(function(data) {
        console.log(data)
        
      });                                  
    }

    $scope.goBack = function(){
      $location.path("/radio/test-service/update")
    }
}]);

app.controller("radioTestNotRanBycenterController",["$scope","$http",function($scope,$http){
    $http({
      method  : 'GET',
      url     : "/radiology/not-ran-services",        
      headers : {'Content-Type': 'application/json'} 
     })
    .success(function(data) {
      console.log(data)
      $scope.notService = data;
    });

    $scope.saveTests = function() {
      var picked = [];
      var testList = $scope.notService;
      for(var i = 0; i < testList.length; i++){
        if(testList[i].val === true) {
          picked.push(testList[i].id)
        }
      }
      $http({
      method  : 'PUT',
      url     : "/radiology/update-services",
      data    :   picked,       
      headers : {'Content-Type': 'application/json'} 
     })
      .success(function(data) {
        if(data.message) {
          alert("Success! Tests services updated")
        } else {
          alert("tests services not updated! Something went wrong")
        }
        
      });
    } 

    $scope.$watch("notService",function(newVal,oldVal){
      console.log("i am watching")
      console.log(oldVal)
      if(oldVal){
        $scope.isToSave = true;
      }
    },true)                            
}]);

//pharmacy
app.controller("pharmacyDrugServicesUpdateController",["$scope","$http","$location","localManager","templateService","Drugs","ModalService",
  function($scope,$http,$location,localManager,templateService,Drugs,ModalService) {
    var objLen = Drugs.length;
    var count = 0;
    while(objLen > count){
      Drugs.forEach(function(item){
        item.val = true;
      })
      count++
    }

    $scope.allDrugs = Drugs;


    $scope.saveSelection = function() {     
       ModalService.showModal({
          templateUrl: 'selected-drug-not-have.html',
          controller: "pharmacyDrugNotHaveByCenterModalController"
      }).then(function(modal) {
          modal.element.modal();
          modal.close.then(function(result) {
            $scope.message = "You said " + result;
          });
      });
    }

}]);

app.controller("pharmacyDrugNotHaveByCenterModalController",["$scope","$http","$location","templateService","Drugs",
  function($scope,$http,$location,templateService,Drugs) {
    var notRanList = [];
    var objLen = Drugs.length;

    var count = 0;
    while(objLen > count){         
      if(Drugs[count].val === false)
          notRanList.push(Drugs[count]);
      count++;
    }
    $scope.selectedDrugs = notRanList;

    $scope.save = function(){
      $http({
        method  : 'POST',
        url     : "/pharmacy/create-services",
        data    : $scope.selectedDrugs, //forms user object
        headers : {'Content-Type': 'application/json'} 
       })
      .success(function(data) {
        console.log(data)
        
      });                                  
    }

    $scope.goBack = function(){
      $location.path("/pharmacy/drug-service/update")
    }

}]);

app.controller("pharmacyDrugNotHaveBycenterController",["$scope","$http",function($scope,$http){
    $http({
      method  : 'GET',
      url     : "/pharmacy/not-ran-services",        
      headers : {'Content-Type': 'application/json'} 
     })
    .success(function(data) {
      console.log(data)
      $scope.notService = data;
    });

    $scope.saveDrugs = function() {
      var picked = [];
      var drugList = $scope.notService;
      for(var i = 0; i < drugList.length; i++){
        if(drugList[i].val === true) {
          picked.push(drugList[i].id)
        }
      }
      $http({
      method  : 'PUT',
      url     : "/pharmacy/update-services",
      data    :   picked,       
      headers : {'Content-Type': 'application/json'} 
     })
      .success(function(data) {
        if(data.message) {
          alert("Success! Drug stock updated")
        } else {
          alert("Drug stock is not updated! Something went wrong")
        }
        
      });
    } 

    $scope.$watch("notService",function(newVal,oldVal){
      if(oldVal){
        $scope.isToSave = true;
      }
    },true)                            
}]);


/////////////////////////////////////
app.controller('loginController',["$scope","$http","$location","$window","ModalService","templateService","localManager",
  function($scope,$http,$location,$window,ModalService,templateService,localManager) {
  $scope.login = {};
  $scope.error = "";
  
  
	$scope.send = function(){        
        $http({
          method  : 'POST',
          url     : '/user/login',
          data    : $scope.login, //forms user object
          headers : {'Content-Type': 'application/json'} 
         })
        .success(function(data) {
          console.log(data) 
          localManager.setValue("resolveUser",data);             
          if (data.isLoggedIn) {
            switch(data.typeOfUser) {
              case "Patient":
                $window.location.href = '/patient/dashboard';  
              break;
              case "Doctor":
               $window.location.href = '/doctor/dashboard';   
              break;
              case "Pharmacy":
                $window.location.href = "/medical-center/pharmacy"; 
              break;
              case "Laboratory":
                $window.location.href = "/medical-center/laboratory"; 
              break;
              case "Radiology":
                $window.location.href = "/medical-center/radiology"; 
              break;
              default:
                $window.location.href = "/medical-center/view"; 
              break; 

            }
            
          } else {       
            $scope.error = "Email or Password incorrect!";            
          }
        });	                                 //multiData.sendData(uploadUrl,$scope.logInfo);
	}

  $scope.close = function(result) {
    close(result,500);
  }

  $scope.register = function(){
     ModalService.showModal({
          templateUrl: 'signup.html',
          controller: "signupController"
      }).then(function(modal) {
          modal.element.modal();
          modal.close.then(function(result) {
              $scope.message = "You said " + result;
          });
      });
  }
  
}])

app.controller('signupController',["$scope","$http","$location","$window",function($scope,$http,$location,$window) {
  $scope.user = {};  
	$scope.submit = function(type){
        $scope.user.typeOfUser = type || $scope.user.typeOfUser;
        var capitalize = $scope.user.city.charAt(0).toUpperCase() + $scope.user.city.slice(1);
        $scope.user.city = capitalize;        
        $http({
          method  : 'POST',
          url     : '/user/signup',
          data    : $scope.user, //forms user object
          headers : {'Content-Type': 'application/json'} 
         })
          .success(function(data) {              
            if (data) {              
              $window.location.href = '/account-created';                           
            } else {       
              $scope.error = "Oops! signup failed! It seems like user with this email already exist. ";
              console.log(data);             
            }
          });		                                 
	}

  $scope.close = function(result) {
    close(result,500);
  }
}]);

app.directive("fileModel",["$parse",function($parse){
  return {
    restrict: "A",
    link: function(scope,element,attrs){
      var model = $parse(attrs.fileModel);
      var modelSetter = model.assign;
      var isMultiple = attrs.multiple;
      element.bind('change', function () {
          var values = [];          
          angular.forEach(element[0].files, function (item) {
              console.log(item)
              var value = item
              values.push(value);
          });
          scope.$apply(function () {
              if (isMultiple) {
                  modelSetter(scope, values);
              } else {
                  modelSetter(scope, values[0]);
              }
          });
      });
    }
  }
}]);

app.controller('pictureController',["$scope","$http","$location","multiData",function($scope,$http,$location,multiData) {
   $scope.user = {};
    
   $scope.update = function(typeOfFile){
    $scope.user.type = typeOfFile;
    var uploadUrl = "/user/update";     
     multiData.sendPic(uploadUrl,$scope.user);    
	  } 
}]);

app.controller('formController',["$scope","$http","$location","multiData","$window",function($scope,$http,$location,multiData,$window) {  
  $scope.user = {};
  $scope.user.type = "form"; 
  $scope.user.education = [{"id":1,"type":"edu"}];
  $scope.user.subSpecialty = [{"id":1,"type":"ss"}];
  $scope.user.procedure = [{"id":1,"type":"pro"}];
  $scope.user.award = [{"id":1,"type":"ha"}];
  $scope.user.office = [{"id":1,"type":"of"}];

  $scope.addNewField = function(arr) {
     var random = Math.floor(Math.random() * 99965);
     arr.push({});
     arr[arr.length-1].id = random;
     arr[arr.length-1].type = arr[0].type;
     $scope.check(arr);
   };

   $scope.check = function(arr){
     switch(arr[0].type) {
        case "edu":
          if(arr.length > 1) {
            $scope.edu = true;
          } else {
            $scope.edu = false;
          }
          break;
        case "ss":
          if(arr.length > 1) {
            $scope.sp = true;
          } else {
            $scope.sp = false;
          }
          break;
        case "pro":
          if(arr.length > 1) {
            $scope.pro = true;
          } else {
            $scope.pro = false;
          }
          break;
        case "ha":
          if(arr.length > 1) {
            $scope.ha = true;
          } else {
            $scope.ha = false;
          }
          break;
        case "of":
          if(arr.length > 1) {
            $scope.of = true;
          } else {
            $scope.of = false;
          }
          break;
        default:
          break;
     }
   }
   
   $scope.removeNewField = function(arr) {
     if ( arr.length !== 0 ) {
      arr.pop();
      $scope.check(arr);
     }
   };

   $scope.update = function(){      
      $http({
        method  : 'PUT',
        url     : '/user/update',
        data    : $scope.user, //forms user object
        headers : {'Content-Type': 'application/json'} 
        })
      .success(function(data) {              
        if (data) {
          $window.location.href = '/doctor/update';                           
        } 
      });		                                 
	}

}]);

//controller for searches from  the home page Note this controller is abandoned for now
app.controller('searchController',["$scope","$http","$location","$window","multiData","localManager","templateService",
  function($scope,$http,$location,$window,multiData,localManager,templateService) {
   $scope.user = {};
   $scope.user.type = "Doctor";
    $scope.search = function(){
      if($scope.user.city !== undefined) {
        var capitalize = $scope.user.city.charAt(0).toUpperCase() + $scope.user.city.slice(1);
        $scope.user.city = capitalize;        
      }

       var filterInput = {};
      for(var i in $scope.user){
        if($scope.user.hasOwnProperty(i) && $scope.user[i] !== "" && $scope.user[i].length > 1) {
          filterInput[i] = $scope.user[i];
        }
      }
            
      $http({
        method  : 'POST',
        url     : "/user/find-group",
        data    : filterInput, //forms user object
        headers : {'Content-Type': 'application/json'} 
        })
      .success(function(data) {              
        if(data){
          localManager.setValue("userInfo",data);
          $window.location.href = "/user/find-specialist";
        }
      });		                                 
    }    
}]);

//for the list of doctors page
app.controller('resultController',["$scope","$http","$location","localManager",function($scope,$http,$location,localManager) {
  $scope.user = {};
  $scope.user.type = "Doctor";
  $scope.refineUser = {};
  $scope.searchMore = function () {
   search($scope.user,"/user/find-group");
  }
  $scope.refineSearch = function () {
    //work on refine u=ser for embedded doc
   search($scope.refineUser,"/user/refine-find-group");
  }
  var search = function(data,url){
    if(Object.keys(data).length > 0){
      if(data.city !== undefined) {
          var capitalize = data.city.charAt(0).toUpperCase() + data.city.slice(1);
          data.city = capitalize;
      }
      var filterInput = {};
      for(var i in data){
        if(data.hasOwnProperty(i) && data[i] !== "" && data[i].length > 1) {
          filterInput[i] = data[i];
        }
      }
      
      $http({
        method  : 'POST',
        url     : url,
        data    : filterInput, //forms user object
        headers : {'Content-Type': 'application/json'} 
        })
      .success(function(data) {              
        if(data){          
          localManager.setValue("userInfo",data);
          var id = Math.floor(Math.random() * 2635374836);
          $location.path("/list/" + id);
        } else {
          console.log("no data");
        }
      });
   }		                                 
  }
  $location.path("/list");                              
}]);

//another controller for login. it is a modal controller found in the home page ie "doctore signup"
app.controller("homeDoctorSignupController",["$scope","ModalService",function($scope,ModalService){
   $scope.docSignup = function(){
      ModalService.showModal({
          templateUrl: 'doc-signup.html',
          controller: "signupController"
      }).then(function(modal) {
          modal.element.modal();
          modal.close.then(function(result) {
             
          });
      });

    }

}]);

//another controller for login. it is a modal controller found in the home page ie "patient signup"
app.controller("homePatientSignupController",["$scope","ModalService",function($scope,ModalService){
   $scope.patientSignup = function(){
      ModalService.showModal({
          templateUrl: 'patient-signup.html',
          controller: "signupController"
      }).then(function(modal) {
          modal.element.modal();
          modal.close.then(function(result) {
             
          });
      });

    }
  
}]);

//model that brings a login/ signup for for users that have already logged in. it is found in the search and result pages 
app.controller("appointmentController",["$scope","$location","localManager","ModalService","templateService",
  function($scope,$location,localManager,ModalService,templateService){
   var doctorData = localManager.getValue("userInfo");
   $scope.docInfo= doctorData;   

   $scope.question = function(){
      ModalService.showModal({
          templateUrl: 'question.html',
          controller: "connectController"
      }).then(function(modal) {
          modal.element.modal();
          modal.close.then(function(result) {
             
          });
      });

    }

    $scope.request = function(){
      ModalService.showModal({
          templateUrl: 'request.html',
          controller: "connectController"
      }).then(function(modal) {
          modal.element.modal();
          modal.close.then(function(result) {
             
          });
      });

    }


}]);

//conroller id found inside a modal when user finally complete sending request to a doctor. it builds request object to be sent
app.controller("connectController",["$scope","$location","$http","localManager","templateService",
  function($scope,$location,$http,localManager,templateService){
  
   //code moved to bookingModalController for better UX.
}]);

//list all the doctors or others
app.controller('listController',["$scope","$http","$location","$window","localManager","templateService",
  function($scope,$http,$location,$window,localManager,templateService) {  
   $scope.searchResult = localManager.getValue("userInfo");
   $scope.valid = true;
   if($scope.searchResult) {
      if($scope.searchResult.length >= 10) {
         $scope.data = true;   
      }
      if($scope.searchResult.length === 0){
        $scope.isNotFound = true;
      }
    }
                      
}]);

//brings a  selected doctor to the patient profile page
app.controller('bookController',["$scope","$http","$location","$window","localManager","ModalService","templateService",
  function($scope,$http,$location,$window,localManager,ModalService,templateService) {

  var doctorsList = localManager.getValue("userInfo")
  $scope.book = function(person){
    var elementPos = doctorsList.map(function(x){return x.user_id}).indexOf(person)
    var objFound = doctorsList[elementPos];
    templateService.holdForSpecificDoc = objFound;   
    templateService.doctorsData = localManager.getValue("userInfo");
    getAHelp("book");    
  }

  $scope.ask = function(person){
    var elementPos = doctorsList.map(function(x){return x.user_id}).indexOf(person)
    var objFound = doctorsList[elementPos];
    templateService.holdForSpecificDoc = objFound;   
    getAHelp("ask")
  }

  function getAnswer(type) {

  }

  function getAHelp(type) {
    var checkIsLoggedIn = localManager.getValue("resolveUser");
     if(checkIsLoggedIn.isLoggedIn) {
      //make a modal call
      if(type === "book") {
        modalCall("selected-doc.html","bookingDocModalController")
      } else if(type === "ask") {
        modalCall("question.html","bookingDocModalController")
      }
     } else {
      modalCall('login.html',"loginController");
     }
     
  }

  function modalCall(template,controller){

      ModalService.showModal({
          templateUrl: template,
          controller: controller
      }).then(function(modal) {
          modal.element.modal();
          modal.close.then(function(result) {
            $scope.message = "You said " + result;
          });
      });
  
  }
                      
}]);

app.controller("bookingDocModalController",["$scope","templateService","$http",function($scope,templateService,$http){
  $scope.docInfo = templateService.holdForSpecificDoc;
  $scope.isViewDoc = true;

  $scope.request = function() {
    $scope.isViewDoc = false;
    $scope.isToConfirm = true;
    $scope.docInfo = templateService.holdForSpecificDoc;
    $scope.patient = {};

    $scope.sendRequest = function() {
          
      var random = Math.floor(Math.random() * 1000);       
       $scope.patient.type = "consultation";      
       $scope.patient.message_id = random;
       $scope.patient.date = new Date();
       $scope.patient.receiverId = $scope.docInfo._id;
        $http({
            method  : 'PUT',
            url     : "/patient/doctor/connection",
            data : $scope.patient,
            headers : {'Content-Type': 'application/json'} 
            })
          .success(function(data) {
            console.log(data)
              if(data)              
               $scope.message = "Your consultation request has been sent!";
              $scope.isViewDoc = false;
              $scope.isToConfirm = false;
               //use settime out to clear the textfieeld and the response message
          });
        
    }
  }

   $scope.getAnswer = function() {
     if(Object.keys($scope.patient).length > 0){
      var random = Math.random(Math.floor() * 1000);
       
       $scope.patient.type = "question";
       
       $scope.patient.message_id = random;
       $scope.patient.date = new Date();
       $scope.patient.receiverId = $scope.docInfo._id;

        $http({
            method  : 'PUT',
            url     : "/patient/doctor/connection",
            data : $scope.patient,
            headers : {'Content-Type': 'application/json'} 
            })
          .success(function(data) {
              if(data)              
               $scope.message = "Your complaint has been sent!";
               $scope.patient.message= " ";
               //use settime out to clear the textfieeld and the response message
          });
      }
    }
  
}])

/*** for doctors ***/
//saves few details about the logged in doctor to a angularjs service so that it can be used in other controllers.
app.controller("inDoctorDashboardController",["$scope","$location","$http","localManager","templateService","ModalService",
  function($scope,$location,$http,localManager,templateService,ModalService){
    //remember that templateservice.getid is used in another controller in case you wish to modify this block to use ajax to fetch data when
    //doctor's dashboard page loads.
    $scope.getName = function(firstname,lastname,id,pic,specialty){
      templateService.getfirstname = firstname;
      templateService.getlastname = lastname;
      templateService.getid = id;
      templateService.getpic = pic;
      templateService.getspecialty = specialty;
      setId(id,firstname,lastname);
    }

    function setId(id,firstname,lastname){
      var comObj = {
        callerId: id,
        firstname: firstname,
        lastname: lastname
      }

      templateService.holdDoctorIdForCommunication = comObj;
    }
      
    $location.path(localManager.getValue("currentPage") || "/welcome");

    //highlits modal to fill in new patient basic information.
    $scope.newPatient = function(){
      ModalService.showModal({
            templateUrl: 'patient-emergency-form.html',
            controller: "newPatientModalController"
        }).then(function(modal) {
            modal.element.modal();
            modal.close.then(function(result) {
               
        });
      });
   }

   $http({
      method  : 'GET',
      url     : "/doctor/my-patients",
      headers : {'Content-Type': 'application/json'} 
      })
    .success(function(data) {              
      templateService.holdDocPatientList = data.doctor_patients_list;
      $scope.patientList = templateService.holdDocPatientList;
    });

    

}]);

//sends a request to get all notifications for the logged in doctor and also filters the result.
app.controller("docNotificationController",["$scope","$location","$http","localManager","templateService","requestManager",
  function($scope,$location,$http,localManager,templateService,requestManager){
   //gets all notications for the doctor from the backend 
   $http({
      method  : 'GET',
      url     : "/doctor/notifications",
      headers : {'Content-Type': 'application/json'} 
      })
    .success(function(data) {
      var filter = {};
      for(var item = data.doctor_notification.length - 1; item >= 0; item--) {
        if(!filter.hasOwnProperty(data.doctor_notification[item].type)){
          filter[data.doctor_notification[item].type] = [];
          filter[data.doctor_notification[item].type].push(data.doctor_notification[item]);
        } else {
          filter[data.doctor_notification[item].type].push(data.doctor_notification[item]);
        }
        
      }
     
      $scope.name = templateService.getfirstname;
      $scope.total = data.doctor_notification.length;
      $scope.question = filter.question;
      $scope.consultation = filter.consultation;

      //views the selected request from a patient
      $scope.view = function(patient){
        requestManager.set(patient);
        $location.path("/patient-request");
      };
      //deletes a selected request from a patient.
      $scope.delete = function(){      
      };
    });
    //controls the dropdown
    $scope.drop = function(){
      if(!state.isClicked) {
        $scope.showMsg = true;
        state.isClicked = true;
      } else {
        $scope.showMsg = false;
        state.isClicked = false;
      }
    }

    $scope.fold = function(){
      $scope.showMsg = false;
    }
    var state = {};
    state.isClicked = false;
    $scope.drop1 = function(){      
      if(!state.isClicked) {
        $scope.showMsg1 = true;
        state.isClicked = true;
      } else {
        $scope.showMsg1 = false;
        state.isClicked = false;
      }
       
    }

    $scope.fold1 = function(){
        $scope.showMsg1 = false;
    }


  
}]);

app.controller("doctorBarNotificationController",["$scope","$location","$http","$window","templateService","localManager",function($scope,$location,$http,
  $window,templateService,localManager){  
  var filter = {};
  $scope.getData = function(firstname,lastname,date,pic,fee,patientName,wallet_amount,doc_id,service_access,specialty,message){
     if(!filter.hasOwnProperty(filter[date])){
        filter[date] = date;
         var values = {};   
         values.getRealDate = date;
         values.getfirstname = firstname;
         values.getLastname = lastname;
         values.getFee = fee;
         values.getpic = pic;
         values.patientName = patientName;
         values.wallet = wallet_amount;
         values.doctorId = doc_id;
         values.service_access = service_access;
         values.getSpecialty = specialty;
         values.getMessage = message;
         templateService.holdAllNotification.push(values);

     }
   }

   templateService.isTrue = true;

   $scope.convertDate = function(date){
     templateService.getRealDate = date;
     $scope.realDate = templateService.getRealDate;
   } 

  $scope.logout = function () {
    localManager.removeItem("userInfo");
    localManager.removeItem("currentPage");
    localManager.removeItem("currentPageForPatients");
    localManager.removeItem("receiver");
    localManager.removeItem('caller');
    localManager.removeItem("heldSessionData");
    localManager.removeItem("resolveUser");  
     $http({
        method  : 'GET',
        url     : "/user/logout",
        headers : {'Content-Type': 'application/json'} 
        })
      .success(function(data) {
        $scope.userData = data;
        $window.location.href = '/';
     });
  }

  $scope.viewNote = function(id){
    templateService.holdId = id;
    $location.path("/granted-request/" + id);
  }


  //get the list of prescription request from the backend.
   $http({
      method  : 'GET',
      url     : "/doctor/get-patient-prescription-request",
      headers : {'Content-Type': 'application/json'} 
      })
    .success(function(data) { 
    console.log(data); 
      var filterList = [];
      var filter = {};
      var dataList = data.doctor_prescriptionRequest;
      for(var i = 0; i < dataList.length; i++){
        if(!filter.hasOwnProperty(dataList[i].sender_id)) {
           filter[dataList[i].sender_id] = "";
           filterList.push(dataList[i]);       
        } 
      }

      
      templateService.holdPrescriptionRequestData =  data.doctor_prescriptionRequest;
      localManager.setValue("prescriptionRequestData",data.doctor_prescriptionRequest)
      var request =  filterList;
      if(request.length > 0) {
        $scope.isNew = true;
        $scope.len = request.length;
        $scope.allRequest = request;
      } else {
        $scope.noRequest = "Prescription request list empty";
      }
    });

    $scope.viewPatient = function(id){
      var callerId = templateService.holdDoctorIdForCommunication;
      localManager.setValue("receiver",id);
      localManager.setValue('caller',callerId);    
      templateService.holdIdForSpecificPatient = id;
      var page = "/doctor-patient/treatment/" + id;
      localManager.setValue("currentPage",page);
      $location.path("/doctor-patient/treatment/" + id);
    }  

}]);

app.controller("docAppointmentController",["$scope","$location","$http","$window","templateService","localManager",
  function($scope,$location,$http,$window,templateService,localManager){

  $scope.getDateTime = function(date,time){    
    $scope.date = date;
    $scope.time = time;
  }

  $scope.viewAppointment = function(sessionId) {
    var session = {
      id: sessionId
    }

    $http({
        method  : 'PUT',
        url     : "/doctor/appointment/view",
        data    : session,
        headers : {'Content-Type': 'application/json'} 
        })
      .success(function(data) {
        console.log(data);        
        templateService.holdAppointmentData = data;
        $location.path("/selected-appointment/" + sessionId);     
    });
  }

}]);


app.controller("newPatientModalController",["$scope","$http","ModalService","templateService",
  function($scope,$http,ModalService,templateService){
  $scope.patient = {};
  $scope.isForm = true;
  $scope.sendForm = function(){
    if(Object.keys($scope.patient).length >= 3) {
      for(var i in $scope.patient) {
        if($scope.patient.hasOwnProperty(i) && $scope.patient[i] === undefined) {
            alert("Please complete patient " + i  + " below")
            return;
        }
          
      }
    } else {
      alert("Please complete all fields")
    }

    $http({
        method  : 'POST',
        url     : "/user/emergency-signup",
        data    : $scope.patient,
        headers : {'Content-Type': 'application/json'} 
        })
      .success(function(data) {
        if(data.message){
          $scope.error = data.message;
        } else {         
          templateService.holdDocPatientList.unshift(data);
          $scope.isForm = false;
          $scope.isCreated = true;
        }
      });
    
  }

}]);
/////////////////////////////////////////////////////////////////////////////////////////
app.controller("selectedAppointmentController",["$scope","$location","$http","$window","templateService","localManager",
  function($scope,$location,$http,$window,templateService,localManager){

    $scope.sessionInfo = templateService.holdAppointmentData;
   
    $scope.getTreatment = function(){
      var session = {};
      $scope.isToTreat = templateService.isTrue; 
      session.sessionId = $scope.sessionInfo.session_id;
      $http({
        method  : 'POST',
        url     : "/doctor/get-session",
        data    : session,
        headers : {'Content-Type': 'application/json'} 
        })
      .success(function(data) {
        if(data){
        data.patientInfo = templateService.holdAppointmentData;        
        localManager.setValue("heldSessionData",data);
          $window.location.href = "/treatment";
        } else {
          alert("error occurred while trying to get this session")
        }              
      });
    }
}]);



app.controller("inTreatmentController",["$scope","$http","localManager","$location","templateService","ModalService","Drugs",
  function($scope,$http,localManager,$location,templateService,ModalService,Drugs){
  $scope.sessionData = localManager.getValue("heldSessionData");

  

  templateService.holdForSpecificPatient = $scope.sessionData;
  
   $scope.isLab = false;
   $scope.isScan = false;

   $scope.laboratory = function(){
      if($scope.testResult) {
        $scope.testResult = [];        
      }
      investigation("/doctor/get-test-result");      
      $scope.isLab = true;
      $scope.isScan = false;
   } 

   $scope.newLab = function() {
      $location.path('/lab');      
   }

   //for radiology
  $scope.radiology = function(){
    if($scope.testResult) { 
      $scope.testResult = [];
    }
    investigation("/doctor/get-scan-result");
    $scope.isScan = true;
    $scope.isLab = false;
  } 

  $scope.newScan = function() {
    $location.path('/scan');    
  }
  
 function investigation(url)  {
  var session = {}
  session.id = $scope.sessionData.session_id; 
  $http({
      method  : 'PUT',
      url     : url,
      data    : session,
      headers : {'Content-Type': 'application/json'} 
      })
    .success(function(data) {
      if(data.result){               
        $scope.testResult = data.result;
      } else {
        $scope.message = "No test result for this patient";
      }
  });            
 }

 $scope.bookAppointment = function(){
    console.log($scope.sessionData)
    ModalService.showModal({
        templateUrl: 'calender-template.html',
        controller: "appointmentModalController"
    }).then(function(modal) {
        modal.element.modal();
        modal.close.then(function(result) {
           
        });
    });
 }
  

  $scope.sendToScan = function () {
    
    
  }

  $scope.sendToECG = function () {
    
  }

  $scope.otherCheck = function () {
    
  }

  var check = 0;// scope watch count to show save changes button on ui this is bcos newVal is set when the controller is initialized.
  //when count is 2 the watch should display the save changes button on the ui.
  
  $scope.$watch("sessionData.diagnosis",function(newVal,oldVal){
    check++;
    if(check > 1)
      $scope.isChanges = true;
  },true);

  $scope.saveChanges = function () {
    var filter = {}
    for(var i in $scope.sessionData.diagnosis) {
      if($scope.sessionData.diagnosis.hasOwnProperty(i) && typeof $scope.sessionData.diagnosis[i] !== "object") {
        if($scope.sessionData.diagnosis[i] !== "") {
          filter[i] = $scope.sessionData.diagnosis[i];
        } else {
          alert( "Field" + " '" + i + "'" + " cannot be empty")
          return;
        }
      }
    }

    filter.session_id = $scope.sessionData.session_id;
    $http({
      method  : 'PUT',
      url     : "/doctor/session-update/save-changes",
      data    : filter,
      headers : {'Content-Type': 'application/json'} 
      })
    .success(function(data) {
      console.log(data);
      if(data.success)
        alert("Changes saved successfully!!!");
      if(data.error)
        alert("Oops! Error occured. Changes not saved!,Try again");
    });            
  }


  //treatment logic on the ui
  $scope.isPharmacy = false;
  $scope.isSurgery = false;
  $scope.isPhysiotherapy = false;
  $scope.isOther = false;

  
  $scope.pharmacy = function(){
    if($scope.isPharmacy === false) {
      $scope.isPharmacy = true;
    } else {
      $scope.isPharmacy = false;
    }
  }

  $scope.surgery = function(){
    if($scope.isSurgery === false) {
      $scope.isSurgery = true;
    } else {
      $scope.isSurgery = false;
    }
  }

  $scope.physiotherapy = function(){
    if($scope.isPhysiotherapy === false) {
      $scope.isPhysiotherapy = true;
    } else {
      $scope.isPhysiotherapy = false;
    }
  }

  $scope.other = function(){
    if($scope.isOther === false) {
      $scope.isOther = true;
    } else {
      $scope.isOther = false;
    }
  }


  //treatment by pharmaceutical control

  $scope.isNewPrescription = false;
  $scope.isOldPrescription = false;

  var patient = {};

  $scope.writeNew = function() {
    if($scope.isNewPrescription === false) {      
      var random = Math.floor(Math.random() * 99999999999999 );
      patient.id = $scope.sessionData.patient_id;
      $http({
        method  : 'PUT',
        url     : "/doctor/specific-patient",
        data    : patient,
        headers : {'Content-Type': 'application/json'} 
        })
      .success(function(data) {
        $scope.patientInfo = data;        
        patient.prescriptionId = random;
        patient.patient_id = patient.id;    
        patient.firstname = $scope.patientInfo.firstname;
        patient.lastname = $scope.patientInfo.lastname;
        patient.gender = $scope.patientInfo.gender;
        patient.age = $scope.patientInfo.age;
        patient.address = $scope.patientInfo.address;
        patient.city = $scope.patientInfo.city;
        patient.country = $scope.patientInfo.country;
        patient.patient_profile_pic_url = $scope.patientInfo.profile_pic_url;        
        patient.title = $scope.patientInfo.title;
        patient.sender = "doctor";        
      });
      $scope.isNewPrescription = true;
    } else {
      $scope.isNewPrescription = false;
    }
  }

  $scope.viewOld = function() {
    if($scope.isOldPrescription === false) {
      getPatientMedication("/doctor/get-patient/medication");
    } else {
      $scope.isOldPrescription = false;
    }
  }

//view previously writen prescription by this doctor for this patient
  var getPatientMedication = function(url){
    $http({
      method  : 'PUT',
      url     : url,
      data    : patient,
      headers : {'Content-Type': 'application/json'} 
      })
    .success(function(data) {
      console.log(data)      
      var myFoundPrescriptions = [];
      for(var i = data.medications.length-1; i >= 0; i--){
        if(data.medications[i].doctor_id === data.user) {
          myFoundPrescriptions.push(data.medications[i]);
          $scope.wroteByThisDoctor = myFoundPrescriptions;
        }
      }        
    });
    $scope.isOldPrescription = true;
  }

  $scope.drugs = Drugs;
    var drug_name;
    var index;
    $scope.getDrug = function(drugName){
      drug_name = drugName;
      if($scope.drugList.length === 1)
        $scope.drugList[0].drug_name = drugName;
      if( $scope.drugList.length > 1)
        $scope.drugList[index].drug_name = drugName;
    }

    var drug = {};
    var count = {};
    count.num = 1;
    drug.sn = count.num;
    $scope.drugList = [drug]; // this populates the array for the view ng-repeat. this is the prescription body as the doctor writes it.

    $scope.addDrug = function(){  
      var newDrug = {};         
      count.num++;
      newDrug.sn = count.num;
      $scope.drugList.push(newDrug);
      index = $scope.drugList.length - 1;     
      console.log("static")
      console.log($scope.drugList);
      
    }

    $scope.removeDrug = function(){
      if(count.num > 1){
        $scope.drugList.pop(drug);
        count.num--;
        index--;
      }
    }
    var finalBody;
    $scope.$watch("drugList",function(newVal,oldVal){
      console.log("watcherssssssssssssssssss")
      console.log(newVal)
      patient.prescriptionBody = newVal;// adds prescription body to the prescription object as the doctor 
    //prepares to send it to the back end.
    },true)    

    $scope.toPatient = function(){
      //doctor creates the prescription object and sends it the the back end. url is "patient/forwarded-prescription", other informations that
      //comes with the prescription object added to the prescription object on the backend.
      templateService.holdPrescriptionToBeForwarded = patient;
      $http({
        method  : 'PUT',
        url     : "/patient/forwarded-prescription",
        data    : patient,
        headers : {'Content-Type': 'application/json'} 
        })
      .success(function(data) {    
        alert(data);
        $scope.isNewPrescription = false;
      });
      
    }

    $scope.toPharmacy = function(){   
      templateService.holdPrescriptionToBeForwarded = patient;
      $location.path("/search/pharmacy");
      $scope.isNewPrescription = false;
    }


}]);

/**********************Laboratory tests list **********************/

app.controller("labController",["$scope","$location","templateService","labTests",function($scope,$location,templateService,labTests){

var listInfo = labTests.listInfo;


var listInfo2 = labTests.listInfo2;

var listInfo3 = labTests.listInfo3;

var listInfo4 = labTests.listInfo4;

var listInfo5 = labTests.listInfo5;

var listInfo6 = labTests.listInfo6

var listInfo7 = labTests.listInfo7;

  var holdList = {};
  var selectedItemList = [];
  

  $scope.isChemical = true;  

  holdList.listInfo = listInfo;  
  $scope.list = holdList.listInfo;

  $scope.chemical = function(){
    $scope.isChemical = true;
    $scope.isBlood = false;
    $scope.isCytology = false;
    $scope.isHormone = false;
    $scope.isParasitology = false;
    $scope.isMolecular = false;
    $scope.isToxicology = false;

    $scope.list = holdList.listInfo;
  }

  $scope.blood = function(){
    $scope.isChemical = false;
    $scope.isBlood = true;
    $scope.isCytology = false;
    $scope.isHormone = false;
    $scope.isParasitology = false;
    $scope.isMolecular = false;
    $scope.isToxicology = false;

    holdList.listInfo2 = listInfo2;
    $scope.list = holdList.listInfo2;
  }

  $scope.cytology = function(){
    $scope.isChemical = false;
    $scope.isBlood = false;
    $scope.isCytology = true;
    $scope.isHormone = false;
    $scope.isParasitology = false;
    $scope.isMolecular = false;
    $scope.isToxicology = false;

    holdList.listInfo3 = listInfo3;
    $scope.list = holdList.listInfo3;
  }

  $scope.hormone = function(){
    $scope.isChemical = false;
    $scope.isBlood = false;
    $scope.isCytology = false;
    $scope.isHormone = true;
    $scope.isParasitology = false;
    $scope.isMolecular = false;
    $scope.isToxicology = false;

    holdList.listInfo4 = listInfo4;
    $scope.list = holdList.listInfo4;
  }

  $scope.parasitology = function() {
    $scope.isChemical = false;
    $scope.isBlood = false;
    $scope.isCytology = false;
    $scope.isHormone = false;
    $scope.isParasitology = true;
    $scope.isMolecular = false;
    $scope.isToxicology = false;

    holdList.listInfo5 = listInfo5;
    $scope.list = holdList.listInfo5;

  }

  $scope.toxicology = function(){
    $scope.isChemical = false;
    $scope.isBlood = false;
    $scope.isCytology = false;
    $scope.isHormone = false;
    $scope.isParasitology = false;
    $scope.isMolecular = false;
    $scope.isToxicology = true;

    holdList.listInfo6 = listInfo6;
    $scope.list = holdList.listInfo6;
  }

  $scope.molecular = function(){
    $scope.isChemical = false;
    $scope.isBlood = false;
    $scope.isCytology = false;
    $scope.isHormone = false;
    $scope.isParasitology = false;
    $scope.isMolecular = true;
    $scope.isToxicology = false;


    holdList.listInfo7 = listInfo7;
    $scope.list = holdList.listInfo7;
  }
  
  var index = 1;

  $scope.preview = function(){ 
    for(var i in holdList) {
      if(holdList.hasOwnProperty(i)){
        for(var j = 0; j < holdList[i].length; j++){
          if(!holdList[i][j].sn && holdList[i][j].select === true){            
            holdList[i][j].sn = index;
            selectedItemList.push(holdList[i][j]);
            index++;            
          } 
        }
      }
    }

    templateService.holdSelectedLabTest = selectedItemList;
    $location.path("/preview-test"); 
  }

}]);

app.controller("scanController",["$scope","$location","templateService","scanTests",function($scope,$location,templateService,scanTests){

/***********Listing of X-Ray Investigation *******************/   

var listInfo1 = scanTests.listInfo1

/*******Listing of Ultrasonography *************/    

var listInfo2 = scanTests.listInfo2

/********************Listing of Computerized Tomography Scan (C.T. SCAN)  **********************/   


var listInfo3 = scanTests.listInfo3

/************** Listing of ECG  ****************/

var listInfo4 = scanTests.listInfo4

/**************** Listing of MRI  ************/ 

var listInfo5 = scanTests.listInfo5


/***************** Listing of MAMMOGRAM   ********************/

var listInfo6 = scanTests.listInfo6

 var holdList = {};
  var selectedItemList = [];
  

  $scope.isXRay = true;  

  holdList.listInfo = listInfo1;  
  $scope.list = holdList.listInfo;

  $scope.xray = function(){
    $scope.isXRay = true;
    $scope.isUltra = false;
    $scope.isCT = false;
    $scope.isECG = false;
    $scope.isMRI = false;
    $scope.isMammo = false;
    $scope.list = holdList.listInfo;
  }

  $scope.ultra = function(){
    $scope.isXRay = true;
    $scope.isUltra = true;
    $scope.isCT = false;
    $scope.isECG = false;
    $scope.isMRI = false;
    $scope.isMammo = false;

    holdList.listInfo2 = listInfo2;
    $scope.list = holdList.listInfo2;
  }

  $scope.ct = function(){
    $scope.isXRay = true;
    $scope.isUltra = false;
    $scope.isCT = false;
    $scope.isECG = false;
    $scope.isMRI = false;
    $scope.isMammo = false;

    holdList.listInfo3 = listInfo3;
    $scope.list = holdList.listInfo3;
  }

  $scope.ecg = function(){
    $scope.isXRay = false;
    $scope.isUltra = false;
    $scope.isCT = false;
    $scope.isECG = true;
    $scope.isMRI = false;
    $scope.isMammo = false;

    holdList.listInfo4 = listInfo4;
    $scope.list = holdList.listInfo4;
  }

  $scope.mri = function(){
    $scope.isXRay = false;
    $scope.isUltra = false;
    $scope.isCT = false;
    $scope.isECG = false;
    $scope.isMRI = true;
    $scope.isMammo = false;

    holdList.listInfo5 = listInfo5;
    $scope.list = holdList.listInfo5;
  }

  $scope.mammo = function() {
    $scope.isXRay = false;
    $scope.isUltra = false;
    $scope.isCT = false;
    $scope.isECG = false;
    $scope.isMRI = false;
    $scope.isMammo = true;

    holdList.listInfo6 = listInfo6;
    $scope.list = holdList.listInfo6;

  }

  var index = 1;

  $scope.preview = function(){ 
    for(var i in holdList) {
      if(holdList.hasOwnProperty(i)){
        for(var j = 0; j < holdList[i].length; j++){
          if(!holdList[i][j].sn && holdList[i][j].select === true){            
            holdList[i][j].sn = index;
            selectedItemList.push(holdList[i][j]);
            index++;            
          } 
        }
      }
    }

    templateService.holdSelectedLabTest = selectedItemList;
    $location.path("/preview-scan-test"); 
  }

}]);

//this controls the preview lab test xelected by the doctor
app.controller("previewLabTestController",["$scope","localManager","$location","templateService",
  function($scope,localManager,$location,templateService){
  var list = templateService.holdSelectedLabTest;
  $scope.labTest = list;

  var getTotal = {}
  getTotal.total = 0;

  list.forEach(function(item){
    getTotal.total = getTotal.total + item.price;
  })

  $scope.cost = getTotal.total;

  $scope.del = function(sn){
    var elementPos = list.map(function(x) {return x.sn; }).indexOf(sn);             
    var remv = list.splice( elementPos, 1 );
    getTotal.total = getTotal.total - remv[0].price;
    $scope.cost = getTotal.total;   
  }
  
  //doctor search for labortory within is city. by default, doctor gets a laboratory within his city.
  $scope.sendTolab = function(){    
    $location.path("/find-laboratory");
  }
  
}]);

app.controller("previewScanTestController",["$scope","localManager","$location","templateService",
  function($scope,localManager,$location,templateService){
  var list = templateService.holdSelectedLabTest;
  $scope.labTest = list;

  var getTotal = {}
  getTotal.total = 0;

  list.forEach(function(item){
    getTotal.total = getTotal.total + item.price;
  })

  $scope.cost = getTotal.total;

  $scope.del = function(sn){
    var elementPos = list.map(function(x) {return x.sn; }).indexOf(sn);             
    var remv = list.splice( elementPos, 1 );
    getTotal.total = getTotal.total - remv[0].price;
    $scope.cost = getTotal.total;   
  }
  
  //doctor search for labortory within is city. by default, doctor gets a laboratory within his city.
  $scope.sendToScan = function(){    
    $location.path("/find-radiology");
  }

}]);



app.controller("findLabController",["$scope","$http","localManager","$location","templateService",
  function($scope,$http,localManager,$location,templateService){
  $http({
      method  : 'GET',
      url     : "/doctor/find-laboratory",
      headers : {'Content-Type': 'application/json'} 
      })
    .success(function(data) {          
      if(data.length > 0) {
        $scope.isFound = true;
        $scope.labCenters = data;
      } else {        
        $scope.isError = true;
        $scope.message = "Oops! Currently, It seems there are no laboratory center registered within your location. You can search for other locations";
      }
  });

  $scope.laboratory = {};
  $scope.search = function() {    
    $http({
      method  : 'PUT',
      url     : "/doctor/find-laboratory/search",
      data : $scope.laboratory,
      headers : {'Content-Type': 'application/json'} 
      })
    .success(function(data) {
      if(data.length > 0)  {
        $scope.isError = false;
        $scope.isFound = true;             
       $scope.labCenters = data;
      } else {
        $scope.isFound = false;
        $scope.isError = true;
         $scope.message = "Oops! No laboratory center was found based on your search criteria.Try again or check modify your search criteria.";
      }
    });
  }

  $scope.getLab = function(id){     
    var elementPos = $scope.labCenters.map(function(x) {return x.user_id; }).indexOf(id);
    var objectFound = $scope.labCenters[elementPos];          
    templateService.holdTheLaboratoryToFowardTestTo =  objectFound; 

    //use this block below if error occur.

  /*$scope.pharmacyData.forEach(function(center){
    if(center.user_id === id){
      templateService.holdTheCenterToFowardPrescriptionTo = center;
      return;
    }
  });*/     
    $location.path('/selected-laboratory/' + id);
  }

}]);

app.controller("findRadioController",["$scope","$http","localManager","$location","templateService",
  function($scope,$http,localManager,$location,templateService){
  $http({
      method  : 'GET',
      url     : "/doctor/find-radiology",
      headers : {'Content-Type': 'application/json'} 
      })
    .success(function(data) {          
      if(data.length > 0) {
        $scope.isFound = true;
        $scope.labCenters = data;
      } else {        
        $scope.isError = true;
        $scope.message = "Oops! Currently, It seems there are no laboratory center registered within your location. You can search for other locations";
      }
  });

  $scope.radiology = {};
  $scope.search = function() {    
    $http({
      method  : 'PUT',
      url     : "/doctor/find-radiology/search",
      data : $scope.radiology,
      headers : {'Content-Type': 'application/json'} 
      })
    .success(function(data) {
      if(data.length > 0)  {
        $scope.isError = false;
        $scope.isFound = true;             
        $scope.labCenters = data;
      } else {
        $scope.isFound = false;
        $scope.isError = true;
        $scope.message = "Oops! No laboratory center was found based on your search criteria.Try again or check modify your search criteria.";
      }
    });
  }

  $scope.getRadio = function(id){     
    var elementPos = $scope.labCenters.map(function(x) {return x.user_id; }).indexOf(id);
    var objectFound = $scope.labCenters[elementPos];          
    templateService.holdTheLaboratoryToFowardTestTo =  objectFound; 

    //use this block below if error occur.

  /*$scope.pharmacyData.forEach(function(center){
    if(center.user_id === id){
      templateService.holdTheCenterToFowardPrescriptionTo = center;
      return;
    }
  });*/     
    $location.path('/selected-radiology/' + id);
  }

}]);



app.controller("selectedLabController",["$scope","$http","localManager","$location","templateService",
  function($scope,$http,localManager,$location,templateService){
  $scope.placeHolder = true;
  $scope.labCenter = templateService.holdTheLaboratoryToFowardTestTo;

  $scope.isEnquiry = function(){
    $scope.isContactFirst = true;
  } 

   
  
  $scope.sendTest = function () {
    var sendObj = {};
    var date = new Date();
    console.log(templateService.holdForSpecificPatient)
    //create patient object to be sent alongside the lab test to run.
    sendObj.patient_id = templateService.holdForSpecificPatient.patient_id;
    sendObj.user_id = $scope.labCenter.user_id;
    sendObj.lab_test_list = templateService.holdSelectedLabTest;
    sendObj.patient_firstname = templateService.holdForSpecificPatient.patientInfo.firstname;
    sendObj.patient_lastname = templateService.holdForSpecificPatient.patientInfo.lastname;
    sendObj.patient_profilePic = templateService.holdForSpecificPatient.patientInfo.profilePic;
    sendObj.patient_title = templateService.holdForSpecificPatient.patientInfo.title;
    sendObj.session_id = templateService.holdForSpecificPatient.session_id;
    sendObj.date = date;
    //sending lab test to a selected lab center to the backend for storage;
   
    $http({
      method  : 'POST',
      url     : "/doctor/send-test",
      data    : sendObj,
      headers : {'Content-Type': 'application/json'} 
      })
    .success(function(data) {
      console.log(data)
      if(data.success){
        $scope.success = true;
        $scope.placeHolder = false;
        $scope.ref_number = data.ref_no;
        $scope.message = "Test has been forwrded"
      } else {
        $scope.message = "Error occured wihile sending the Lab test. Try again.";
      }
    });
  }

}]);

app.controller("selectedRadioController",["$scope","$http","localManager","$location","templateService",
  function($scope,$http,localManager,$location,templateService){
    $scope.placeHolder = true;
  $scope.labCenter = templateService.holdTheLaboratoryToFowardTestTo;

  $scope.isEnquiry = function(){
    $scope.isContactFirst = true;
  } 

   
  
  $scope.sendTest = function () {
    var sendObj = {};
    var date = new Date();
    console.log(templateService.holdForSpecificPatient)
    //create patient object to be sent alongside the lab test to run.
    sendObj.patient_id = templateService.holdForSpecificPatient.patient_id;
    sendObj.user_id = $scope.labCenter.user_id;
    sendObj.lab_test_list = templateService.holdSelectedLabTest;
    sendObj.patient_firstname = templateService.holdForSpecificPatient.patientInfo.firstname;
    sendObj.patient_lastname = templateService.holdForSpecificPatient.patientInfo.lastname;
    sendObj.patient_profilePic = templateService.holdForSpecificPatient.patientInfo.profilePic;
    sendObj.patient_title = templateService.holdForSpecificPatient.patientInfo.title;
    sendObj.session_id = templateService.holdForSpecificPatient.session_id;
    sendObj.date = date;
    //sending lab test to a selected lab center to the backend for storage;
    $http({
      method  : 'POST',
      url     : "/doctor/radiology/send-test",
      data    : sendObj,
      headers : {'Content-Type': 'application/json'} 
      })
    .success(function(data) {
      console.log(data)
      if(data.success){
        $scope.success = true;
        $scope.placeHolder = false;
        $scope.ref_number = data.ref_no;
        $scope.message = "Test has been forwrded"
      } else {
        $scope.message = "Error occured wihile sending the Lab test. Try again.";
      }
    });
  }
}]);


//after a selected patient is clicked to be view this controller is connected waiting for the doctor to accept to run its modal 
//and pass some data like the doctor's firstname.
app.controller("requestController",["$scope","ModalService","requestManager","templateService",function($scope,ModalService,requestManager,templateService){
  $scope.data = requestManager.get();
  $scope.docName = templateService.getfirstname;

  $scope.accept = function(){   
      ModalService.showModal({
          templateUrl: 'granted-request.html',
          controller: "grantedRequestController"
      }).then(function(modal) {
          modal.element.modal();
          modal.close.then(function(result) {
             
      });
    });
   
  }
}]);


// inside the above modal doctor compiles acceptance object and send to paitent
app.controller("grantedRequestController",["$scope","$http","ModalService","requestManager","templateService",function($scope,$http,ModalService,requestManager,templateService){
  $scope.data = requestManager.get();
  $scope.docName = templateService.getfirstname;
  $scope.docName2 = templateService.getlastname;
  $scope.user = {};
  $scope.user.fee = 0.00;

  $scope.$watch('user.fee',function(){
    $scope.total = $scope.user.fee  + 5;
  });  
  
  $scope.sendAcceptance = function(){
    if($scope.user.fee > 0){
    var grantedRequest = {};
    grantedRequest.patientId = $scope.data.sender_id;
    grantedRequest.date = new Date;
    grantedRequest.doctor_id = templateService.getid;
    grantedRequest.doctor_firstname = $scope.docName;
    grantedRequest.doctor_lastname = templateService.getlastname;
    grantedRequest.consultation_fee = $scope.total;
    grantedRequest.doctor_profile_pic_url = templateService.getpic;
    grantedRequest.service_access = false;
    grantedRequest.doctor_specialty = templateService.getspecialty;

    $http({
        method  : 'PUT',
        url     : "/doctor/acceptance",
        data : grantedRequest,
        headers : {'Content-Type': 'application/json'} 
        })
      .success(function(data) {              
        
      });

    console.log(grantedRequest)
    } else {
      $scope.message = "please enter your consultation fee amount below"
    }
  }
}]);

/**** for patients ***/

//runs first when patient first logged in
app.controller("inPatientDashboardController",["$scope","$location","templateService","localManager",function($scope,$location,templateService,localManager){

  $location.path(localManager.getValue("currentPageForPatients") || "/patient-dashboard");  
  

}]);

////////////////////////////////////////////////////////////////////////////////////
//controller passes data from the page to angular. data from the patient notification box to be used within angular.
app.controller('patientWelcomeController',["$scope",function($scope){

}]);


// this controller gets  the patient medical records from the backend and seperates laboratory tsest from radiology test 
//to store then templateService. Note patient prescription  is not amonge the data filtered so far.
app.controller("patientNotificationController",["$scope","$location","$http","$window","templateService","localManager",
  function($scope,$location,$http, $window,templateService,localManager){  
  var filter = {};
  $scope.getPatientId = function(id,firstname,lastname){
    var tostr = id.toString();

    var comObj = {
      callerId: tostr,
      firstname: firstname,
      lastname: lastname
    }
    
    templateService.holdPatientIdForCommunication = comObj;
    
  }

  $http({
    method  : 'GET',
    url     : "/patient-panel/get-medical-record",
    headers : {'Content-Type': 'application/json'} 
    })
  .success(function(data) {
    if(data){      
      templateService.holdAllLabTest = data.medical_records.laboratory_test;
      templateService.holdAllRadioTest = data.medical_records.radiology_test;     
      
      // this fns checks the list to see if any test is pending for both laboratory and radiology
      checkIsLabPending(data.medical_records.laboratory_test);
      checkIsRadioPending(data.medical_records.radiology_test);
    }  

  });

  var checkIsLabPending = function (list) {
    var pendingLab = [];      
    for(var test = 0; test < list.length; test++) {
      if(list[test].conclusion === "Pending" || list[test].report === "Pending") {
        pendingLab.unshift(list[test]);
      }
    }

    if(pendingLab.length > 0) {
      $scope.isLabP = true;
      $scope.labLenPending = pendingLab.length;
      templateService.pendingLab = pendingLab;
    }
  }

  var checkIsRadioPending = function (list) {
    var pendingScan = [];      
    for(var test = 0; test < list.length; test++) {
      if(list[test].conclusion === "Pending" || list[test].report === "Pending") {
        pendingScan.unshift(list[test]);
      }
    }

    if(pendingScan.length > 0) { 
      $scope.isScanP = true;
      $scope.scanLenPending = pendingScan.length;
      templateService.pendingScan = pendingScan;
    }
  }


  //
  

  $scope.getData = function(firstname,lastname,date,pic,fee,patientName,wallet_amount,doc_id,service_access,specialty,message){
     if(!filter.hasOwnProperty(filter[date])){
        filter[date] = date;
         var values = {};   
         values.getRealDate = date;
         values.getfirstname = firstname;
         values.getLastname = lastname;
         values.getFee = fee;
         values.getpic = pic;
         values.patientName = patientName;
         values.wallet = wallet_amount;
         values.doctorId = doc_id;
         values.service_access = service_access;
         values.getSpecialty = specialty;
         values.getMessage = message;
         templateService.holdAllNotification.push(values);

     }
   }

   $scope.convertDate = function(date){
     templateService.getRealDate = date;
     $scope.realDate = templateService.getRealDate;
   } 

  $scope.logout = function () {
    localManager.removeItem("userInfo");
    localManager.removeItem("currentPage");
    localManager.removeItem("currentPageForPatients");
    localManager.removeItem("receiver");
    localManager.removeItem('caller');
    localManager.removeItem("doctorInfoforCommunication")
    localManager.removeItem("patientInfoforCommunication");
    localManager.removeItem("resolveUser");
    localManager.removeItem("patientPrescriptions");
    localManager.removeItem("holdPrescriptionId");
    localManager.removeItem("patientTests");    
     $http({
        method  : 'GET',
        url     : "/user/logout",
        headers : {'Content-Type': 'application/json'} 
        })
      .success(function(data) {
        $scope.userData = data;
        $window.location.href = '/';

     });
  }

  $scope.viewNote = function(id){
    templateService.holdId = id;
    $location.path("/granted-request/" + id);
  }

  $scope.viewLabPending = function () {
    $location.path("/pending/lab-test")
  }

  $scope.viewRadioPending = function () {
    $location.path("/pending/scan-test")
  }

}]);

app.controller("pendingLabTestController",["$scope","templateService","$window","localManager",function($scope,templateService,$window,localManager){
  $scope.type = "Pending laboratory test(s)";  
  console.log(templateService.pendingLab);
  $scope.pendingTest = templateService.pendingLab;
    

  var page = "/pending/lab-test";
  $scope.makeVideoCall = function (receiverId,center_name,patienId) {
    localManager.setValue("receiver",receiverId);
    localManager.setValue('caller',patienId);
    localManager.setValue("currentPageForPatients",page);
    console.log(receiverId)
    var center = {
      center_name: center_name
    }
    localManager.setValue("doctorInfoforCommunication",center)
    $window.location.href = "/patient/call";
  }

  $scope.liveChat = function (receiverId,center_name,patienId) {
    localManager.setValue("receiver",receiverId);
    localManager.setValue('caller',patienId);
    localManager.setValue("currentPageForPatients",page);
    console.log(receiverId)
    var center = {
      center_name: center_name
    }
    localManager.setValue("doctorInfoforCommunication",center)
    //$window.location.href = "/patient/chat";
  }

}]);

/////handles pending tests list including communications
app.controller("pendingRadioTestController",["$scope","templateService","$window","localManager",function($scope,templateService,$window,localManager){
  $scope.type = "Pending radiology test(s)"
  console.log(templateService.pendingScan);
  $scope.pendingTest = templateService.pendingScan;

  var page = "/pending/scan-test";
  $scope.makeVideoCall = function (receiverId,center_name,patienId) {
    console.log(patienId)
    localManager.setValue("receiver",receiverId);
    localManager.setValue('caller',patienId);
    localManager.setValue("currentPageForPatients",page);
    console.log(receiverId);
    var center = {
      center_name: center_name
    }
    localManager.setValue("doctorInfoforCommunication",center)
    $window.location.href = "/patient/call";
    
    
  }

  $scope.liveChat = function (receiverId,center_name,patienId) {
    localManager.setValue("receiver",receiverId);
    localManager.setValue('caller',patienId);
    localManager.setValue("currentPageForPatients",page);
    console.log(receiverId)
    var center = {
      center_name: center_name
    }
    localManager.setValue("doctorInfoforCommunication",center)
    //$window.location.href = "/patient/chat";
  }

}])

//patient acknowledgee doctors reply and send confirmation to the backend to be save in both doctors box and patient box.
app.controller("patientViewRequestController",["$scope","$location","$http","templateService","ModalService",function($scope,$location,$http,templateService,ModalService){
 var id = templateService.holdId;
 var docObj = {};
 templateService.holdAllNotification.forEach(function(item){  
  if(item.doctorId === id){
    for(var i in item){
      docObj[i] = item[i];
    }
  
  templateService.holdfee = item.getFee;
  templateService.holdwalletAmount = item.wallet;
  }
 });

 $scope.reqInfo = docObj;
 $scope.fundWallet = false;

 if(docObj.getFee === "") {
    showOnlyMsg();
  } else {
    $scope.isRequest = true;
  }

 function showOnlyMsg(){
  $scope.isRequest = false;
  $scope.isPrescription = true;
 }

 $scope.viewPrescriptionFromNoticeTemplate = function () {
    templateService.holdPrescriptionsId = docObj.doctorId;
    $location.path("/patient-prescription/view-from-notification/" + docObj.doctorId);   
 }  
 
 //sents out the doctor to the patient box showing that the patient has accepted the doctor and 
 //the wallet has enough fund to pay for consultation fee

 $scope.accept = function () {
    if(docObj.service_access) {
      walletFunded()
    } else {    
     if(templateService.holdwalletAmount < templateService.holdfee){     
       $scope.fundWallet = true;
        ModalService.showModal({
            templateUrl: 'insuficient-fund.html',
            controller: "insuficientFundController"
        }).then(function(modal) {
            modal.element.modal();
            modal.close.then(function(result) {
              
            });
        });
      } else {
        walletFunded();
      }
    }

    function walletFunded() {
      console.log("already have fund")
      var date = new Date();
      var dateNum = date * 1000;
      var accessObj = {
        doctor_id : docObj.doctorId,
        date_of_acceptance: dateNum,
        doctor_firstname: docObj.getfirstname,
        doctor_lastname: docObj.getLastname,
        doctor_profile_pic_url: docObj.getpic,
        service_access: docObj.service_access,
        doctor_specialty: docObj.getSpecialty
      }
      $http({
        method  : 'PUT',
        url     : "/patient/acceptance",
        data    : accessObj,
        headers : {'Content-Type': 'application/json'} 
        })
      .success(function(data) { 
        if(data)
          $location.path("/patient-doctor/treatment");
      });
    }
 }
}]);


//
app.controller("viewPrescriptionFromNoticeTemplateController",["$scope","$location","$http","templateService",
  function($scope,$location,$http,templateService){
    var container = [];
    var deleteObj = {};
    templateService.holdAllPrescriptionForOtherCtrl.forEach(function(prescription){
      if(prescription.doctor_id === templateService.holdPrescriptionsId) {
        container.unshift(prescription);        
        $scope.prescriptionRecordsResult = container;
        deleteObj.doctor_id = prescription.doctor_id;
        $http({
          method  : 'PUT',
          url     : "/patient/acceptance/prescription",
          data    : deleteObj,
          headers : {'Content-Type': 'application/json'} 
          })
        .success(function(data) { 
          return;
        });
        
      }
    });  
}]);

//in the alerted modal check to see if the patient has enough fund in the wallet before continueing with the transaction.
//gets the patients wallent anount and cpmpares with the doctor's consultation fee billed.
app.controller("insuficientFundController",["$scope","$location","ModalService","requestManager","templateService",function($scope,$location,ModalService,requestManager,templateService){
  $scope.consultationFee = templateService.holdfee;
  $scope.walletAmount = templateService.holdwalletAmount;
}]);

app.controller("walletController",["$scope","ModalService","requestManager","templateService",function($scope,ModalService,requestManager,templateService){
  $scope.viewInvoice = false;
  $scope.viewTransactions = false;

 $scope.invoice = function(){
  $scope.viewInvoice = true;
  $scope.viewTransactions = false;
 }

 $scope.transactions = function(){
  $scope.viewInvoice = false;
  $scope.viewTransactions = true;
 }
}]);



//this controller controls the patient-treatment.html. it brings the docobj and gives patient 
//all utilities available to communicate with his doctor. this template is responsible for all contact and connections b/w doctor and patient.
app.controller("patientTreatmentController",["$scope","$http","ModalService","requestManager","templateService",function($scope,$http,ModalService,requestManager,templateService){
 $scope.user = {};
 $scope.makeCall = false;
 $scope.getToken = function(){
   $http({
        method  : 'GET',
        url     : "/token",
        headers : {'Content-Type': 'application/json'} 
        })
      .success(function(data) {
        if(data.token){              
         console.log('Token response:');
         console.log(data);
         var endpoint = new Twilio.Endpoint(data.token);
         $scope.makeCall = true;
         init(endpoint);
       } else {
         $scope.error = "Could not complete the call"
       }
    });
 }

 function init(endpoint){
  ;

  // Automatically accept any incoming calls
  endpoint.on('invite', function(invitation) {
      invitation.accept().then(showConversation);
  });

  // Start an outbound conversation
  $scope.call = function() {
      endpoint.createConversation($scope.user.your_email)
          .then(showConversation);
  }

  // Listen for incoming calls
  endpoint.listen();
 }

 function showConversation(conversation) {
    // Attach to DOM
    conversation.localMedia.attach($scope.me);

    // Listen for participants
    conversation.on('participantConnected', function(participant) {
        participant.media.attach($scope.you);
    });
  }
      
}]);


//recieves the patients medical record and presvription from the back end.
app.controller("patientPanelController",["$scope","$location","$http","localManager","templateService",
  function($scope,$location,$http,localManager,templateService){

  var medical = {};  

  $http({
    method  : 'GET',
    url     : "/patient-panel/get-medical-record",
    headers : {'Content-Type': 'application/json'} 
    })
  .success(function(data) {
    if(data){
      var filter = {};
      var total = {};
      var filteredPrescriptions = [];
      medical.records = data.medical_records;
      medical.prescriptions = data.prescriptions;        
      templateService.holdAllPrescriptionForOtherCtrl = data.prescriptions;
      localManager.setValue("patientPrescriptions",data.prescriptions)
      templateService.holdPrescriptions = medical.prescriptions; 
      medical.prescriptions.forEach(function(prescription){        
        if(!filter.hasOwnProperty(prescription.doctor_id)){                        
          total[prescription.doctor_id] = [];          
          total[prescription.doctor_id].push(prescription);          
          filter[prescription.doctor_id] = 1;             
        } else {
          total[prescription.doctor_id].push(prescription)
        }
      });

      for(var i in total) {
        var finalFilter = {};
        if(total.hasOwnProperty(i)) {          
          total[i].forEach(function(prescription){
            if(!finalFilter.hasOwnProperty(prescription.doctor_id)){ 
              prescription.count = total[i].length
              filteredPrescriptions.push(prescription);
              finalFilter[prescription.doctor_id] = 1;
            }
          })
          
        }
      }
      $scope.filteredPrescriptions = filteredPrescriptions;
      localManager.setValue("holdPrescriptionData",medical.prescriptions)
    }

  });

  

  $scope.dashboardhome = function () {
    $location.path("/patient-dashboard");
  }

  $scope.viewTreatment = function (id) {
    if(id === undefined) {
      templateService.holdMedicalRecord = medical.records;
      $location.path('/medical-record');
    } else {
      var foundRecord = [];
      medical.records.forEach(function(record){
        if(id === record.patient_id) {
          foundRecord.push(record);
          return;          
        }
      });
      templateService.holdMedicalRecord = foundRecord;
      $location.path("/medical-record");
    }
  }  

  $scope.viewPrescription = function (id) {
    localManager.setValue("currentPageForPatients","/patient-prescriptions");     
    if(id === undefined){
      templateService.holdPrescriptions = medical.prescriptions;      
      $location.path("/patient-prescriptions");
    } else {
      var foundRecord = [];
      var toStr = id.toString();     
      medical.prescriptions.forEach(function(record){
        if(toStr === record.doctor_id) {          
          foundRecord.push(record);       
        }
      });
      templateService.holdPrescriptions = foundRecord;  
      $location.path("/patient-prescriptions/" + id);
    }
   
  }

  $scope.viewLabTest = function () {
    localManager.setValue("currentPageForPatients","/patient/laboratory-test");
    $location.path("/patient/laboratory-test")
  }

  $scope.viewScanTest = function () {
    localManager.setValue("currentPageForPatients","/patient/radiology-test");
    $location.path("/patient/radiology-test");
  }

  $scope.viewAppointment = function(sessionId){

    var session = {
      id: sessionId
    }

    $http({
        method  : 'PUT',
        url     : "/patient/appointment/view",
        data    : session,
        headers : {'Content-Type': 'application/json'} 
        })
      .success(function(data) {
        console.log(data)               
        templateService.holdAppointmentData = data;
        $location.path("/p/selected-appointment/" + sessionId);     
    });
  
  }
  
}]);

app.controller("selectedAppointmentControllerForPatient",["$scope","$location","templateService","localManager",
  function($scope,$location,templateService,localManager){

    $scope.appointment = templateService.holdAppointmentData
    
}]);

app.controller("patientLabTestController",["$scope","$location","$http","$window","templateService","localManager",function($scope,$location,$http,
  $window,templateService,localManager){ 

  $scope.labTest= templateService.holdAllLabTest;
  localManager.setValue("patientTests",$scope.labTest);

  $scope.makeVideoCall = function (receiverId,center_name,patienId) {
    localManager.setValue("receiver",receiverId);
    localManager.setValue('caller',patienId);
    localManager.setValue("currentPageForPatients","/patient/laboratory-test");
    var center = {
      center_name: center_name
    }
    localManager.setValue("doctorInfoforCommunication",center)
    $window.location.href = "/patient/call";
  }

  $scope.liveChat = function (receiverId,center_name,patienId) {
    localManager.setValue("receiver",receiverId);
    localManager.setValue('caller',patienId);
    localManager.setValue("currentPageForPatients","/patient/laboratory-test");
    var center = {
      center_name: center_name
    }
    localManager.setValue("doctorInfoforCommunication",center)
    //$window.location.href = "/patient/chat";
  }

  $scope.sendDocTest = function(testObj) {
    testObj.type = "laboratory";
    templateService.holdTestToBeForwarded = testObj;
    $http({
      method  : 'GET',
      url     : "/patient/my-doctors",        
      headers : {'Content-Type': 'application/json'} 
      })
    .success(function(data) {
      if(data.accepted_doctors.length > 0) {
        templateService.holdMyDoctorsForSendingTest = data.accepted_doctors;
        $location.path("/patient/my-doctors");
      } else {
        alert("Sorry, you have no doctors in your list to send this test to.")
      }
    });
    
  }

  $scope.downloadTest = function(testObj) {
    console.log(testObj);
  }

  $scope.forwardTest = function(testObj) {
    
    templateService.holdTestToBeForwarded = testObj;
  } 
    
  //this fn is invoked when a patient wish to delete a prescription.
  $scope.deleteTest = function (id) {
    for(var i = 0; i < $scope.labTest.length; i++){
      if($scope.labTest[i].ref_id === id){
        $scope.labTest.splice(i,1);
      }
    }
  }


    
  //copy to clipboard

  $scope.supported = false;

  $scope.copy = "Copy Ref NO";

  $scope.success = function (id) {
    $scope.copy = id + ' Copied!';
  };

  $scope.fail = function (err) {
    console.error('Error!', err);
  };

}]);

app.controller("patientRadioTestController",["$scope","$location","$http","$window","templateService","localManager",
  function($scope,$location,$http,$window,templateService,localManager){
  $scope.labTest= templateService.holdAllRadioTest;
  localManager.setValue("patientTests",$scope.labTest);

  $scope.makeVideoCall = function (receiverId,center_name,patienId) {
    localManager.setValue("receiver",receiverId);
    localManager.setValue('caller',patienId);
    localManager.setValue("currentPageForPatients","/patient/radiology-test");
    var center = {
      center_name: center_name
    }
    localManager.setValue("doctorInfoforCommunication",center)
    $window.location.href = "/patient/call";
  }

  $scope.liveChat = function (receiverId,center_name,patienId) {
    localManager.setValue("receiver",receiverId);
    localManager.setValue('caller',patienId);
    localManager.setValue("currentPageForPatients","/patient/radiology-test");
    var center = {
      center_name: center_name
    }
    localManager.setValue("doctorInfoforCommunication",center)
    //$window.location.href = "/patient/chat";
  }

  $scope.sendDocTest = function(testObj) {
    testObj.type = "radiology";
    templateService.holdTestToBeForwarded = testObj;
    $http({
      method  : 'GET',
      url     : "/patient/my-doctors",        
      headers : {'Content-Type': 'application/json'} 
      })
    .success(function(data) {
      console.log(data);
      if(data.accepted_doctors.length > 0) {
        templateService.holdMyDoctorsForSendingTest = data.accepted_doctors;
        $location.path("/patient/my-doctors");
      } else {
        alert("Sorry, you have no doctors in your list to send this test to.")
      }
    });
  }

  $scope.downloadTest = function(testObj) {
    console.log(testObj);
  }

  $scope.forwardTest = function(testObj) {
    templateService.holdTestToBeForwarded = testObj;
  } 
    
  //this fn is invoked when a patient wish to delete a prescription.
  $scope.deleteTest = function (id) {
    for(var i = 0; i < $scope.labTest.length; i++){
      if($scope.labTest[i].ref_id === id){
        $scope.labTest.splice(i,1);
      }
    }
  }

  //copy to clipboard

  $scope.supported = false;

  $scope.copy = "Copy Ref NO";

  $scope.success = function (id) {
    $scope.copy = id + ' Copied!';
  };

  $scope.fail = function (err) {
    console.error('Error!', err);
  };

}]);

app.controller("chooseDoctorController",["$scope","$location","$http","$window","templateService",function($scope,$location,$http,
  $window,templateService){  
  $scope.doctors = templateService.holdMyDoctorsForSendingTest;

  $scope.selectedDoctor = function(docObj) {
    templateService.holdSelectedDoctorToSendTest = docObj;
    $location.path("/patient/selected-doctor");
  }

}]);

app.controller("selectedDoctorToSendTestController",["$scope","$location","$http","multiData","templateService",
  function($scope,$location,$http,multiData,templateService){

  $scope.test = templateService.holdTestToBeForwarded;
  $scope.doctor = templateService.holdSelectedDoctorToSendTest;

  $scope.noSend = function() {
    $location.path("/patient/my-doctors");
  }

  $scope.send = function() {
    var date = new Date;
    var dataToSend = {
      type_of_test: $scope.test.type,
      doctorId: $scope.doctor.doctor_id,
      center_name: $scope.test.center_name,
      center_address: $scope.test.center_address,
      cente_city: $scope.test.center_city,
      center_country: $scope.test.center_country,
      test_result: $scope.test.test_to_run,
      conclusion: $scope.test.conclusion,
      files: $scope.test.files,
      date_sent: date,
      ref_id: $scope.test.ref_id
    }

    $http({
    method  : 'PUT',
    url     : "/patient/test-result/forward",
    data    : dataToSend,
    headers : {'Content-Type': 'application/json'} 
    })
    .success(function(data) {
      if(data.status) {
        alert("Test rssult sent successfully!!!");
        switch($scope.test.type) {
          case "laboratory":
            $location.path("/patient/laboratory-test");
          break;
          case "radiology":
            $location.path("/patient/radiology-test");
          break;
          default:
          break;
        }
        
      } else {
        alert("Oops! Something went wrong while sending test reusult. Try again...")
      }
    }); 
  }

}]);

//controller runs when patient clicks on the edit profile like on the panel of patient dashboard
app.controller("patientProfileEditController",["$scope","$location","$http","$window","templateService","multiData",function($scope,$location,$http,
  $window,templateService,multiData){  
  //picture controller on patient page
  $scope.$watch("templateService.isUpdated", function() {
    $scope.userData = templateService.changedProfilePic;      
  });
     
  $http({
    method  : 'GET',
    url     : "/profile/getDetails",
    headers : {'Content-Type': 'application/json'} 
    })
  .success(function(data) {
    $scope.userData = data;
  });

  $scope.user = {};
    
 $scope.update = function(){
  $scope.user.type = "picture";
  var uploadUrl = "/user/update";     
   multiData.sendPic(uploadUrl,$scope.user);        
  }
  $scope.updateDetails = function(){
    var uploadUrl = "/patient-profile/update";     
    multiData.sendPic(uploadUrl,$scope.user);  
  }

}]);

app.controller("medicalRecordTemplateController",["$scope","$location","$http","templateService",function($scope,$location,$http,templateService){
  $scope.medicalRecordsResult = templateService.holdMedicalRecord;

}]);



app.controller("prescriptionTemplateController",["$scope","$location","$http","templateService","localManager",
  function($scope,$location,$http,templateService,localManager){
    var prescriptionObjs = [];

    
    var presList = templateService.holdPrescriptions || localManager.getValue("holdPrescriptionData"); 
   
    for(var i = 0; i < presList.length; i++){
      prescriptionObjs.unshift(presList[i]);
    }



    $scope.prescriptionRecordsResult = prescriptionObjs;

    var hasBeenSentTo = {};

    $http({
      method  : 'GET',
      url     : "/patient/get-prescription/track-record",        
      headers : {'Content-Type': 'application/json'} 
      })
    .success(function(data) {
      hasBeenSentTo.trackRecord = data;
    });

    $scope.trackedPrescription = function(id,prescription){   
      var holdRecord = [];
      hasBeenSentTo.trackRecord.forEach(function(record){
        if(record.prescriptionId === id) {
          holdRecord.unshift(record);
        }
      });
      templateService.holdTrackRecord = holdRecord;
      console.log("tracking")
      console.log(holdRecord)
      templateService.holdPrescriptionForTrackRecord = prescription;
      $location.path("/patient/view-prescription-history/" + id);
    }


    $scope.downloadPrescription = function (prescription) {
      console.log(prescription)
    }

    //this fn is invoked when patient wish to forward prescription by himself to a phamarcy.
    $scope.forwardPrescription = function (prescription) {       
      templateService.holdPrescriptionToBeForwarded = prescription;
      templateService.holdPrescriptionToBeForwarded.sender = "patient";          
      $location.path("/search/pharmacy");         
    }
    
    //this fn is invoked when a patient wish to delete a prescription.
    $scope.deletePrescription = function (id) {
      for(var i = 0; i < $scope.prescriptionRecordsResult.length; i++){
        if($scope.prescriptionRecordsResult[i].prescriptionId === id){
          $scope.prescriptionRecordsResult.splice(i,1);
        }
      }
    }

    $scope.courier = function(drug){
      console.log(drug);//attend later;
    }


    $scope.id = {};

    
    //copy to clipboard

    $scope.supported = false;

    $scope.copy = "Copy ID"

    $scope.success = function (id) {
      $scope.copy = id + ' Copied!'
    };

    $scope.fail = function (err) {
      console.error('Error!', err);
    };

}]);

app.controller("trackedPrescriptionController",["$scope","$location","templateService",function($scope,$location,templateService){
  $scope.presInfo = templateService.holdPrescriptionForTrackRecord;
  $scope.trackedPrescription = templateService.holdTrackRecord;

  //this fn is invoked when patient wish to forward prescription by himself to a phamarcy.
  $scope.forwardPrescription = function (prescription) {       
    templateService.holdPrescriptionToBeForwarded = prescription;
    console.log(prescription)
    templateService.holdPrescriptionToBeForwarded.sender = "patient";          
    $location.path("/search/pharmacy");         
  }
}])

//this controls the search for phamarcy template. when a patient wish to forward his prescription to a desired phamarcy.
app.controller("searchForPharmacyController",["$scope","$location","$http","templateService","ModalService",
  function($scope,$location,$http,templateService,ModalService){
  //for phamarcy
  $scope.pharmacy = {};

  $http({
        method  : 'GET',
        url     : "/patient/getAllPharmacy",
        headers : {'Content-Type': 'application/json'} 
        })
      .success(function(data) {        
        $scope.pharmacyData = data;
        console.log(data)        
        $scope.pharmacy.city = data[0].city;
    });
    
    $scope.findPharmacy = function () {
      var searchObj = {};
      for(var i in $scope.pharmacy){
        if($scope.pharmacy.hasOwnProperty(i) && $scope.pharmacy[i] !== ""){
          searchObj[i] = $scope.pharmacy[i];
        }
      }
       searchObj.type = "Pharmacy";
       $http({
        method  : 'PUT',
        url     : "/patient/pharmacy/refined-search", 
        data    : searchObj,
        headers : {'Content-Type': 'application/json'} 
        })
      .success(function(data) {
        $scope.pharmacyData = data;
      });
    }
    //when a desired phamarcy is clicked by the patient this function runs to store that center details to a service which will be use for display
    //in selectedCenterController.
    $scope.forwardPrescriptionTo = function (id) {
      var elementPos = $scope.pharmacyData.map(function(x) {return x.user_id; }).indexOf(id);
      var objectFound = $scope.pharmacyData[elementPos];          
      templateService.holdTheCenterToFowardPrescriptionTo =  objectFound;   

    /*$scope.pharmacyData.forEach(function(center){
      if(center.user_id === id){
        templateService.holdTheCenterToFowardPrescriptionTo = center;
        return;
      }
    }); */     
      $location.path('/patient/selected-center/' + id);
    }

    
}]);

//this controller handles the selected center chosen to forward anything to. including patients prescription.
app.controller("selectedCenterController",["$scope","$location","$http","templateService",function($scope,$location,$http,templateService){
  $scope.centerInfo = templateService.holdTheCenterToFowardPrescriptionTo;

  $scope.isEnquiry = function(){
    $scope.isContactFirst = true;
  }

  $scope.placeHolder = true;

  /*
  * @sendReferral this scope function is basically used by both doctor and patient. It should be use when doctor wants to refer a patient for
  * lab test, scan, prescription. But only used when a patient wants to forward his prescription to his desired phamarcy center.
  * most times, this fn is hit by the patients's doctor as he is the one that shld refer a patient to a diagnostic centers.
  * when the sendReferral is invoked referral object is created based on the type of diagnostic center. Centers are routed separately to their
  * specific url. Note referral object is save on the center's referral schema on the database.
  */

  $scope.sendReferral = function (id,type) {
      //id refers to the user_id of the phamarcy referred to.
      switch (type) {
        case "Pharmacy":
          if(templateService.holdPrescriptionToBeForwarded.sender === "doctor"){
            console.log(templateService.holdPrescriptionToBeForwarded)
            sending(id,type,"/patient/pharmacy/referral");
          } else if (templateService.holdPrescriptionToBeForwarded.sender ==="patient") {
            sending(id,type,"/patient/pharmacy/referral-by-patient");
          } else if(templateService.holdPrescriptionToBeForwarded.sender ==="Pharmacy") {
             sending(id,type,"/patient/pharmacy/referral-by-pharmacy");
          }
        break;

        case "Laboratory":
          sending(id,type,"/patient/laboratory/referral");
        break;

        case "Radiology":
          sending(id,type,"/patient/radiology/referral");
        break;

        default:
        break;
      }      
      
  }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  var sending = function(id,type,url) {      
      if(type === 'Pharmacy'){   
        templateService.holdPrescriptionToBeForwarded.user_id = id; //user_id is the id of the pharmcy patient is forwarding prescription to.               
        
      }      
      $scope.placeHolder = false;
      $scope.sendGif = true;
      $http({
        method  : 'PUT',
        url     : url , 
        data    : templateService.holdPrescriptionToBeForwarded,
        headers : {'Content-Type': 'application/json'} 
        })
      .success(function(data) {
        console.log(data)
        $scope.sendGif = false;
        $scope.message = {};
        $scope.message.ref = data.ref_id;
        if(data.success){
         $scope.message.info = "Prescription sent successfully!!!";
         $scope.success = true;
        } else {          
          $scope.placeHolder = true;
          $scope.message = "Prescription not sent!! Try again.";
        }
      });
  }

}]);

//this controller handles patient's doctors on the right corner of the patient profile page. it locates each doctors details when clicked.
//note this controller is used both by doctors dashboard and patient dashboard.
app.controller("checkingOutDoctorController",["$scope","$location","templateService","localManager",
function($scope,$location,templateService,localManager){


  $scope.userDoctor = function(id){
    var callerId = templateService.holdPatientIdForCommunication;
    localManager.setValue("receiver",id);
    localManager.setValue('caller',callerId); 
    templateService.holdIdForSpecificDoc = id;
    var page = "/patient-doctor/treatment/" + id;
    localManager.setValue("currentPageForPatients",page);
    $location.path("/patient-doctor/treatment/" + id);
     
  }

  $scope.userPatient = function(id){
    var callerId = templateService.holdDoctorIdForCommunication;
    localManager.setValue("receiver",id);
    localManager.setValue('caller',callerId);    
    templateService.holdIdForSpecificPatient = id;
    var page = "/doctor-patient/treatment/" + id;
    localManager.setValue("currentPage",page);
    $location.path("/doctor-patient/treatment/" + id);
  }

}]);

//doctor's id is paased to this controller for ajax call;
app.controller("myDoctorController",["$scope","$location","$http","$window","templateService","localManager",
  function($scope,$location,$http,$window,templateService,localManager){
  var doctor = {};
  var path = localManager.getValue("currentPageForPatients")
  var arr = path.split("/");  
  var user = arr[arr.length-1];
  doctor.id = templateService.holdIdForSpecificDoc || user;
   
   $http({
        method  : 'PUT',
        url     : "/patient/specific-doctor",
        data    : doctor,
        headers : {'Content-Type': 'application/json'} 
        })
      .success(function(data) {
        $scope.docInfo = data;
         var holdData = {
          profilePic: data.profile_pic_url,
          firstname: data.firstname,
          lastname: data.lastname,
          title: 'Dr '
        }
        localManager.setValue("doctorInfoforCommunication", holdData);
        
    });

    $scope.videoRequest = function(){
      $window.location.href = "/patient/call";
    }

    $scope.chatRequest = function(){
      //$window.location.href = "/patient/call";
    }
    
}]);

//similar the mydoctorController
app.controller("myPatientController",["$scope","$http","$location","$window","templateService","localManager","ModalService","Drugs",
  function($scope,$http,$location,$window,templateService,localManager,ModalService,Drugs){
  var patient = {}; //patient obj.
  
  /*
  * the doctor refreshing the dashboard page will still keep the patient on the current view template
  * so the data to populate the template will be generate through ajax call.
  * @localManager.getValue this gets the current url of the current view template from the local storage of the browser.
  * @writePrescription,@viewMedicalHistory,@writeNew all controls the html element on the template
  */ 
  var path = localManager.getValue("currentPage");
  var arr = path.split("/");  
  var user = arr[arr.length-1];
  var random = Math.floor(Math.random() * 999999999999 );
  patient.id = templateService.holdIdForSpecificPatient || user;
   $http({
        method  : 'PUT',
        url     : "/doctor/specific-patient",
        data    : patient,
        headers : {'Content-Type': 'application/json'} 
        })
      .success(function(data) {         
        $scope.patientInfo = data;        
        patient.prescriptionId = random;
        patient.patient_id = patient.id;    
        patient.firstname = $scope.patientInfo.firstname;
        patient.lastname = $scope.patientInfo.lastname;
        patient.gender = $scope.patientInfo.gender;
        patient.age = $scope.patientInfo.age;
        patient.address = $scope.patientInfo.address;
        patient.city = $scope.patientInfo.city;
        patient.country = $scope.patientInfo.country;
        patient.patient_profile_pic_url = $scope.patientInfo.profile_pic_url;
        patient.lab_analysis = $scope.patientInfo.lab_analysis;
        patient.scan_analysis = $scope.patientInfo.scan_analysis;
        patient.provisional_diagnosis = $scope.patientInfo.provisional_diagnosis;
        patient.title = $scope.patientInfo.title;
        patient.sender = "doctor";
        var holdData = {
          profilePic: data.profile_pic_url,
          firstname: data.firstname,
          lastname: data.lastname
        }
        templateService.holdForSpecificPatient = $scope.patientInfo;
        localManager.setValue("patientInfoForCommunication", holdData);
        
    });
     

    var viewed = false;

    
    $scope.makeVideoCall = function(){  
      $window.location.href = "/doctor/call";
    }

    $scope.writePrescription =function(){     
      $scope.isToPrescribe = true;
      $scope.isToSeeRecord = false;
       $scope.isToViewLabPrescriptionReq = false;
      $scope.isToViewRadPrescriptionReq = false;
      $scope.isToViewSession = false;
    }

    $scope.appointment = function(patientObj){
      templateService.holdId = patientObj.user_id; //sets id of the patient for the appointmentModal controller to use.
      //make sure templateSevice is always iniatialize elsewhere.
     console.log(templateService.holdId)
      ModalService.showModal({
          templateUrl: 'calender-template.html',
          controller: "appointmentModalController"
      }).then(function(modal) {
          modal.element.modal();
          modal.close.then(function(result) {
             
          });
      });
    
    }

    $scope.viewPreviousPrescription = function(){         
      if(!viewed) {
        getPatientMedication("/doctor/get-patient/medication");
        $scope.isToViewOldPrescription = true;
        viewed = true;
      } else {        
        $scope.isToViewOldPrescription = false;
        viewed = false;
      }
    }

    $scope.viewMedicalHistory = function(){
      $scope.isToSeeRecord = true;
      $scope.isToPrescribe = false;
       $scope.isToViewLabPrescriptionReq = false;
      $scope.isToViewRadPrescriptionReq = false;
      $scope.isToViewSession = false;
      //getPatientMedication("/doctor/get-patient/medical-record")
    }

    $scope.writeNew = function(){
      if(!viewed) {
        $scope.isNewPrescription = true;
        viewed = true;
      } else {
        $scope.isNewPrescription = false;
        viewed = false;
      }
    }

    var getPatientMedication = function(url){
      $http({
        method  : 'PUT',
        url     : url,
        data    : patient,
        headers : {'Content-Type': 'application/json'} 
        })
      .success(function(data) {      
        var myFoundPrescriptions = [];
        for(var i = data.medications.length-1; i >= 0; i--){
          if(data.medications[i].doctor_id === templateService.getid) {
            myFoundPrescriptions.push(data.medications[i]);
            $scope.wroteByThisDoctor = myFoundPrescriptions;
          }
        }        
      });
    }

    //creates drug object for the ng-repeat on the view.
    $scope.drugs = Drugs;
    var drug_name;
    var index;
    $scope.getDrug = function(drugName){
      drug_name = drugName;
      if($scope.drugList.length === 1)
        $scope.drugList[0].drug_name = drugName;
      if( $scope.drugList.length > 1)
        $scope.drugList[index].drug_name = drugName;
    }

    var drug = {};
    var count = {};
    count.num = 1;
    drug.sn = count.num;
    $scope.drugList = [drug]; // this populates the array for the view ng-repeat. this is the prescription body as the doctor writes it.

    $scope.addDrug = function(){  
      var newDrug = {};         
      count.num++;
      newDrug.sn = count.num;
      $scope.drugList.push(newDrug);
      index = $scope.drugList.length - 1;     
      console.log("static")
      console.log($scope.drugList);
      
    }

    $scope.removeDrug = function(){
      if(count.num > 1){
        $scope.drugList.pop(drug);
        count.num--;
        index--;
      }
    }
    var finalBody;
    $scope.$watch("drugList",function(newVal,oldVal){
      patient.prescriptionBody = newVal;// adds prescription body to the prescription object as the doctor 
    //prepares to send it to the back end.
    },true)    

    
   

    templateService.holdPrescriptionToBeForwarded = patient;
    $scope.toPatient = function(){
      //doctor creates the prescription object and sends it the the back end. url is "patient/forwarded-prescription", other informations that
      //comes with the prescription object added to the prescription object in the backend.
      $http({
        method  : 'PUT',
        url     : "/patient/forwarded-prescription",
        data    : patient,
        headers : {'Content-Type': 'application/json'} 
        })
      .success(function(data) {      
        alert(data.message);
      });
      
    }

    $scope.toPharmacy = function(){
    //doctor creates a prescription object like above but saves it to a service called holdPrescriptionToBeForwarded. which will later be forwarded
    //to the backend after the doctor have searched and found the phamarcy to forward the prescription to.      
      $location.path("/search/pharmacy");
    }


    //other activities
    $scope.viewSession = function () {      
      
      loadSession();
      $scope.isToSeeRecord = false;
      $scope.isToPrescribe = false;
      $scope.isToViewLabPrescriptionReq = false;
      $scope.isToViewRadPrescriptionReq = false;
      $scope.isToViewSession = true;

    }

    $scope.viewTreatmentSession = function (session) {
      console.log(session)
      localManager.setValue("heldSessionData",session);        
      $window.location.href = "/treatment";
    }

    $scope.loadMore = function (){
      loadSession();
    }

    $scope.newSession = function () {

    }

    $scope.createNewSession = function(){
      ModalService.showModal({
          templateUrl: 'quickFillComplaint.html',
          controller: "fromModalSessionController"
      }).then(function(modal) {
          modal.element.modal();
          modal.close.then(function(result) {
             
          });
      });
    }

    $scope.viewLabPrescriptionRequest = function () {
      $scope.isToSeeRecord = false;
      $scope.isToPrescribe = false;
      $scope.isToViewLabPrescriptionReq = true;
      $scope.isToViewRadPrescriptionReq = false;
      $scope.isToViewSession = false;      
    }

    $scope.viewRadioPrescriptionRequest = function () {
      $scope.isToSeeRecord = false;
      $scope.isToPrescribe = false;
      $scope.isToViewLabPrescriptionReq = false;
      $scope.isToViewRadPrescriptionReq = true;
      $scope.isToViewSession = false;
    }

    var sessionList = [];

    function loadSession() {
      $http({
        method  : 'PUT',
        url     : "/doctor/get-patient-sessions",
        data    : patient,
        headers : {'Content-Type': 'application/json'} 
        })
      .success(function(data) {   
        for(var i = 1; i < data.length; i++) {          
          if(sessionList.length >= 10)
            break;
          sessionList.push(data[i]);
        }
        $scope.recentSession = data[0];
        $scope.sessionData = sessionList;
        if(data.length > 0);
          templateService.holdId = data[0].patient_id;
      });
    }


    //this filters the prescriptionb reequest based 0on the type of request whether lab test or radio test ia accompanied with the request
    templateService.labPrescriptionReq = [];
    templateService.radioPrescriptionReq = [];
    
    var theReqList = templateService.holdPrescriptionRequestData || localManager.getValue("prescriptionRequestData");
    var index = 0;
    //this will check to make sure n two thsame request is addedto the list.
    for(var i = 0; i < theReqList.length; i++){
      if(patient.id === theReqList[i].sender_id) {

        if(i > 0) {
          var getId = theReqList[index].ref_id;
          index++;
        }     
        switch(theReqList[i].type_of_test) {
          case "laboratory":
            if(theReqList[i].ref_id !== getId)
              templateService.labPrescriptionReq.push(theReqList[i]);
            break;
          case "radiology":
            if(theReqList[i].ref_id !== getId)
              templateService.radioPrescriptionReq.push(theReqList[i]);
          default:
          break;
        }
      }
    }

    $scope.labPrescriptionReq = templateService.labPrescriptionReq;
    $scope.radioPrescriptionReq = templateService.radioPrescriptionReq;

    var labLen = $scope.labPrescriptionReq.length;
    var radioLen = $scope.radioPrescriptionReq.length;

    $scope.labLen = labLen;
    $scope.radioLen = radioLen;

    //templateService.holdlabLenOfPrescriptionRequest = $scope.labLen;
    //templateService.holdRadioLenOfPrescriptionRequest = $scope.radioLen;

    //for radio prescription request. Accompanied files can be viewed i.e x-ray files.
    $scope.viewFile = function(fileArr,resultList){
      var dataObj = {};
      dataObj.report = resultList;
      dataObj.imagery = fileArr;
      templateService.holdScanImageList = dataObj; //hold the list of urls for the x-ray files.
      ModalService.showModal({
          templateUrl: 'X-ray-view.html',
          controller: "viewXRayFilesController"
      }).then(function(modal) {
          modal.element.modal();
          modal.close.then(function(result) {
             
          });
      });
    }
    //this fuction takes care of the doctor's prescription within the patient test result.
    $scope.prescribe = function(testData){
      templateService.holdPrescriptionTestObj = testData;
      ModalService.showModal({
          templateUrl: 'write-prescription-modal.html',
          controller: "prescriptionModalController"
      }).then(function(modal) {
          modal.element.modal();
          modal.close.then(function(result) {
             
          });
      });
    }


    //delete logic for the prescription request.
    $scope.delete = function(test) {
      var theTest;
      switch(test.type_of_test){
        case "laboratory":
          theTest = $scope.labPrescriptionReq;
          $scope.labLen--;
          break;
        case "radiology":
          theTest = $scope.radioPrescriptionReq;
          $scope.radioLen--;
          break;
        default:
        break;
      }

      //remove prescription request data from local storage.
      var removeFromManager = localManager.getValue("prescriptionRequestData");   
      var elementPos = theTest.map(function(x){return x.ref_id}).indexOf(test.ref_id)
      var testFound =  theTest.splice(elementPos,1);
      var FoundTest = removeFromManager.splice(elementPos,1); 
      
      $http({
        method  : 'DELETE',
        url     : "/doctor/delete-prescriptionReq-test",
        data    : test,
        headers : {'Content-Type': 'application/json'} 
        })
      .success(function(data) { 
      if(data)  
        alert("Test deleted sucessfully!")
      });

    }

}]);

app.controller("appointmentModalController",["$scope","$http","moment","templateService",
  function($scope,$http,moment,templateService){
    
    $scope.day = moment();

    ///////////
    $scope.selected = _removeTime($scope.selected || moment());
    $scope.month = $scope.selected.clone();

    var start = $scope.selected.clone();

    start.date(1);
    _removeTime(start.day(0));

    _buildMonth($scope, start, $scope.month);

    $scope.select = function(day) {
        $scope.selected = day.date;
        $scope.dd = day.date;
    };

    $scope.next = function() {
        var next = $scope.month.clone();
        _removeTime(next.month(next.month()+1).date(1));
        $scope.month.month($scope.month.month()+1);
        _buildMonth($scope, next, $scope.month);
    };

    $scope.previous = function() {
        var previous = $scope.month.clone();
        _removeTime(previous.month(previous.month()-1).date(1));
        $scope.month.month($scope.month.month()-1);
        _buildMonth($scope, previous, $scope.month);
    };
    
  
    
    function _removeTime(date) {
        return date.day(0).hour(0).minute(0).second(0).millisecond(0);
    }

    function _buildMonth(scope, start, month) {
        scope.weeks = [];
        var done = false, date = start.clone(), monthIndex = date.month(), count = 0;
        while (!done) {
            $scope.weeks.push({ days: _buildWeek(date.clone(), month) });
            date.add(1, "w");
            done = count++ > 2 && monthIndex !== date.month();
            monthIndex = date.month();
        }
    }

    function _buildWeek(date, month) {
        var days = [];
        for (var i = 0; i < 7; i++) {
            days.push({
                name: date.format("dd").substring(0, 1),
                number: date.date(),
                isCurrentMonth: date.month() === month.month(),
                isToday: date.isSame(new Date(), "day"),
                date: date
            });
            date = date.clone();
            date.add(1, "d");
        }
        return days;
    }

 $scope.treatment= {};
 $scope.treatment.appointment = {};

    $scope.book = function(){
      var data = templateService.holdForSpecificPatient; 
      var date = new Date();
      $scope.treatment.date = date;
      $scope.treatment.patient_id = data.patient_id || data.user_id;
      $scope.treatment.typeOfSession = "";
      $scope.treatment.appointment.title = "";
      $scope.treatment.appointment.date = $scope.dd._d;

      //this will take care of differrent object populating the data variable.
      if(data.hasOwnProperty("patientInfo")) {
        $scope.treatment.appointment.firstname = data.patientInfo.firstname
        $scope.treatment.appointment.lastname = data.patientInfo.lastname
        $scope.treatment.appointment.profilePic = data.patientInfo.profilePic
        $scope.treatment.session_id = data.session_id;

        $scope.treatment.general_examination = data.diagnosis.general_examination;
        $scope.treatment.systemic_examination = data.diagnosis.systemic_examination;
        $scope.treatment.final_diagnosis = data.diagnosis.final_diagnosis;
        $scope.treatment.presenting_complain = data.diagnosis.presenting_complain;
        $scope.treatment.history_of_presenting_complain = data.diagnosis.history_of_presenting_complain;
        $scope.treatment.past_medical_history  = data.past_medical_history;

        $scope.treatment.social_history = data.diagnosis.social_history;
        $scope.treatment.family_history = data.diagnosis.family_history;
        $scope.treatment.drug_history = data.diagnosis.drug_history;
        $scope.treatment.summary = data.diagnosis.summary;

        $scope.treatment.provisional_diagnosis = data.diagnosis.provisional_diagnosis;
        sendData($scope.treatment,"/doctor/session-update/save-changes","PUT")

      } else {   

        $scope.treatment.appointment.firstname = data.firstname; 
        $scope.treatment.appointment.lastname = data.lastname;        
        $scope.treatment.appointment.profilePic = data.profile_pic_url
        sendData($scope.treatment,"/doctor/patient-session","POST")
      }        
  
      console.log($scope.treatment);
    
    }

    function sendData(data,url,method) {
      $http({
        method  : method,
        url     : url,
        data    : data,
        headers : {'Content-Type': 'application/json'} 
        })
      .success(function(data) {   
        if(data)
          alert("Appointment booked, patient will be notified.")
      });
    }

}]);


//try later
/*app.controller("tryDirectiveController",function($scope){
  $scope.person = {
    name: "obi",
    address: "12 chezoka"
  }
})

app.directive("searchResult",function(){
  return {
    restrict: "AE",
    templateUrl: "/assets/directive/calender-template.html",
    replace: true
  }
})*/

//this controller controls the form filled by the doctor when creating new session for a selected patient above.
app.controller("fromModalSessionController",["$scope","$http","$window","localManager","templateService",
  function($scope,$http,$window,localManager,templateService){
  $scope.patient = {};
  var date = new Date();
  $scope.patient.date = date;      
  $scope.patient.patient_id = templateService.holdId;
  $scope.patient.typeOfSession = "In-person meeting"; 

  $scope.createSession = function () {
    $http({
      method  : 'POST',
      url     : "/doctor/patient-session",
      data    : $scope.patient,
      headers : {'Content-Type': 'application/json'} 
      })
    .success(function(data) {   
      if(data.success === "success") {
        $scope.patient.diagnosis = connectObj;
        $scope.patient.session_id = data.session_id;
        localManager.setValue("heldSessionData",$scope.patient);
        $window.location.href = "/treatment";
      } else {
        alert("Error occured while creating this treatment session")
      }
    });

    var connectObj = {
      presenting_complain: $scope.patient.complain,
      history_of_presenting_complain: $scope.patient.historyOfComplain,
      past_medical_history: $scope.patient.pastMedicalHistory,
      social_history: $scope.patient.socialHistory,
      family_history: $scope.patient.familyHistory,
      drug_history: $scope.patient.drugHistory,
      summary: $scope.patient.summary,
      provisional_diagnosis: $scope.patient.provisionalDiagnosis,
    }

  }

}]);

app.controller("viewXRayFilesController",["$scope","$http","$window","localManager","templateService",
  function($scope,$http,$window,localManager,templateService){ 
    var fileUrl = templateService.holdScanImageList.imagery;
    var files = {};
    files.index = 0
    $scope.image = fileUrl[files.index];
    $scope.report = templateService.holdScanImageList.report;

    $scope.finishNex = true;
    $scope.previous = function() {      
      files.index--;
      if(files.index > 0) {
        $scope.finishPre = true;
        $scope.finishNex = true;
      } else {
        $scope.finishPre = false;
      }
      $scope.image = fileUrl[files.index];
    }

    $scope.next = function() {
      files.index++;
      if(files.index === fileUrl.length - 1) {
        $scope.finishNex = false;
      } else {
        $scope.finishNex = true;
        $scope.finishPre = true;
      }
      $scope.image = fileUrl[files.index];
    }
}]);

app.controller("prescriptionModalController",["$scope","$http","$window","localManager","templateService","$location","$rootScope","Drugs",
  function($scope,$http,$window,localManager,templateService,$location,$rootScope,Drugs) {
    $scope.patient = templateService.holdPrescriptionToBeForwarded;
    $scope.testObj = templateService.holdPrescriptionTestObj;

    //creates drug object for the ng-repeat on the view.
    $scope.drugs = Drugs;
    var drug_name;
    var index;
    $scope.getDrug = function(drugName){
      drug_name = drugName;
      if($scope.drugList.length === 1)
        $scope.drugList[0].drug_name = drugName;
      if( $scope.drugList.length > 1)
        $scope.drugList[index].drug_name = drugName;
    }

    var drug = {};
    var count = {};
    count.num = 1;
    drug.sn = count.num;
    $scope.drugList = [drug]; // this populates the array for the view ng-repeat. this is the prescription body as the doctor writes it.

    $scope.addDrug = function(){  
      var newDrug = {};         
      count.num++;
      newDrug.sn = count.num;
      $scope.drugList.push(newDrug);
      index = $scope.drugList.length - 1;     
      console.log("static")
      console.log($scope.drugList);
      
    }

    $scope.removeDrug = function(){
      if(count.num > 1){
        $scope.drugList.pop(drug);
        count.num--;
        index--;
      }
    }
    var finalBody;
    $scope.$watch("drugList",function(newVal,oldVal){
      $scope.patient.prescriptionBody = newVal;// adds prescription body to the prescription object as the doctor 
    //prepares to send it to the back end.
    },true)    

    // adds prescription body to the prescription object as the doctor 
    //prepares to send it to the back end.

    $scope.patient.ref_id = $scope.testObj.ref_id;

    
    if($scope.testObj.type_of_test === "laboratory") {
      $scope.patient.lab_analysis = $scope.testObj.conclusion;
    } else if($scope.testObj.type_of_test === "radiology") {
      $scope.patient.scan_analysis = $scope.testObj.conclusion;
    }

    $scope.toPatient = function(){
      //doctor creates the prescription object and sends it the the back end. url is "patient/forwarded-prescription", other informations that
      //comes with the prescription object added to the prescription object in the backend.
      $http({
        method  : 'PUT',
        url     : "/patient/forwarded-prescription",
        data    : $scope.patient,
        headers : {'Content-Type': 'application/json'} 
        })
      .success(function(data) {      
        console.log(data);
        alert(data.message);
        updateTheTestSent(data.ref_id,data.name,data.address,data.city,data.country,"patient")
      });      
    }

   
    $scope.isToPrescribe = true;

    $scope.toPharmacy = function(){
      $scope.pharmacy = {};

      $http({
            method  : 'GET',
            url     : "/patient/getAllPharmacy",
            headers : {'Content-Type': 'application/json'} 
            })
          .success(function(data) {        
            $scope.pharmacyData = data;
            console.log(data)        
            $scope.pharmacy.city = data[0].city;
        });
        
        $scope.findPharmacy = function () {
          var searchObj = {};
          for(var i in $scope.pharmacy){
            if($scope.pharmacy.hasOwnProperty(i) && $scope.pharmacy[i] !== ""){
              searchObj[i] = $scope.pharmacy[i];
            }
          }
           searchObj.type = "Pharmacy";
           $http({
            method  : 'PUT',
            url     : "/patient/pharmacy/refined-search", 
            data    : searchObj,
            headers : {'Content-Type': 'application/json'} 
            })
          .success(function(data) {
            $scope.pharmacyData = data;
          });
        }

        $scope.isToPrescribe = false;
        $scope.isFindPharmacy = true;

      //doctor creates a prescription object like above but saves it to a service called holdPrescriptionToBeForwarded. which will later be forwarded
    //to the backend after the doctor have searched and found the phamarcy to forward the prescription to.      
      //$location.path("/search/pharmacy");
    }

    $scope.forwardPrescriptionTo = function(id){
      var elementPos = $scope.pharmacyData.map(function(x) {return x.user_id; }).indexOf(id);
      var objectFound = $scope.pharmacyData[elementPos];          
      $scope.centerInfo =  objectFound;

      
      $scope.isEnquiry = function(){
        $scope.isContactFirst = true;
      }

      $scope.placeHolder = true;

      /*
      * @sendReferral this scope function is basically used by both doctor and patient. It should be use when doctor wants to refer a patient for
      * lab test, scan, prescription. But only used when a patient wants to forward his prescription to his desired phamarcy center.
      * most times, this fn is hit by the patients's doctor as he is the one that shld refer a patient to a diagnostic centers.
      * when the sendReferral is invoked referral object is created based on the type of diagnostic center. Centers are routed separately to their
      * specific url. Note referral object is save on the center's referral schema on the database.
      */

      $scope.sendReferral = function (id,type) {
          //id refers to the user_id of the phamarcy referred to.
          sending(id,type,"/patient/pharmacy/referral");
          
      }
       var sending = function(id,type,url) {      
        if(type === 'Pharmacy'){   
          templateService.holdPrescriptionToBeForwarded.user_id = id; //user_id is the id of the pharmcy patient is forwarding prescription to.               
          
        }      
        $scope.placeHolder = false;
        $scope.sendGif = true;
        $http({
          method  : 'PUT',
          url     : url , 
          data    : templateService.holdPrescriptionToBeForwarded,
          headers : {'Content-Type': 'application/json'} 
          })
        .success(function(data) {         
          $scope.sendGif = false;
          $scope.message = {};
          $scope.message.ref = data.ref_id;
          if(data.success){
           $scope.message.info = "Prescription sent successfully!!!";
           $scope.success = true;
           updateTheTestSent(data.ref_id,data.name,data.address,data.city,data.country);
          } else {          
            $scope.placeHolder = true;
            $scope.message = "Prescription not sent!! Try again.";
          }
        });
      }   


      $scope.isToPrescribe = false;
      $scope.isFindPharmacy = false;
      $scope.isCenter = true;

      
    }


      $scope.back = function(state) {
        switch(state){
          case "find":
          $scope.isToPrescribe = true;
          $scope.isFindPharmacy = false;
          $scope.isCenter = false;
          break;

          case "center":
          $scope.isToPrescribe = false;
          $scope.isFindPharmacy = true;
          $scope.isCenter = false;
          break;

          default:
          break;
        }
      }

      var updateTheTestSent = function(id,name,address,city,country,receiver) {
        console.log(receiver)
        var theTest;
        switch($scope.testObj.type_of_test){
          case "laboratory":
            theTest = templateService.labPrescriptionReq;
          break;
          case "radiology":
           theTest = templateService.radioPrescriptionReq
           break;
          default:
           break;
        }
        var elementPos = theTest.map(function(x){return x.ref_id}).indexOf(id);
        var objectFound = theTest[elementPos];        
        var date = Math.floor(Date.now());
        if(receiver === "patient") {
          var attended = {
            patient: "This patient",            
            date_sent: date
          }
        } else {    
          var attended = {
            name: name,
            city: city,
            address: address,
            country: country,
            date_sent: date
          }
        }
        if(!objectFound.attended)
          objectFound.attended = [];


        objectFound.attended.push(attended);
        localManager.setValue("attended", objectFound.attended);

        $scope.theAttended = localManager.getValue("attended");
        console.log($scope.theAttended)
      }

}]);

app.controller("communicationDoctorController",["$scope","localManager",function($scope,localManager){
  $scope.getinfo = localManager.getValue("patientInfoForCommunication");
}]);

app.controller("communicationPatientController",["$scope","localManager",function($scope,localManager){
  $scope.getinfo = localManager.getValue('doctorInfoforCommunication'); 
}]);

app.controller("VideoDiagnosisController",["$scope","$location","$window","$http","localManager","templateService","Drugs",
  function($scope,$location,$window,$http,localManager,templateService,Drugs){
  $scope.treatment = {};
  var patient = {};  

  var random = Math.floor(Math.random() * 999999999999 );
  patient.id = localManager.getValue('receiver');
   $http({
        method  : 'PUT',
        url     : "/doctor/specific-patient",
        data    : patient,
        headers : {'Content-Type': 'application/json'} 
        })
      .success(function(data) { 
        $scope.patientInfo = data;
        patient.prescriptionId = random;
        patient.patient_id = patient.id;    
        patient.firstname = $scope.patientInfo.firstname;
        patient.lastname = $scope.patientInfo.lastname;
        patient.gender = $scope.patientInfo.gender;
        patient.age = $scope.patientInfo.age;
        patient.address = $scope.patientInfo.address;
        patient.city = $scope.patientInfo.city;
        patient.country = $scope.patientInfo.country;
        patient.patient_profile_pic_url = $scope.patientInfo.profile_pic_url;
        patient.lab_analysis = $scope.patientInfo.lab_analysis;
        patient.scan_analysis = $scope.patientInfo.scan_analysis;
        patient.allergy = $scope.patientInfo.allergy;
        patient.title = $scope.patientInfo.title;
        patient.sender = "doctor";
    });
     

  var viewed = false;

  $scope.writePrescription = function(){

      if(!viewed) {
        $scope.isNewPrescription = true;
        $scope.findPharmacy = false;
        viewed = true;
      } else {
        $scope.isNewPrescription = false;
        viewed = false;
      }
  }

    

    //creates drug object for the ng-repeat on the view.
    $scope.drugs = Drugs;
    var drug_name;
    var index;
    $scope.getDrug = function(drugName){
      drug_name = drugName;
      if($scope.drugList.length === 1)
        $scope.drugList[0].drug_name = drugName;
      if( $scope.drugList.length > 1)
        $scope.drugList[index].drug_name = drugName;
    }

    var drug = {};
    var count = {};
    count.num = 1;
    drug.sn = count.num;
    $scope.drugList = [drug]; // this populates the array for the view ng-repeat. this is the prescription body as the doctor writes it.

    $scope.addDrug = function(){  
      var newDrug = {};         
      count.num++;
      newDrug.sn = count.num;
      $scope.drugList.push(newDrug);
      index = $scope.drugList.length - 1;     
      console.log("static")
      console.log($scope.drugList);
      
    }

    $scope.removeDrug = function(){
      if(count.num > 1){
        $scope.drugList.pop(drug);
        count.num--;
        index--;
      }
    }
    var finalBody;
    $scope.$watch("drugList",function(newVal,oldVal){
      patient.prescriptionBody = newVal;// adds prescription body to the prescription object as the doctor 
    //prepares to send it to the back end.
    },true);  


    $scope.toPatient = function(){
      //doctor creates the prescription object and sends it the the back end. url is "patient/forwarded-prescription", other informations that
      //comes with the prescription object added to the prescription object in the backend.
      templateService.holdPrescriptionToBeForwarded = patient;
      $http({
        method  : 'PUT',
        url     : "/patient/forwarded-prescription",
        data    : patient,
        headers : {'Content-Type': 'application/json'} 
        })
      .success(function(data) {      
        console.log(data);
        alert(data);
      });
      
    }

    $scope.toPharmacy = function(){     
       $scope.treatment.prescription_id = patient.prescriptionId; // id to identify prescription in a session if one is written.
       $scope.treatment.patient_id = patient.id;
       $scope.treatment.typeOfSession = "video chat";
       $http({
        method  : 'POST',
        url     : "/doctor/patient-session",
        data    : $scope.treatment,
        headers : {'Content-Type': 'application/json'} 
        })
      .success(function(data) {
        if(data)   
          alert("session created!!");
      });

      templateService.holdPrescriptionToBeForwarded = patient;
      $location.path("/search/pharmacy");
    }

    $scope.isAppointment = false;
    $scope.submitSession = function(){
      if($scope.isAppointment === false){
        $scope.isAppointment = true;
        viewed = true;
        var date = new Date();
        $scope.treatment.date = date;      
        $scope.treatment.patient_id = patient.id;
        $scope.treatment.typeOfSession = "video chat";      
        $scope.treatment.appointment = {};
        $scope.bookAppointment = function(){          
          $scope.treatment.appointment.firstname = patient.firstname;
          $scope.treatment.appointment.lastname = patient.lastname;
          $scope.treatment.appointment.title = patient.title;
          $scope.treatment.appointment.profilePic = patient.patient_profile_pic_url;
          $http({
            method  : 'POST',
            url     : "/doctor/patient-session",
            data    : $scope.treatment,
            headers : {'Content-Type': 'application/json'} 
            })
          .success(function(data) {
            if(data)   
              alert("session created!!");
          });
        }
      } else {
        $scope.isAppointment = false;
      }
    }


  
}]);

app.controller("callController",["$scope",function($scope){

}]);


//for phamarcists
app.controller("pharmacyCenterDashboardController",["$scope","$location","templateService","localManager",
  function($scope,$location,templateService,localManager){
    var currPage = localManager.getValue("currPageForPharmacy");
    if(currPage) {
     $location.path(localManager.getValue("currPageForPharmacy"));
    } else {
      $location.path("/referred-patients");
    }
    $scope.attendanceList = templateService.holdList; 
}]);

app.controller("pharmacyCenterNotificationController",["$scope","$location","$http","$window","templateService","localManager",function($scope,$location,$http,
  $window,templateService,localManager){

  $http({
      method  : 'GET',
      url     : "/pharmacy/get-referral",      
      headers : {'Content-Type': 'application/json'} 
      })
    .success(function(data) {
      templateService.holdPharmacyReferralData = data.referral;
      localManager.setValue("pharmacyData",data.referral);
  }); 

  $scope.logout = function () {
    localManager.removeItem("userInfo");
    localManager.removeItem("currentPage");
    localManager.removeItem("currentPageForPatients");
    localManager.removeItem("currPageForPharmacy");
    localManager.removeItem("pharmacyData");
    localManager.removeItem("resolveUser");
     $http({
        method  : 'GET',
        url     : "/user/logout",
        headers : {'Content-Type': 'application/json'} 
        })
      .success(function(data) {
        $scope.userData = data;
        $window.location.href = '/';
     });
  }

  $scope.viewNote = function(id){
    templateService.holdId = id;
    var pageUrl = "/pharmacy/view-prescription/" + id;
    $location.path(pageUrl);
    localManager.setValue("currPageForPharmacy",pageUrl);
  }


  //this fn gets all notification from the back end and adds to the attendance list. this is similar to toList fn jst that instead of 
  //adding patients to the list one by one you simply all add all together.
  $scope.addAllNote = function(){     
    templateService.holdPharmacyReferralData.forEach(function(data){     
      var listObj = {};
      listObj.firstname = data.pharmacy.patient_firstname;
      listObj.lastname = data.pharmacy.patient_lastname;
      listObj.profile_pic_url = data.pharmacy.patient_profile_pic_url;
      listObj.ref = data.ref_id;
      listObj.date = data.date;
      console.log(typeof data.ref_id)
      var toStr = data.ref_id.toString();
      if(!templateService.checkInTheList.hasOwnProperty(toStr)) {      
        templateService.checkInTheList[toStr] = true;
        templateService.holdList.push(listObj);
      }
    });
  }

}]);

app.controller("pharmacyViewPrescriptionController",["$scope","$location","templateService","localManager",
  function($scope,$location,templateService,localManager){ 
  var pharmacyData = templateService.holdPharmacyReferralData = localManager.getValue("pharmacyData");  
  var getCurrentPage = localManager.getValue("currPageForPharmacy");
  var getIdOfCurrentPage = getCurrentPage.split("/");
  var getLastItem = getIdOfCurrentPage[getIdOfCurrentPage.length-1];
  var convertToInt = parseInt(getLastItem);
  var refId = templateService.holdId || convertToInt;

  console.log(pharmacyData)

  pharmacyData.forEach(function(data){      
    if(refId === data.ref_id) {
      $scope.refData = data;       
      return;
    }
  });

  $scope.toAnotherPharmacy = function(){      
    var unavailableDrugArr = [];
    $scope.refData.pharmacy.prescription_body.forEach(function(drug){   
      if(!drug.picked || drug.picked !== true) {
        var filter = {};
        filter.sn = drug.sn;
        filter.drug_name = drug.drug_name;
        filter.dosage = drug.dosage;
        filter.duration = drug.duration;
        filter.frequency = drug.frequency;
        unavailableDrugArr.push(filter);
      }
    });
   
    templateService.holdPharmacyReferralData.forEach(function(data){      
      if(refId === data.ref_id) {
        $location.path("/search/pharmacy"); 
        data.pharmacy.prescription_body = unavailableDrugArr;
        templateService.holdPrescriptionToBeForwarded = data;
        templateService.holdPrescriptionToBeForwarded.sender = "Pharmacy";     
        return;
      }
    });    
                          
  }

  $scope.toList = function(firstname,lastname,profilePicUrl,ref_id,date){
    var listObj = {};
    listObj.firstname = firstname;
    listObj.lastname = lastname;
    listObj.profile_pic_url = profilePicUrl;
    listObj.ref = ref_id;
    listObj.date = date;
    var toStr = ref_id.toString();
    if(!templateService.checkInTheList.hasOwnProperty(toStr)) {      
      templateService.checkInTheList[toStr] = true;
      templateService.holdList.push(listObj);
    }
  }

  $scope.done = function(){

  }
 
}]);

app.controller("checkingOutPatientController",["$scope","$location","templateService","localManager",
  function($scope,$location,templateService,localManager){
  $scope.patientPrescription = function(id){
    templateService.holdList.forEach(function(item){
      if(item.ref === id){
        templateService.holdId = id;
        var pageUrl = "/pharmacy/view-prescription/" + id;
        localManager.setValue("currPageForPharmacy",pageUrl); 
        $location.path(pageUrl);
      } 
    }); 
  }

  $scope.viewLabTest = function(id){ 
    templateService.holdId = id;
    var pageUrl = "/laboratory/view-test/" + id;
    localManager.setValue("currPageForLaboratory",pageUrl);
    $location.path(pageUrl);
  }

  $scope.viewRadioTest = function(id){
    templateService.holdId = id;
    var pageUrl = "/radiology/view-test/" + id;
    localManager.setValue("currPageForRadiology",pageUrl);
    $location.path(pageUrl);
  }

  $scope.pendingList = templateService.holdList;

}]);


//for pharmacists,laboratory,radiologist use this controller
//works just like referredPatientController. pharmacy center search for a patient with ref_id or phone number of the patient as search criteria.
//Object is returned from the backend and displayed on lab-view-test.html template.
app.controller("referredPatientsController",["$scope","$location","$http","templateService","localManager",
  function($scope,$location,$http,templateService,localManager) {
  $scope.patient = {};

  $scope.isNotOption = true;

  $scope.showOption = function(){
    $scope.error = "";
     $scope.isNotOption = false;
     if(!$scope.isOption){
      $scope.isOption = true;
     } else {
      $scope.isNotOption = true;
      $scope.isOption = false;
     }
  }

  $scope.findPrescription = function(){

    if(Object.keys($scope.patient).length > 0) {
      typeOfSearch($scope.patient);
    } else {
      alert("Please enter search creteria in the text field")
      return;
    }

   if($scope.patient.ref_id){
      $scope.patient.criteria = "refIdCriteria";       
    } else if($scope.patient.phone) {
      $scope.patient.criteria = "phoneCriteria";
    }

  }
    

  var typeOfSearch = function(criteria) {   
    $http({
          method  : 'PUT',
          url     : "/pharmacy/find-patient/prescription",
          data    : criteria,
          headers : {'Content-Type': 'application/json'} 
          })
        .success(function(response) {                 
          $scope.patient = {};
          if(response.data) {
            $scope.foundData = response.data;            
          } else {
            $scope.error = response.error;
          }
      });
  }

  $scope.viewPatientPrescription = function(id){
    templateService.holdId = id;
    var pageUrl = "/pharmacy/view-prescription/" + id;
    localManager.setValue("currPageForPharmacy",pageUrl);
    $location.path(pageUrl);
    
  }

}]);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//for laboratory centers

app.controller("labCenterDashboardController",["$scope","$location","$http","templateService","localManager",
  function($scope,$location,$http,templateService,localManager){
    var currPage = localManager.getValue("currPageForLaboratory");
    if(currPage) {
     $location.path(currPage);
    } else {
      $location.path("/referral/laboratory-test");
    }
    $scope.attendanceList = templateService.holdList;


}]);

app.controller("labCenterNotificationController",["$scope","$location","$http","$window","templateService","localManager",
  function($scope,$location,$http,$window,templateService,localManager) {

  $http({
      method  : 'GET',
      url     : "/laboratory/get-referral",      
      headers : {'Content-Type': 'application/json'} 
      })
    .success(function(data) {
      console.log(data)
      templateService.holdLaboratoryReferralData = data;
      localManager.setValue("laboratoryData",data);
  }); 

  $scope.logout = function () {
    localManager.removeItem("userInfo");
    localManager.removeItem("currentPage");
    localManager.removeItem("currentPageForPatients");
    localManager.removeItem("currPageForPharmacy");
    localManager.removeItem("currPageForLaboratory");
    localManager.removeItem("laboratoryData");
    localManager.removeItem("deletedNotifications");
    localManager.removeItem("resolveUser");
     $http({
        method  : 'GET',
        url     : "/user/logout",
        headers : {'Content-Type': 'application/json'} 
        })
      .success(function(data) {
        $scope.userData = data;
        $window.location.href = '/';
     });
  }
    //this fn gets all notification from the back end and adds to the attendance list. this is similar to toList fn jst that instead of 
  //adding patients to the list one by one you simply all add all together.
  $scope.addAllNote = function(){
    console.log(templateService.holdLaboratoryReferralData)
    templateService.holdLaboratoryReferralData.forEach(function(data){
      if(!data.laboratory.attended || data.laboratory.attended === false) {
        var listObj = {};
        listObj.firstname = data.laboratory.patient_firstname;
        listObj.lastname = data.laboratory.patient_lastname;
        listObj.profile_pic_url = data.laboratory.patient_profile_pic_url;
        listObj.ref = data.ref_id;
        listObj.date = data.date;
        var toStr = data.ref_id.toString();
        if(!templateService.checkInTheList.hasOwnProperty(toStr)) {      
          templateService.checkInTheList[toStr] = true;
          templateService.holdList.push(listObj);
        }
      }
    });
  }

   var reverseNote = [];//this holds notic=fation from backend based on how new it is
   var deletedNote = [];//this holds all deleted notifications

  $scope.viewNote = function(id){
    templateService.holdId = id;
    var pageUrl = "/laboratory/view-test/" + id;
    localManager.setValue("currPageForLaboratory",pageUrl);
    $location.path(pageUrl);
    var elementPos = reverseNote.map(function(x) {return x.ref_id; }).indexOf(id);    
    var deleted = reverseNote.splice(elementPos,1);
    deletedNote.push(deleted[0])
    localManager.setValue("deletedNotifications",deletedNote); 
  }

 
  $http({
      method  : 'GET',
      url     : "/center/notification",
      headers : {'Content-Type': 'application/json'} 
      })
    .success(function(data) {     
      for(var i = data.length - 1; i >= 0; i--) {
        reverseNote.push(data[i]);
      }
      $scope.noteData = reverseNote;
   });
  

}]);


//works just like referredPatientController. Lab center search for a patient with ref_id or phone number of the patient as search criteria.
//Object is returned from the backend and displayed on lab-view-test.html template.
app.controller("labReferredPatientsController",["$scope","$location","$http","templateService","localManager",
  function($scope,$location,$http,templateService,localManager) {
  $scope.patient = {};

  $scope.isNotOption = true;

  $scope.showOption = function(){
     $scope.error = "";
     $scope.isNotOption = false;
     if(!$scope.isOption){
      $scope.isOption = true;
     } else {
      $scope.isNotOption = true;
      $scope.isOption = false;
     }
  }

  $scope.findTest = function(){
    if($scope.patient.ref_id){
      $scope.patient.criteria = "refIdCriteria";       
    } else if($scope.patient.phone) {
      $scope.patient.criteria = "phoneCriteria";
    }

    if(Object.keys($scope.patient).length > 0) {
      typeOfSearch($scope.patient);

    } else {
      alert("Please enter search creteria in the text field")
      return;
    }
  }
    

  var typeOfSearch = function(criteria) {     
    $http({
          method  : 'PUT',
          url     : "/laboratory/find-patient/lab-test",
          data    : criteria,
          headers : {'Content-Type': 'application/json'} 
          })
        .success(function(response) { 
          console.log(response)  
          $scope.patient = {};
          if(response.data) {
            $scope.test = response.data;            
          } else {
            $scope.error = response.error;
          }
      });
  }

  $scope.viewLabTest = function(id){
    templateService.holdId = id;
    var pageUrl = "/laboratory/view-test/" + id;
    localManager.setValue("currPageForLaboratory",pageUrl);
    $location.path(pageUrl);
  } 

}]);

app.controller("labCenterPanelController",["$scope","$location","$http","templateService","localManager",
  function($scope,$location,$http,templateService,localManager) {
    $scope.dashboardhome = function(){
      $location.path("/referral/laboratory-test");
    }
}]);

app.controller("labTestControler",["$scope","$location","$http","templateService","localManager","ModalService",
  function($scope,$location,$http,templateService,localManager,ModalService) {
   
    //this deletes the view notiication after the center have viewed it.
    var deleted = localManager.getValue("deletedNotifications");

    if(localManager.getValue("deletedNotifications") !== null) {
      $http({
        method  : 'DELETE',
        url     : "/center/delete-notification",
        data    :  deleted,
        headers : {'Content-Type': 'application/json'} 
        })
      .success(function(data) {
        console.log(data)
      });
    }

    var laboratoryData = templateService.holdLaboratoryReferralData = localManager.getValue("laboratoryData");  
    var getCurrentPage = localManager.getValue("currPageForLaboratory");
    var getIdOfCurrentPage = getCurrentPage.split("/");
    var getLastItem = getIdOfCurrentPage[getIdOfCurrentPage.length-1];
    var convertToInt = parseInt(getLastItem);
    var refId = templateService.holdId || convertToInt;
   
    var elementPos = laboratoryData.map(function(x) {return x.ref_id; }).indexOf(refId);
    var objectFound = laboratoryData[elementPos];    

    var holdInitialTestToRun = objectFound.laboratory.test_to_run;
    $scope.refInfo = objectFound;



  $scope.toList = function(firstname,lastname,profilePicUrl,ref_id,date){
    var listObj = {};
    listObj.firstname = firstname;
    listObj.lastname = lastname;
    listObj.profile_pic_url = profilePicUrl;
    listObj.ref = ref_id;
    listObj.date = date;
    var toStr = ref_id.toString();
    if(!templateService.checkInTheList.hasOwnProperty(toStr)) {      
      templateService.checkInTheList[toStr] = true;
      templateService.holdList.push(listObj);
    }
  }

  var ranTest = [];
  var unRanTest = [];
  $scope.hasPreviewed = true;
  $scope.hasSent = true;
  $scope.lab = {};

  $scope.result = function(){    
    $scope.isResult = true;
    $scope.hasPreviewed = false;
    $scope.refInfo.laboratory.test_to_run.forEach(function(test){
      if(test.select === true) {
        ranTest.push(test);
      } else if(test.select === false){
        unRanTest.push(test);
      }
    });

    $scope.$watch("ranTest",function(newVal,oldVal){
      $scope.refInfo.laboratory.test_to_run = ranTest
      $scope.isRefresh = true;
    },true);    
  }

  $scope.refresh = function(){
    var random = Math.floor(Math.random() * 100);
    $location.path("/laboratory/view-test/" + random);   
  }

  

  $scope.previewTestResult = function(){
    $scope.hasPreviewed = false;
    $scope.errorList = []
    $scope.refInfo.laboratory.test_to_run = ranTest;
    $scope.refInfo.laboratory.test_to_run.forEach(function(test){
      if(!test.data) {
        $scope.errorList.push(test.name);
      }
    });

    $scope.$watch("errorList",function(newVal,oldVal){
      if( $scope.errorList.length > 0 ) {
        $scope.incomplete = "Please enter report for " + $scope.errorList[0];
      } else if($scope.lab.conclusion !== undefined) {             
        $scope.incomplete = "";
        $scope.isPreview = true;
        $scope.isResult = false;
      } else {
        $scope.incomplete = "Please write your conclusion based on the test reports";
      }        
      
    });

     $scope.preTest = ranTest;
  }

  $scope.edit = function(){
    $scope.isPreview = false;
    $scope.isResult = true;
  }

  $scope.sendTestResult = function(){
    var theStringTests = combineTest(ranTest);
    var converToStr = theStringTests.join();
    var date = new Date();    
    $scope.refInfo.laboratory.report = converToStr;
    $scope.refInfo.laboratory.test_ran = ranTest;
    $scope.refInfo.laboratory.conclusion = $scope.lab.conclusion;
    $scope.refInfo.laboratory.test_to_run = holdInitialTestToRun;
    $scope.refInfo.laboratory.date = date;
    console.log( $scope.refInfo.laboratory); 
    $http({
      method  : 'PUT',
      url     : "/laboratory/test-result/session-update",
      data    : $scope.refInfo,
      headers : {'Content-Type': 'application/json'} 
      })
    .success(function(response) { 
        if(response.status === "success") {
          alert("SUCCESS!!! Test result sent to Dr " + $scope.refInfo.referral_firstname + " " + $scope.refInfo.referral_lastname)
          if(unRanTest.length > 0) {
            templateService.holdUnranTest = unRanTest;
            forwardUnRanTest(unRanTest);
          }
        } else {
          $scope.error = "Error ocurred while sending your test results. Please try again."
        }
    });

    //console.log($scope.refInfo.laboratory.test_to_run)
    //alert("result sent to " + "Dr " + $scope.refInfo.referral_firstname + " " + $scope.refInfo.referral_lastname)
  }

  function combineTest(testArray) {
    var report = [];
    var val;
    testArray.forEach(function(test){
      val = "" +  test.name + ":"  + " " + test.data;
      report.push(val)
    });
    return report;
  }

  $scope.isToForward = false;

  function forwardUnRanTest(unRantestArray) {    
    ModalService.showModal({
        templateUrl: 'unsent.html',
        controller:  "unRanTestModalController"
    }).then(function(modal) {
        modal.element.modal();
         $scope.isToForward = true;
          $scope.hasPreviewed = false;
          $scope.isPreview = false;
          $scope.hasSent = false;
          $scope.isRefresh = false;
          $scope.unRanTest = templateService.holdUnranTest;
          $scope.getLab = function(){
            //templateService.holdSelectedLabTest = $scope.unRanTest;
            var elementPos = templateService.holdLaboratoryReferralData.map(function(x) {return x.ref_id; }).indexOf(templateService.holdId);
            var objectFound = templateService.holdLaboratoryReferralData[elementPos];   

            objectFound.laboratory.test_to_run = $scope.unRanTest;

            templateService.holdReferral = objectFound;
            console.log(templateService.holdReferral);
            
            $location.path("/laboratory/find-laboratory");
          }

          $scope.noThanks = function() {
            if(laboratoryData.length > 0) {
              console.log(localManager.getValue("currPageForLaboratory"))
              var random = Math.floor(Math.random() * laboratoryData.length - 1);
              var data = laboratoryData[random];
              console.log(data)
              $location.path("/laboratory/view-test/" + data.ref_id)
            } else {
              $location.path(localManager.getValue("currPageForLaboratory"))
            }
           
          }

        modal.close.then(function(result) {          
          
        });
    });

  }

}]);

app.controller("unRanTestModalController",["$scope","$location","templateService",function($scope,$location,templateService){
  $scope.unRanTest = templateService.holdUnranTest;
}]); 



app.controller("laboratoryfindLabController",["$scope","$http","$location","templateService",function($scope,$http,$location,templateService){
  $http({
      method  : 'GET',
      url     : "/doctor/find-laboratory",// this route is use both for doctor and laboratory to find a center.
      headers : {'Content-Type': 'application/json'} 
      })
    .success(function(data) {          
      if(data.length > 0) {
        $scope.isFound = true;
        $scope.labCenters = data;
      } else {        
        $scope.isError = true;
        $scope.message = "Oops! Currently, It seems there are no laboratory center registered within your location. You can search for other locations";
      }
  });

  $scope.laboratory = {};

  $scope.search = function() {    
    $http({
      method  : 'PUT',
      url     : "/doctor/find-laboratory/search", //this route is use both for doctor and laboratory to find a center.
      data : $scope.laboratory,
      headers : {'Content-Type': 'application/json'} 
      })
    .success(function(data) {
      if(data.length > 0)  {
        $scope.isError = false;
        $scope.isFound = true;             
       $scope.labCenters = data;
      } else {
        $scope.isFound = false;
        $scope.isError = true;
         $scope.message = "Oops! No laboratory center was found based on your search criteria.Try again or check modify your search criteria.";
      }
    });
  }

  $scope.getLab = function(id){     
    var elementPos = $scope.labCenters.map(function(x) {return x.user_id; }).indexOf(id);
    var objectFound = $scope.labCenters[elementPos];          
    templateService.holdTheLaboratoryToFowardTestTo =  objectFound;

    console.log(id); 
   
    $location.path('/laboratory/selected-laboratory/' + id);
  }

}]);

app.controller("laboratorySelectedLabController",["$scope","$http","localManager","$location","templateService",
  function($scope,$http,localManager,$location,templateService){
    $scope.placeHolder = true
  $scope.labCenter = templateService.holdTheLaboratoryToFowardTestTo;
  
  $scope.isEnquiry = function(){
    $scope.isContactFirst = true;
  } 

   
  
  $scope.sendTest = function () {
    var sendObj = templateService.holdReferral;
    var date = new Date();
    sendObj.date = date;
    sendObj.user_id = $scope.labCenter.user_id;
    //create patient object to be sent alongside the lab test to run.
    
    //sending lab test to a selected lab center to the backend for storage;
    
    $http({
      method  : 'POST',
      url     : "/center/send-test",
      data    : sendObj,
      headers : {'Content-Type': 'application/json'} 
      })
    .success(function(data) {
      console.log(data)
      if(data.success){
        $scope.success = true;
        $scope.placeHolder = false;
        $scope.ref_number = data.ref_no;
        $scope.message = "Test has been forwrded";
      } else {
        $scope.message = "Error occured wihile sending the Lab test. Try again.";
      }
    });
  }

}]);


///////////////////////////////////////////////////////////////////////////////
/**************** for radiology centers *********************/

app.controller("radioCenterDashboardController",["$scope","$location","$http","templateService","localManager",
  function($scope,$location,$http,templateService,localManager){
    var currPage = localManager.getValue("currPageForRadiology");
    if(currPage) {
     $location.path(currPage);
    } else {
     $location.path("/referral/radiology-test");
    }

    $scope.attendanceList = templateService.holdList;

}]);

app.controller("radioCenterNotificationController",["$scope","$location","$http","$window","templateService","localManager",
  function($scope,$location,$http,$window,templateService,localManager) {

  $http({
      method  : 'GET',
      url     : "/radiology/get-referral",      
      headers : {'Content-Type': 'application/json'} 
      })
    .success(function(data) {
      templateService.holdRadiologyReferralData = data;
      localManager.setValue("radiologyData",data);
  }); 

    $scope.logout = function () {
      localManager.removeItem("userInfo");
      localManager.removeItem("currentPage");
      localManager.removeItem("currentPageForPatients");
      localManager.removeItem("currPageForPharmacy");
      localManager.removeItem("currPageForLaboratory");
      localManager.removeItem("laboratoryData");
      localManager.removeItem("radiologyData");
      localManager.removeItem("deletedNotifications");
      localManager.removeItem("currPageForRadiology");
      localManager.removeItem("resolveUser");
       $http({
          method  : 'GET',
          url     : "/user/logout",
          headers : {'Content-Type': 'application/json'} 
          })
        .success(function(data) {
          $scope.userData = data;
          $window.location.href = '/';
       });
    }
    //this fn gets all notification from the back end and adds to the attendance list. this is similar to toList fn jst that instead of 
  //adding patients to the list one by one you simply all add all together.
  $scope.addAllNote = function(){
   
    templateService.holdRadiologyReferralData.forEach(function(data){
      if(!data.laboratory)
        if(!data.radiology.attended || data.radiology.attended === false) {
          var listObj = {};
          listObj.firstname = data.radiology.patient_firstname;
          listObj.lastname = data.radiology.patient_lastname;
          listObj.profile_pic_url = data.radiology.patient_profile_pic_url;
          listObj.ref = data.ref_id;
          listObj.date = data.date;
          var toStr = data.ref_id.toString();
          if(!templateService.checkInTheList.hasOwnProperty(toStr)) {      
            templateService.checkInTheList[toStr] = true;
            templateService.holdList.push(listObj);
          }
        }
    });
  }

   var reverseNote = [];//this holds notic=fation from backend based on how new it is
   var deletedNote = [];//this holds all deleted notifications

  $scope.viewNote = function(id){
    templateService.holdId = id;
    var pageUrl = "/radiology/view-test/" + id;
    localManager.setValue("currPageForRadiology",pageUrl);
    $location.path(pageUrl);
    var elementPos = reverseNote.map(function(x) {return x.ref_id; }).indexOf(id);    
    var deleted = reverseNote.splice(elementPos,1); 
    deletedNote.push(deleted[0]);
    localManager.setValue("deletedNotifications",deletedNote);
  }

 
  $http({
      method  : 'GET',
      url     : "/center/notification",
      headers : {'Content-Type': 'application/json'} 
      })
    .success(function(data) {
      console.log(data)      
      for(var i = data.length - 1; i >= 0; i--) {
        reverseNote.push(data[i]);
      }
      $scope.noteData = reverseNote;
   });
  

}]);


//works just like referredPatientController. Lab center search for a patient with ref_id or phone number of the patient as search criteria.
//Object is returned from the backend and displayed on lab-view-test.html template.
app.controller("radioReferredPatientController",["$scope","$location","$http","templateService","localManager",
  function($scope,$location,$http,templateService,localManager) {
  $scope.patient = {};

  $scope.isNotOption = true;

  $scope.showOption = function(){
     $scope.error = "";
     $scope.isNotOption = false;
     if(!$scope.isOption){
      $scope.isOption = true;
     } else {
      $scope.isNotOption = true;
      $scope.isOption = false;
     }
  }

  $scope.findTest = function(){
    if($scope.patient.ref_id){
      $scope.patient.criteria = "refIdCriteria";       
    } else if($scope.patient.phone) {
      $scope.patient.criteria = "phoneCriteria";
    }

    if(Object.keys($scope.patient).length > 0) {
      typeOfSearch($scope.patient);

    } else {
      alert("Please enter search creteria in the text field")
      return;
    }
  }
    

  var typeOfSearch = function(criteria) {     
    $http({
        method  : 'PUT',
        url     : "/radiology/find-patient/scan-test",
        data    : criteria,
        headers : {'Content-Type': 'application/json'} 
        })
      .success(function(response) { 
        $scope.patient = {};
        if(response.data) {
          $scope.test = response.data;            
        } else {
          $scope.error = response.error;
        }
    });
  }

  $scope.viewLabTest = function(id){
    templateService.holdId = id;
    var pageUrl = "/radiology/view-test/" + id;
    localManager.setValue("currPageForRadiology",pageUrl);
    $location.path(pageUrl);
  } 

}]);

app.controller("radioCenterPanelController",["$scope","$location","$http","templateService","localManager",
  function($scope,$location,$http,templateService,localManager) {
    $scope.dashboardhome = function(){
      $location.path("/referral/radiology-test");
    }
}]);

app.controller("radioTestControler",["$scope","$location","$http","templateService","localManager","ModalService","multiData",
  function($scope,$location,$http,templateService,localManager,ModalService,multiData) {
   
    //this deletes the view notiication after the center have viewed it.
    var deleted = localManager.getValue("deletedNotifications");
    
    if(localManager.getValue("deletedNotifications") !== null) {
      $http({
        method  : 'DELETE',
        url     : "/center/delete-notification",
        data    :  deleted,
        headers : {'Content-Type': 'application/json'} 
        })
      .success(function(data) {
        console.log(data)
      });
    }

    var radiologyData = templateService.holdRadiologyReferralData = localManager.getValue("radiologyData");  
    var getCurrentPage = localManager.getValue("currPageForRadiology");
    var getIdOfCurrentPage = getCurrentPage.split("/");
    var getLastItem = getIdOfCurrentPage[getIdOfCurrentPage.length-1];
    var convertToInt = parseInt(getLastItem);
    var refId = templateService.holdId || convertToInt;
   
    var elementPos = radiologyData.map(function(x) {return x.ref_id; }).indexOf(refId);
    var objectFound = radiologyData[elementPos];

    

    var holdInitialTestToRun = objectFound.radiology.test_to_run;
    $scope.refInfo = objectFound;



  $scope.toList = function(firstname,lastname,profilePicUrl,ref_id,date){
    var listObj = {};
    listObj.firstname = firstname;
    listObj.lastname = lastname;
    listObj.profile_pic_url = profilePicUrl;
    listObj.ref = ref_id;
    listObj.date = date;
    var toStr = ref_id.toString();
    if(!templateService.checkInTheList.hasOwnProperty(toStr)) {      
      templateService.checkInTheList[toStr] = true;
      templateService.holdList.push(listObj);
    }
  }

  var ranTest = [];
  var unRanTest = [];
  $scope.hasPreviewed = true;
  $scope.hasSent = true;
  $scope.lab = {};

  $scope.result = function(){    
    $scope.isResult = true;
    $scope.hasPreviewed = false;
    $scope.refInfo.radiology.test_to_run.forEach(function(test){
      if(test.select === true) {
        ranTest.push(test);
      } else if(test.select === false){
        unRanTest.push(test);
      }
    });

    $scope.$watch("ranTest",function(newVal,oldVal){
      $scope.refInfo.radiology.test_to_run = ranTest
      $scope.isRefresh = true;
    },true);    
  }

  $scope.refresh = function(){
    var random = Math.floor(Math.random() * 100);
    $location.path("/radiology/view-test/" + random);   
  }

  

  $scope.previewTestResult = function(){
    $scope.hasPreviewed = false;
    $scope.errorList = []
    $scope.refInfo.radiology.test_to_run = ranTest;
    $scope.refInfo.radiology.test_to_run.forEach(function(test){
      if(!test.data) {
        $scope.errorList.push(test.name);
      }
    });

    $scope.$watch("errorList",function(newVal,oldVal){
      if( $scope.errorList.length > 0 ) {
        $scope.incomplete = "Please enter report for " + $scope.errorList[0];
      } else if($scope.lab.conclusion !== undefined) {             
        $scope.incomplete = "";
        $scope.isPreview = true;
        $scope.isResult = false;
      } else {
        $scope.incomplete = "Please write your conclusion based on the test reports";
      }        
      
    });

     $scope.preTest = ranTest;
  }

  $scope.edit = function(){
    $scope.isPreview = false;
    $scope.isResult = true;
  }

  $scope.sendTestResult = function(){
    var theStringTests = combineTest(ranTest);
    var converToStr = theStringTests.join();
    var date = new Date();    
    $scope.refInfo.radiology.report = converToStr;
    $scope.refInfo.radiology.test_ran = ranTest;
    $scope.refInfo.radiology.conclusion = $scope.lab.conclusion;
    $scope.refInfo.radiology.test_to_run = holdInitialTestToRun;
    $scope.refInfo.radiology.date = date;
    $scope.refInfo.radiology.filesUrl = templateService.holdScanImageList;

    
    $http({
      method  : 'PUT',
      url     : "/radiology/test-result/session-update",
      data    : $scope.refInfo,
      headers : {'Content-Type': 'application/json'} 
      })
    .success(function(response) { 
        console.log(response)
        if(response.status === "success") {
          alert("SUCCESS!!! Test result sent to Dr " + $scope.refInfo.referral_firstname + " " + $scope.refInfo.referral_lastname)
          if(unRanTest.length > 0) {
            templateService.holdUnranTest = unRanTest;
            forwardUnRanTest(unRanTest);
          }
        } else {
          $scope.error = "Error ocurred while sending your scan results. Please try again."
        }
    });

    //console.log($scope.refInfo.laboratory.test_to_run)
    //alert("result sent to " + "Dr " + $scope.refInfo.referral_firstname + " " + $scope.refInfo.referral_lastname)
  }

  $scope.radio = {}
  $scope.upload = function(){
    var arr = $scope.radio.scanImage;
    $scope.radio.ImageId = $scope.refInfo.ref_id;
    multiData.sendPic("/radiology/upload-scan",arr);
  }

  function combineTest(testArray) {
    var report = [];
    var val;
    testArray.forEach(function(test){
      val = "" +  test.name + ":"  + " " + test.data;
      report.push(val)
    });
    return report;
  }

  $scope.isToForward = false;

  function forwardUnRanTest(unRantestArray) {    
    ModalService.showModal({
        templateUrl: 'unsent.html',
        controller:  "unRanTestModalController"
    }).then(function(modal) {
        modal.element.modal();
         $scope.isToForward = true;
          $scope.hasPreviewed = false;
          $scope.isPreview = false;
          $scope.hasSent = false;
          $scope.isRefresh = false;
          $scope.unRanTest = templateService.holdUnranTest;
          $scope.getLab = function(){
            //templateService.holdSelectedLabTest = $scope.unRanTest;
            var elementPos = templateService.holdRadiologyReferralData.map(function(x) {return x.ref_id; }).indexOf(templateService.holdId);
            var objectFound = templateService.holdRadiologyReferralData[elementPos];   

            objectFound.radiology.test_to_run = $scope.unRanTest;

            templateService.holdReferral = objectFound;            
            
            $location.path("/radiology/find-laboratory");
          }

          $scope.noThanks = function() {
            if(laboratoryData.length > 0) {              
              var random = Math.floor(Math.random() * radiologyData.length - 1);
              var data = radiologyData[random];              
              $location.path("/radiology/view-test/" + data.ref_id)
            } else {
              $location.path(localManager.getValue("currPageForRadiology"))
            }
           
          }

        modal.close.then(function(result) {          
          
        });
    });

  }

}]);

app.controller("unRanTestModalController",["$scope","$location","templateService",function($scope,$location,templateService){
  $scope.unRanTest = templateService.holdUnranTest;
}]); 



app.controller("radiologyfindRadioController",["$scope","$http","$location","templateService",function($scope,$http,$location,templateService){
  $http({
      method  : 'GET',
      url     : "/doctor/find-radiology",// this route is use both for doctor and laboratory to find a center.
      headers : {'Content-Type': 'application/json'} 
      })
    .success(function(data) {          
      if(data.length > 0) {
        $scope.isFound = true;
        $scope.radioCenters = data;
      } else {        
        $scope.isError = true;
        $scope.message = "Oops! Currently, It seems there are no radiology center registered within your location. You can search for other locations";
      }
  });

  $scope.radiology = {};

  $scope.search = function() {    
    $http({
      method  : 'PUT',
      url     : "/doctor/find-radiology/search", //this route is use both for doctor and laboratory to find a center.
      data : $scope.radiology,
      headers : {'Content-Type': 'application/json'} 
      })
    .success(function(data) {
      if(data.length > 0)  {
        $scope.isError = false;
        $scope.isFound = true;             
       $scope.radioCenters = data;
      } else {
        $scope.isFound = false;
        $scope.isError = true;
         $scope.message = "Oops! No Radiology center was found based on your search criteria.Try again or check modify your search criteria.";
      }
    });
  }

  $scope.getLab = function(id){     
    var elementPos = $scope.radioCenters.map(function(x) {return x.user_id; }).indexOf(id);
    var objectFound = $scope.radioCenters[elementPos];          
    templateService.holdTheRadiologyToFowardTestTo =  objectFound;
   
    $location.path('/radiology/selected-radiology/' + id);
  }

}]);

app.controller("radiologySelectedRadioController",["$scope","$http","localManager","$location","templateService",
  function($scope,$http,localManager,$location,templateService){
    $scope.placeHolder = true
  $scope.radioCenter = templateService.holdTheRadiologyToFowardTestTo;
  
  $scope.isEnquiry = function(){
    $scope.isContactFirst = true;
  } 

   
  
  $scope.sendTest = function () {
    var sendObj = templateService.holdReferral;
    var date = new Date();
    sendObj.date = date;
    sendObj.user_id = $scope.radioCenter.user_id;
    //create patient object to be sent alongside the lab test to run.
    
    //sending lab test to a selected lab center to the backend for storage;
    
    $http({
      method  : 'POST',
      url     : "/center/send-test",
      data    : sendObj,
      headers : {'Content-Type': 'application/json'} 
      })
    .success(function(data) {
      console.log(data)
      if(data.success){
        $scope.success = true;
        $scope.placeHolder = false;
        $scope.ref_number = data.ref_no;
        $scope.message = "scan has been forwrded";
      } else {
        $scope.message = "Error occured wihile sending the scan test. Try again.";
      }
    });
  }

}]);

app.directive('myIframe', function(){
  var linkFn = function(scope, element, attrs) {
      element.find('iframe').bind('load', function (event) {
        event.target.contentWindow.scrollTo(0,400);
      });
  };
  return {
    restrict: 'EA',
    scope: {
      src:'@src',
      height: '@height',
      width: '@width',
      scrolling: '@scrolling'
    },
    template: '<iframe class="frame" height="{{height}}" width="{{width}}" frameborder="0" border="0" marginwidth="0" marginheight="0" scrolling="{{scrolling}}" src="{{src}}"></iframe>',
    link : linkFn
  };
});

app.directive('autoComplete', function($timeout) {
    return function(scope, iElement, iAttrs) {
      iElement.autocomplete({
          source: scope[iAttrs.uiItems],
          select: function() {
              $timeout(function() {
                iElement.trigger('input');
              }, 0);
          }
      });
    };
});

/*** for additional utilities like search for drug of lab test etc.*/

app.service("searchtestservice",["$window","$http","templateService","$location",function($window,$http,templateService,$location){
  this.goBack = function(type){
    switch(type){
      case "Patient":
        $window.location.href = "/patient/dashboard";
        break;
      case "Doctor":
        $window.location.href = "/doctor/dashboard";
        break;
      case "Laboratory":
        $window.location.href = "/medical-center/laboratory";
        break;
      case "Radiology":
        $window.location.href = "/medical-center/radiology";
        break;
      case "Pharmacy":
        $window.location.href = "/medical-center/pharmacy";
        break;
      default:
        $window.location.href = "/";
      break
    }
  }

  this.find = function(data,url,path){
    $http({
      method  : 'PUT',
      url     : url,
      data    : data,
      headers : {'Content-Type': 'application/json'} 
      })
    .success(function(data) {      
      if(data.full.length !== 0 || data.less.length !== 0){
        templateService.holdSearchResult = data;      
        $location.path(path)
      } else {
        alert("No result found based on your search criteria.Please check to see if the city name or the name is spelt correctly.")
      }
    });
  }


}]);

app.controller("findRadioTestController",["$scope","$location","$window","templateService","localManager","scanTests","searchtestservice",
function($scope,$location,$window,templateService,localManager,scanTests,searchtestservice){
  $scope.backTo = function(type){
    searchtestservice.goBack(type);
  }

  $location.path("/scan-search")
}]);

app.controller("drugSearchController",["$scope","$location","$window","templateService","localManager","Drugs","searchtestservice","cities",
function($scope,$location,$window,templateService,localManager,Drugs,searchtestservice,cities){
  $scope.backTo = function(type){
    searchtestservice.goBack(type);
  }
  $location.path("/drug")
}]);



app.controller("findTestController",["$scope","$location","$window","templateService","localManager","labTests","searchtestservice","cities",
function($scope,$location,$window,templateService,localManager,labTests,searchtestservice,cities){
  $scope.backTo = function(type){
    searchtestservice.goBack(type);
  }

  $location.path("/search-test")
}]);



app.controller("drugController",["$scope","$location","$window","templateService","localManager","Drugs","searchtestservice","cities",
function($scope,$location,$window,templateService,localManager,Drugs,searchtestservice,cities){

  var list = [{sn:'a'}];
  var drugName;
  var thisCity;
  $scope.getDrug = function(name){
    drugName = name;
  }

  $scope.getCity = function(city){
    thisCity = city;
  } 
  
  $scope.drugList = list;

  $scope.add = function(){
    if(drugName !== "" && drugName !== undefined) {   
      if(!/^[A-Z]/.test( drugName))
        drugName = toTitleCase(drugName);
      var elementPos = $scope.drugs.map(function(x){return x.name}).indexOf(drugName)
      objFound = $scope.drugs[elementPos];
      if( elementPos === -1) {
            alert("There is no drug match based on your search criteria. Make sure you entered the drug name correctly.")
      } else {
        if(!list[0].name) {      
          list[0].name = objFound.name;
          list[0].id = objFound.id;      
        }
        var random = Math.floor(Math.random() * 1000);
        var obj = {};
        obj.sn = random;
        obj.name = objFound.name;
        obj.id = objFound.id;
        list.push(obj);
       
      }
    } else {
      alert('Please enter drug name')
    }

  }

  $scope.remove = function(id){    
    if(list.length > 1){
      var elementPos = list.map(function(x){return x.sn}).indexOf(id)
      var objfound = list.splice(elementPos,1);
    }
  }

  $scope.cities = cities;
  
  $scope.drugs = Drugs;

  

  $scope.findDrug = function(){
    var sendObj = {}
    sendObj.city = thisCity;
     if(thisCity !== undefined && !/^[A-Z]/.test(thisCity))
         sendObj.city = toTitleCase(thisCity);  
    if(list.length === 1) {
      if(drugName !== undefined && drugName !== "") {
      if(!/^[A-Z]/.test( drugName))
         drugName = toTitleCase(drugName);     
      var elementPos = $scope.drugs.map(function(x){return x.name}).indexOf(drugName)
      objFound = $scope.drugs[elementPos];
      if( elementPos === -1) {
        alert("There is no drug match based on your search criteria. Make sure you entered the drug name correctly.")
      } else {
      list[0].name = objFound.name;
      list[0].id = objFound.id;
      sendObj.drugList = list;
      templateService.holdList = sendObj.drugList;
      send(sendObj)
      }
      } else {
        alert("Please enter the drug name")
      }
    } else {
      var elementPos = $scope.drugs.map(function(x){return x.name}).indexOf(drugName)
      objFound = $scope.drugs[elementPos];
      list[0].name = objFound.name;
      list[0].id = objFound.id;      
      sendObj.drugList = list;
      templateService.holdList = sendObj.drugList;
      send(sendObj)
    }
    templateService.holdId = null;
  }

  //new
  $scope.notRef = true;
  $scope.search = {};
  $scope.user = {};
  $scope.search.category = "";
  var toNum;
  $scope.findWithRef = function(Id){
    var sendObj = {};
    sendObj.drugList = [];
    sendObj.city = thisCity;
     if(thisCity !== undefined && !/^[A-Z]/.test(thisCity))
         sendObj.city = toTitleCase(thisCity);      
    var toNum = parseInt(Id);
    var allpres = localManager.getValue("patientPrescriptions");
    var elementPos = allpres.map(function(x){return x.prescriptionId}).indexOf(toNum)
    var objFound = allpres[elementPos];
    if(elementPos !== -1){
      if(objFound.ref_id){
        templateService.holdId = objFound.ref_id;
        templateService.holdPrescriptionId = objFound.prescriptionId;
      } else {
        templateService.holdId = null;
      } 
    } else {
      alert("Prescription not found!");
    }

    if( elementPos !== -1) {
      var objList = objFound.prescription_body;
      for(var i = 0; i < objList.length; i++) {
        var elemPos = Drugs.map(function(x){return x.name}).indexOf(objList[i].drug_name);
        var found = Drugs[elemPos];
        sendObj.drugList.push(found);        
      }

      send(sendObj);

    } else {
      alert("Prescription not found!")
    }
  }

  $scope.$watch("search.category",function(newVal,oldVal){
    if(newVal === "Prescription ID") {
      $scope.isRef = true;
      $scope.notRef = false;
    } else {
      $scope.isRef = false;
      $scope.notRef = true;
    }
  })

  

  function toTitleCase(str)
  {
      return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }

  function send(data){
    searchtestservice.find(data,"/pharmacy/search/find-drugs","/pharmacy/drug-search/result")
  }
  
}]);

app.controller("drugSearchResultController",["$scope","$location","templateService","localManager","ModalService",
  function($scope,$location,templateService,localManager,ModalService){
  $scope.drugResult = templateService.holdSearchResult;  
  $scope.criteria = templateService.holdList;
  $scope.drugFilter = {};
  $scope.getStr = function(str){
    var newStr = "";
    var strArr = str.split(",");
    for(var i = 0; i < strArr.length; i++){
      newStr += "@" + strArr[i] + " "
    }
    return newStr;
  }

  $scope.notStr = function(arr) {
    var newStr = "";
    for(var i = 0; i < arr.length; i++){
      newStr += "@" + arr[i].name + " "
    }

    return newStr;
  }

  $scope.toForward = function(center) {    
    var isLogged = localManager.getValue("resolveUser");
    if(!isLogged.isLoggedIn) {
      ModalService.showModal({
          templateUrl: 'qiuck-login.html',
          controller: "loginController"
      }).then(function(modal) {
          modal.element.modal();
          modal.close.then(function(result) {             
          });
      });
    } else {
      if(templateService.holdId)
        center.ref_id = templateService.holdId;
      templateService.holdTheCenterToFowardPrescriptionTo = center;
      $location.path("/drug/selected-pharmacy");
    }
  }

}]);



app.controller("searchSelectedCenterController",["$scope","$location","$window","$http","templateService","localManager","ModalService",
function($scope,$location,$window,$http,templateService,localManager,ModalService){
  $scope.data = templateService.holdTheCenterToFowardPrescriptionTo;
  $scope.user = {};
  $scope.someone = function(){
    $scope.user.someone = true;
    $scope.isToSomeOne = true;
  }

  $scope.cancel = function(){
    $scope.isToSomeOne = false;
    $scope.user.someone = false;
    if($scope.data.phone)
      $scope.data.phone = ""
  }

  $scope.isContent = true;

  $scope.sendDrug = function (type){    
    var random;
    if(templateService.holdPrescriptionId){
      random = templateService.holdPrescriptionId;
    } else {      
      random = Math.floor(Math.random() * 999999999999 );
    }    

    var date = new Date();
    $scope.data.type = type;
    $scope.data.prescriptionId = random;
    $scope.data.user_id = $scope.data.id;
    $scope.data.sent_date = date;

    var drugArr = $scope.data.str.split(",");    
    for(var i = 0; i < drugArr.length; i++){
      var drugObj = {};
      drugObj.sn = i + 1;
      drugObj.drug_name = drugArr[i];
      drugObj.dosage = "";
      drugObj.frequency = "";
      drugObj.duration = "";
      drugArr[i] = drugObj;
    }
    $scope.data.prescription_body = drugArr;
    console.log($scope.data)
    send($scope.data,"/drug-search/pharmacy/referral");
  }

  

  function send(data,url) {
     $http({
      method  : 'PUT',
      url     : url,
      data    : data,
      headers : {'Content-Type': 'application/json'} 
      })
    .success(function(data) {      
      if(data.error) {
        alert(data.error);
        $scope.isEMP = true;
      } else {
        console.log(data)
        $scope.isContent = false;
        $scope.isSent = true;
        $scope.result = data.ref_id;
      }
    });
  }

  $scope.emp = function(){
    ModalService.showModal({
        templateUrl: 'patient-emergency-form.html',
        controller: "newPatientModalController"
      }).then(function(modal) {
        modal.element.modal();
        modal.close.then(function(result) {
          $scope.isEMP = false; 
      });
    });
  }

}]);

app.controller("isNotloggedInModalController",["$scope","$location","$window","templateService","localManager","ModalService",
function($scope,$location,$window,templateService,localManager,ModalService){
  $scope.signUp = function(){
    ModalService.showModal({
        templateUrl: 'patient-signup.html',
        controller: "signupController"
    }).then(function(modal) {
        modal.element.modal();
        modal.close.then(function(result) {             
        });
    });
  }

}]);



app.controller("searchTestController",["$scope","$location","$window","templateService","localManager","labTests","searchtestservice","cities",
function($scope,$location,$window,templateService,localManager,labTests,searchtestservice,cities){
  var allTests = labTests.listInfo.concat(labTests.listInfo1,labTests.listInfo2,labTests.listInfo3,labTests.listInfo4,
    labTests.listInfo5,labTests.listInfo6,labTests.listInfo7);


  var list = [{sn:'a'}];
  var testName;
  var thisCity;

  $scope.getTest = function(name){
    testName = name;
  }

  $scope.getCity = function(city){
    thisCity = city;
  } 

  $scope.testList = list;

  $scope.cities = cities;
    
  $scope.tests = allTests;

   $scope.add = function(){
    if(testName !== "" && testName !== undefined) {   
      if(!/^[A-Z]/.test( testName))
        testName = toTitleCase(testName);
      var elementPos = $scope.tests.map(function(x){if(x !== undefined){return x.name}}).indexOf(testName)
      objFound = $scope.tests[elementPos];
      if( elementPos === -1) {
            alert("There is no test match based on your search criteria. Make sure you entered the test name correctly.")
      } else {
        if(!list[0].name) {      
          list[0].name = objFound.name;
          list[0].id = objFound.id;      
        }
        var random = Math.floor(Math.random() * 1000);
        var obj = {};
        obj.sn = random;
        obj.name = objFound.name;
        obj.id = objFound.id;
        list.push(obj);       
      }
    } else {
      alert('Please enter test name')
    }

  }

  $scope.remove = function(id){    
    if(list.length > 1){
      var elementPos = list.map(function(x){return x.sn}).indexOf(id)
      var objfound = list.splice(elementPos,1);
    }
  }

  $scope.findTest = function(){
    var sendObj = {}
    sendObj.city = thisCity;
     if(thisCity !== undefined && !/^[A-Z]/.test(thisCity))
         sendObj.city = toTitleCase(thisCity);  
    if(list.length === 1) {
      if(testName !== undefined && testName !== "") {        
      var elementPos = $scope.tests.map(function(x){if(x !== undefined){return x.name}}).indexOf(testName)
      objFound = $scope.tests[elementPos];
      if( elementPos === -1) {
        alert("There is no test match based on your search criteria. Make sure you entered the test name correctly.")
      } else {
      list[0].name = objFound.name;
      list[0].id = objFound.id;
      sendObj.testList = list;
      templateService.holdList = sendObj.testList;
      send(sendObj)
      }
      } else {
        alert("Please enter the test name")
      }
    } else {
      var elementPos = $scope.tests.map(function(x){if(x !== undefined){return x.name}}).indexOf(testName)
      objFound = $scope.tests[elementPos];
      list[0].name = objFound.name;
      list[0].id = objFound.id;      
      sendObj.testList = list;
      templateService.holdList = sendObj.testList;
      send(sendObj)
    }
    templateService.holdLaboratoryReferralData= {};   
  }

  $scope.notRef = true;
  $scope.search = {};
  $scope.user = {};
  $scope.search.category = "";

  $scope.findWithRef = function(Id){
    console.log(localManager.getValue("patientTests"))
    var sendObj = {};
    sendObj.testList = [];
    sendObj.city = thisCity;
     if(thisCity !== undefined && !/^[A-Z]/.test(thisCity))
         sendObj.city = toTitleCase(thisCity);      
    var toNum = parseInt(Id);
    var allTest = localManager.getValue("patientTests");
    var elementPos = allTest.map(function(x){if(x !== undefined){return x.ref_id}}).indexOf(toNum);
    var objFound = allTest[elementPos];
    if( elementPos !== -1) {
      var objList = objFound.test_to_run;
      console.log(objList)
      for(var i = 0; i < objList.length; i++) {
        var elemPos = $scope.tests.map(function(x){if(x !== undefined){return x.name}}).indexOf(objList[i].name);
        if(elemPos !== -1) {
          var found = $scope.tests[elemPos];
          sendObj.testList.push(found);          
        } else {
          alert('Test not found!');
          return;
        }

      }
      templateService.holdLaboratoryReferralData = objFound;
      send(sendObj);
    } else {
      alert("Test not found!")
    }

  }

  $scope.$watch("search.category",function(newVal,oldVal){
    if(newVal === "Reference number") {
      $scope.isRef = true;
      $scope.notRef = false;
    } else {
      $scope.isRef = false;
      $scope.notRef = true;
    }
  })

  function toTitleCase(str)
  {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }

  function send(data){
    searchtestservice.find(data,"/laboratory/search/find-tests","/laboratory/test-search/result")
  }

}]);

app.controller("testSearchResultController",["$scope","$location","templateService","localManager","ModalService",
  function($scope,$location,templateService,localManager,ModalService){

  $scope.testResult = templateService.holdSearchResult;
  $scope.criteria = templateService.holdList;
  $scope.testFilter = {};
  $scope.getStr = function(str){
    var newStr = "";
    var strArr = str.split(",");
    for(var i = 0; i < strArr.length; i++){
      newStr += "@" + strArr[i] + " "
    }
    return newStr;
  }

  $scope.notStr = function(arr) {
    var newStr = "";
    for(var i = 0; i < arr.length; i++){
      newStr += "@" + arr[i].name + " "
    }

    return newStr;
  }

  $scope.back = "#/search-test"

  $scope.toForward = function(center) {    
    var isLogged = localManager.getValue("resolveUser");
    if(!isLogged.isLoggedIn) {
      ModalService.showModal({
          templateUrl: 'qiuck-login.html',
          controller: "loginController"
      }).then(function(modal) {
          modal.element.modal();
          modal.close.then(function(result) {             
          });
      });
    } else {
      templateService.holdTheCenterToFowardPrescriptionTo = center;
      $location.path("/test/selected-laboratory");
    }
  }
}]);

app.controller("testSearchSelectedCenterController",["$scope","$location","$window","$http","templateService","localManager","ModalService",
function($scope,$location,$window,$http,templateService,localManager,ModalService){
  $scope.data = templateService.holdTheCenterToFowardPrescriptionTo;
  $scope.user = {};
  $scope.someone = function(){
    $scope.user.someone = true;
    $scope.isToSomeOne = true;
  }

  $scope.back = "#/laboratory/test-search/result";

  $scope.cancel = function(){
    $scope.isToSomeOne = false;
    $scope.user.someone = false;
    if($scope.data.phone)
      $scope.data.phone = ""
  }

  $scope.isContent = true;

  $scope.send = function (type){    
    var random;
    var labData = templateService.holdLaboratoryReferralData;
    if(labData.ref_id){      
      random = labData.ref_id;
    } else {      
      random = Math.floor(Math.random() * 9999999 );
    }    

    var date = new Date();
    $scope.data.type = type;
    $scope.data.ref_id = random;
    $scope.data.user_id = $scope.data.id;
    $scope.data.sent_date = date;
    $scope.data.session_id = labData.session_id;

    var testArr = $scope.data.str.split(",");    
    for(var i = 0; i < testArr.length; i++){
      var testObj = {};
      testObj.name = testArr[i];
      testObj.sn = i + 1;
      testObj.select = true;
      testArr[i] = testObj;
    }
    $scope.data.test_to_run = testArr;
    console.log($scope.data)
    send($scope.data,"/test-search/laboratory/referral");
  }

  

  function send(data,url) {
     $http({
      method  : 'PUT',
      url     : url,
      data    : data,
      headers : {'Content-Type': 'application/json'} 
      })
    .success(function(data) {      
      if(data.error) {
        alert(data.error);
        $scope.isEMP = true;
      } else {
        console.log(data)
        $scope.isContent = false;
        $scope.isSent = true;
        $scope.result = data.ref_id;
      }
    });
  }

  //runs if the patient is not yet registered
  $scope.emp = function(){
    ModalService.showModal({
        templateUrl: 'patient-emergency-form.html',
        controller: "newPatientModalController"
      }).then(function(modal) {
        modal.element.modal();
        modal.close.then(function(result) {
          $scope.isEMP = false; 
      });
    });
  }

}]);


app.controller("searchScanController",["$scope","$location","$window","templateService","localManager","scanTests","searchtestservice","cities",
function($scope,$location,$window,templateService,localManager,scanTests,searchtestservice,cities){
 var allTests = scanTests.listInfo1.concat(scanTests.listInfo2,scanTests.listInfo3,scanTests.listInfo4,scanTests.listInfo5,
  scanTests.listInfo6);


  var list = [{sn:'a'}];
  var testName;
  var thisCity;

  $scope.getTest = function(name){
    testName = name;
  }

  $scope.getCity = function(city){
    thisCity = city;
  } 

  $scope.testList = list;

  $scope.cities = cities;
    
  $scope.tests = allTests;

   $scope.add = function(){
    if(testName !== "" && testName !== undefined) {   
      if(!/^[A-Z]/.test( testName))
        testName = toTitleCase(testName);
      var elementPos = $scope.tests.map(function(x){if(x !== undefined){return x.name}}).indexOf(testName)
      objFound = $scope.tests[elementPos];
      if( elementPos === -1) {
            alert("There is no test match based on your search criteria. Make sure you entered the test name correctly.")
      } else {
        if(!list[0].name) {      
          list[0].name = objFound.name;
          list[0].id = objFound.id;      
        }
        var random = Math.floor(Math.random() * 1000);
        var obj = {};
        obj.sn = random;
        obj.name = objFound.name;
        obj.id = objFound.id;
        list.push(obj);       
      }
    } else {
      alert('Please enter test name')
    }

  }

  $scope.remove = function(id){    
    if(list.length > 1){
      var elementPos = list.map(function(x){return x.sn}).indexOf(id)
      var objfound = list.splice(elementPos,1);
    }
  }

  $scope.findTest = function(){
    var sendObj = {}
    sendObj.city = thisCity;
     if(thisCity !== undefined && !/^[A-Z]/.test(thisCity))
         sendObj.city = toTitleCase(thisCity);  
    if(list.length === 1) {
      if(testName !== undefined && testName !== "") {
      if(!/^[A-Z]/.test( testName))
         testName = toTitleCase(testName);     
      var elementPos = $scope.tests.map(function(x){if(x !== undefined){return x.name}}).indexOf(testName)
      objFound = $scope.tests[elementPos];
      if( elementPos === -1) {
        alert("There is no test match based on your search criteria. Make sure you entered the test name correctly.")
      } else {
      list[0].name = objFound.name;
      list[0].id = objFound.id;
      sendObj.testList = list;
      templateService.holdList = sendObj.testList;
      send(sendObj)
      }
      } else {
        alert("Please enter the test name")
      }
    } else {
      var elementPos = $scope.tests.map(function(x){if(x !== undefined){return x.name}}).indexOf(testName)
      objFound = $scope.tests[elementPos];
      list[0].name = objFound.name;
      list[0].id = objFound.id;      
      sendObj.testList = list;
      templateService.holdList = sendObj.testList;
      send(sendObj)
    }
    templateService.holdLaboratoryReferralData= {};   
  }

  $scope.notRef = true;
  $scope.search = {};
  $scope.user = {};
  $scope.search.category = "";

  $scope.findWithRef = function(Id){
    console.log(localManager.getValue("patientTests"))
    var sendObj = {};
    sendObj.testList = [];
    sendObj.city = thisCity;
     if(thisCity !== undefined && !/^[A-Z]/.test(thisCity))
         sendObj.city = toTitleCase(thisCity);      
    var toNum = parseInt(Id);
    var allTest = localManager.getValue("patientTests");
    var elementPos = allTest.map(function(x){if(x !== undefined){return x.ref_id}}).indexOf(toNum);
    var objFound = allTest[elementPos];
    if( elementPos !== -1) {
      var objList = objFound.test_to_run;
      console.log(objList)
      for(var i = 0; i < objList.length; i++) {
        var elemPos = $scope.tests.map(function(x){if(x !== undefined){return x.name}}).indexOf(objList[i].name);
        if(elemPos !== -1) {
          var found = $scope.tests[elemPos];
          sendObj.testList.push(found);          
        } else {
          alert('Test not found!');
          return;
        }

      }
      templateService.holdLaboratoryReferralData = objFound;
      send(sendObj);
    } else {
      alert("Test not found!")
    }

  }

  $scope.$watch("search.category",function(newVal,oldVal){
    if(newVal === "Reference number") {
      $scope.isRef = true;
      $scope.notRef = false;
    } else {
      $scope.isRef = false;
      $scope.notRef = true;
    }
  })

  function toTitleCase(str)
  {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }

  function send(data){
    searchtestservice.find(data,"/radiology/search/find-tests","/radiology/scan-search/result")
  }

}]);

app.controller("scanSearchResultController",["$scope","$location","templateService","localManager","ModalService",
  function($scope,$location,templateService,localManager,ModalService){
  $scope.testResult = templateService.holdSearchResult;
  $scope.criteria = templateService.holdList;
  $scope.testFilter = {};
  $scope.getStr = function(str){
    var newStr = "";
    var strArr = str.split(",");
    for(var i = 0; i < strArr.length; i++){
      newStr += "@" + strArr[i] + " "
    }
    return newStr;
  }

  $scope.notStr = function(arr) {
    var newStr = "";
    for(var i = 0; i < arr.length; i++){
      newStr += "@" + arr[i].name + " "
    }

    return newStr;
  }

  $scope.back = "#/scan-search";

  $scope.toForward = function(center) {    
    var isLogged = localManager.getValue("resolveUser");
    if(!isLogged.isLoggedIn) {
      ModalService.showModal({
          templateUrl: 'qiuck-login.html',
          controller: "loginController"
      }).then(function(modal) {
          modal.element.modal();
          modal.close.then(function(result) {             
          });
      });
    } else {
      templateService.holdTheCenterToFowardPrescriptionTo = center;
      $location.path("/scan/selected-radiology");
    }
  }

}]);

app.controller("scanSearchSelectedCenterController",["$scope","$location","$window","$http","templateService","localManager","ModalService",
function($scope,$location,$window,$http,templateService,localManager,ModalService){
  $scope.data = templateService.holdTheCenterToFowardPrescriptionTo;//holds thssame for lab and scan
  $scope.user = {};
  $scope.someone = function(){
    $scope.user.someone = true;
    $scope.isToSomeOne = true;
  }

  $scope.back = "#/radiology/scan-search/result";

  $scope.cancel = function(){
    $scope.isToSomeOne = false;
    $scope.user.someone = false;
    if($scope.data.phone)
      $scope.data.phone = ""
  }

  $scope.isContent = true;

  $scope.send = function (type){    
    var random;
    var labData = templateService.holdLaboratoryReferralData; //holds thsame for scan
    if(labData.ref_id){      
      random = labData.ref_id;
    } else {      
      random = Math.floor(Math.random() * 9999999 );
    }    

    var date = new Date();
    $scope.data.type = type;
    $scope.data.ref_id = random;
    $scope.data.user_id = $scope.data.id;
    $scope.data.sent_date = date;
    $scope.data.session_id = labData.session_id;

    var testArr = $scope.data.str.split(",");    
    for(var i = 0; i < testArr.length; i++){
      var testObj = {};
      testObj.name = testArr[i];
      testObj.sn = i + 1;
      testObj.select = true;
      testArr[i] = testObj;
    }
    $scope.data.test_to_run = testArr;
    console.log($scope.data)
    send($scope.data,"/scan-search/radiology/referral");
  }

  

  function send(data,url) {
     $http({
      method  : 'PUT',
      url     : url,
      data    : data,
      headers : {'Content-Type': 'application/json'} 
      })
    .success(function(data) {      
      if(data.error) {
        alert(data.error);
        $scope.isEMP = true;
      } else {
        console.log(data)
        $scope.isContent = false;
        $scope.isSent = true;
        $scope.result = data.ref_id;
      }
    });
  }

  //runs if the patient is not yet registered
  $scope.emp = function(){
    ModalService.showModal({
        templateUrl: 'patient-emergency-form.html',
        controller: "newPatientModalController"
      }).then(function(modal) {
        modal.element.modal();
        modal.close.then(function(result) {
          $scope.isEMP = false; 
      });
    });
  }

}]);








app.controller("helpController",["$scope","$location","$window","$http","templateService","localManager",
function($scope,$location,$window,$http,templateService,localManager){
 
  $scope.user = localManager.getValue("resolveUser") || {};
  var date = new Date();
  $scope.user.date = date;

  $scope.sendHelp = function(){
    if(!localManager.getValue("resolveUser")) {
      alert("Please login and continue");
    } else {
      if(!$scope.user.helpType && !$scope.user.description) {
        alert("Please complete all fields")
      } else {
      $http({
        method  : 'POST',
        url     : "/user/help",
        data    : $scope.user,
        headers : {'Content-Type': 'application/json'} 
        })
      .success(function(data) {
      console.log(data)      
        if(data.status){
          alert('form submitted successfully!')          
        } else {
          alert("Error occured while sending form.")
        }
      });

      }
    
    }
  }

}]);

app.controller("courierController",["$scope","$location","$window","templateService","localManager","Drugs","cities",
function($scope,$location,$window,templateService,localManager,Drugs,cities){
  //pending
  
}]);


/******** For Emergency profile users *************/

app.controller("eminPatientDashboardController",["$scope","$location","templateService","localManager",
function($scope,$location,templateService,localManager){
  $location.path(localManager.getValue("currentPageForPatients") || "/emp");
}]);

app.controller("empatientNotificationController",["$scope","$location","$http","$window","templateService","localManager",
function($scope,$location,$http,$window,templateService,localManager){
   $scope.logout = function () {
    localManager.removeItem("userInfo");
    localManager.removeItem("currentPage");
    localManager.removeItem("currentPageForPatients");
    localManager.removeItem("receiver");
    localManager.removeItem('caller');
    localManager.removeItem("doctorInfoforCommunication")
    localManager.removeItem("patientInfoforCommunication");
    localManager.removeItem("resolveUser");    
     $http({
        method  : 'GET',
        url     : "/user/logout",
        headers : {'Content-Type': 'application/json'} 
        })
      .success(function(data) {
        $scope.userData = data;
        $window.location.href = '/';

     });
  }

  $scope.getName = function(firstname,lastname,id){
    var holdName = {
      firstname: firstname,
      lastname: lastname,
      patient_id: id
    }
    templateService.holdForSpecificPatient = holdName;
    localManager.setValue("emPatientData",holdName)
  } 


}]);

app.controller("emNoteController",["$scope","$location","templateService","localManager",
function($scope,$location,templateService,localManager){
  $scope.patient = templateService.holdForSpecificPatient;
}]);

app.controller("empatientPanelController",["$scope","$location","$http","templateService","localManager",
function($scope,$location,$http,templateService,localManager){
  var medical = {};
  
  var patient = localManager.getValue("emPatientData")
  $http({
    method  : 'PUT',
    url     : "/patient-panel/get-medical-record/em",
    data    :  patient,
    headers : {'Content-Type': 'application/json'} 
    })
  .success(function(data) {
    if(data){
      console.log(data)
      var filter = {};
      var total = {};
      var filteredPrescriptions = [];
      medical.records = data.medical_records;
      medical.prescriptions = data.prescriptions;        
      templateService.holdAllPrescriptionForOtherCtrl = data.prescriptions;
      templateService.holdPrescriptions = medical.prescriptions; 
      medical.prescriptions.forEach(function(prescription){        
        if(!filter.hasOwnProperty(prescription.doctor_id)){                        
          total[prescription.doctor_id] = [];          
          total[prescription.doctor_id].push(prescription);          
          filter[prescription.doctor_id] = 1;             
        } else {
          total[prescription.doctor_id].push(prescription)
        }
      });

      for(var i in total) {
        var finalFilter = {};
        if(total.hasOwnProperty(i)) {          
          total[i].forEach(function(prescription){
            if(!finalFilter.hasOwnProperty(prescription.doctor_id)){ 
              prescription.count = total[i].length
              filteredPrescriptions.push(prescription);
              finalFilter[prescription.doctor_id] = 1;
            }
          })
          
        }
      }
      $scope.filteredPrescriptions = filteredPrescriptions;
      localManager.setValue("holdPrescriptionData",medical.prescriptions)
    }

  });

  

  $scope.dashboardhome = function () {
    $location.path("/emp");
  }

 
  $scope.viewPrescription = function (id) {
    localManager.setValue("currentPageForPatients","/patient-prescriptions/em");     
    if(id === undefined){
      templateService.holdPrescriptions = medical.prescriptions;      
      $location.path("/patient-prescriptions/em");
    } else {
      var foundRecord = [];
      var toStr = id.toString();     
      medical.prescriptions.forEach(function(record){
        if(toStr === record.doctor_id) {          
          foundRecord.push(record);       
        }
      });
      templateService.holdPrescriptions = foundRecord;  
      $location.path("/patient-prescriptions/em/" + id); //id refers to the id of the doctor that wrote the prescription
    }
   
  }

  
}]);

app.controller("emcheckingOutDoctorController",["$scope","$location","templateService","localManager",
function($scope,$location,templateService,localManager){
  
}]);


app.controller("emprescriptionTemplateController",["$scope","$location","$http","templateService","localManager",
  function($scope,$location,$http,templateService,localManager){
    var prescriptionObjs = [];

    var patient = localManager.getValue("emPatientData")
    var presList = templateService.holdPrescriptions || localManager.getValue("holdPrescriptionData"); 
   
    for(var i = 0; i < presList.length; i++){
      prescriptionObjs.unshift(presList[i]);
    }



    $scope.prescriptionRecordsResult = prescriptionObjs;

    var hasBeenSentTo = {};

    $http({
      method  : 'PUT',
      url     : "/patient/get-prescription/track-record/em",
      data    :   patient,  
      headers : {'Content-Type': 'application/json'} 
      })
    .success(function(data) {
      console.log(data)
      hasBeenSentTo.trackRecord = data;
    });

    $scope.trackedPrescription = function(id,prescription){   
      var holdRecord = [];
      hasBeenSentTo.trackRecord.forEach(function(record){
        if(record.prescriptionId === id) {
          holdRecord.unshift(record);
        }
      });
      templateService.holdTrackRecord = holdRecord;
      templateService.holdPrescriptionForTrackRecord = prescription;
      $location.path("/patient/view-prescription-history/" + id);//
    }


    $scope.downloadPrescription = function (prescription) {
      console.log(prescription)
    }

    //this fn is invoked when patient wish to forward prescription by himself to a phamarcy.
    $scope.forwardPrescription = function (prescription) {  
      alert("You are on an emergency profile account.To gain full access of our services please update your profile")      
      /*templateService.holdPrescriptionToBeForwarded = prescription;
      templateService.holdPrescriptionToBeForwarded.sender = "patient";          
      $location.path("/search/pharmacy"); */        
    }
    
    //this fn is invoked when a patient wish to delete a prescription.
    $scope.deletePrescription = function (id) {
      for(var i = 0; i < $scope.prescriptionRecordsResult.length; i++){
        if($scope.prescriptionRecordsResult[i].prescriptionId === id){
          $scope.prescriptionRecordsResult.splice(i,1);
        }
      }
    }

}]);

app.controller("emtrackedPrescriptionController",["$scope","$location","templateService",function($scope,$location,templateService){
  $scope.presInfo = templateService.holdPrescriptionForTrackRecord;
  $scope.trackedPrescription = templateService.holdTrackRecord;

  //this fn is invoked when patient wish to forward prescription by himself to a phamarcy.
  $scope.forwardPrescription = function (prescription) {       
    alert("You are on an emergency profile account.To gain full access of our services please update your profile")        
  }
}])


//Drug,lab,scan factory

app.factory("labTests",function(){
  var labTestList = {};
labTestList.listInfo = [{name: "ORAL GLOCOSE TOLERANCE TEST (OGTT)",id:1},{name: "TWO HOURS POSTPRANDIAL (2HPP)",id:2},
{name: "FASTING BLOOD SUGAR (FBS)",id:3},
{name: "RANDOM BLOOD SUGAR (RBS)",id:4},{name: "PREGNANCY TEST  ( URINE )",id:5},{name: "SODIUM Na+",id:6},{name: "POTASSIUM K",id:7},
{name: "ELECTROLYTES",id:8},
{name: "BICARBONATE HC03",id:9},{name: "CALCIUMS Ca2",id:10},{name: "UREA",id:11},{name: "CREATININE",id:12},{name: "URINE ELECTROLYTES",id:13},
{name: "KIDNEY FUNCTION TEST(KFT)",id:14},
{name: "ELECTROLYTE/UREA/CREATININE E/U -Cr",id:15},{name: "IN PHOSPHORUS   ( PO4 )( INORGANIC PHOS)",id:16},
{name: "B-HCG. ( BLOOD PREGNANCY TEST )",id:7},
{name: "LFT ( LIVER FUNCTION TEST)",id:18},{name: "SGOT/AST",id:19},{name: "SGPT/ALT",id:20},{name: "ALP (ALKALINE PHOSPHASE)",id:21},
{name: "TOTAL BILIRUBIN",id:22},{name: "DIRECT BILIRUBIN",id:23},
{name: "AIBUMIN",id:24},{name: "TOTAL PROTEIN",id:25},{name: "GLOBULIN",id:26},{name: "CHOLESTEROL",id:27},{name: "TRIGLYCERIDES",id:28},
{name: "URIC ACID",id:29},{name: "GAMMA GT",id:30},
{name: "LIPID PROFILE",id:31},{name: "LOW DENSITY LIPOPROTEIN",id:32},{name: "HIGH DENSITY LIPOPROTEIN ( HDL )",id:33},
{name: "KIDNEY STONE ANALYSIS",id:34},{name: "AMYLASE ( TOTAL )",id:35},
{name: "CREATINE PHOSPHATE KINASE (CK/CPK)",id:36},{name: "ACID PHOSPHATASE",id:37},{name: "PROTEIN ELECTROPHORESIS",id:38},
{name: "URINALYSIS",id:39},{name: "OCCULT  BLOOD  TEST ( OBT)",id:40},
{name: "KIDNEY FUNCTION TEST",id:41},{name: "GLYCATED HAEMOGLOBIN ( HBA1C)",id:42},{name: "24 HRS URINE FOR CREATININE/CREATININE CLEARANCE",id:43},
{name: "PROTEIN/CR. RATIO IN URINE",id:44},
{name: "MICRO ALBUMIN  IN  URINE",id:45},{name: "D -  DIMER",id:46},{name: "CREATINE  KINASE MYOGLOBLIN  ( C K . MB )",id:47},
{name: "IRON  FERRITIN",id:48},{name: "PROTEIN IN 24hrs URINE",id:49},
{name: "PROTEIN  TOTAL IN C S F",id:50},{name: "AMYLASE  ( PANCREATIC )",id:51},{name: "Hs C - REACTIVE  PROTEIN   ( C R P ). QAUNTITATIVE",id:52},
{name: "CREATININE CLEARANCE",id:53},
{name: "Astin",id:54},{name: "LDH",id:55},{name: "Inorgnic Phosporus Serum",id:56},{name: "TROPONIN I (QTY)",id:57},{name: "BENCE JONES PROTEIN",id:58},
{name: "MAGNESIUM",id:59},{name: "BUN",id:60},
{name: "MYOGLOBIN SERUM/URINE",id:61},{name: "SERUM IRON",id:62},{name: "TROPONIN T (QTY)",id:63},{name: "VITAMIN B 12",id:64},
{name: "24HRS URINE FOR CREATININE",id:65},{name: "C- PEPTIDE",id:66},
{name: "C - REACTIVE  PROTEIN   ( C R P ).RAPID",id:67},{name: "VITAMIN D (25 Hydroxyl)",id:68},{name: "VITANIN D (25OH)",id:69},
{name: "GLOMERULAR FILTERATION RATE (GFR)",id:70},
{name: "ANA (ANTINUCLEAR ANTIBODIES)",id:71},{name: "GLUCOSE-6-PHOSPHATE DEHYDROGENASE (G-6PD)",id:72},{name: "1 Hrs. After Ingesting Glucose",id:73},
{name: "2 Hrs. After Ingesting Glucose",id:74},
{name: "CHLAMYDIA IgM ELISA (Serum)",id:75},{name: "CHLAMYDIA IgM ELSA (Serum)",id:76},{name: "CHLAMYDIA IgM ELISA (SERUM)",id:77},
{name: "LIPASE",id:78},{name: "Chlamydia IgG (ELISA) SERUM",id:79},
{name: "Lead",id:90},{name: "Corper",id:91},{name: "Iron metabolism",id:92},{name: "Zinc",id:93},{name: "HPV DNA GENOTYPE",id:94},
{name: "HPV DNA GENOTYPE",id:95},{name: "Sodium Valproate Level:",id:96},
{name: "Serum alpha 1 anti-trypsin (AAT)",id:97},{name: "BLOOD PH",id:98},{name: "24HRS URINE CALCIUM",id:99},
{name: "HOMOCYSTEINE LEVEL IN PLASMA",id:100},
{name: "URINE TOTAL PROTEIN 24HR",id:101},
{name: "ANTI LIVER & KIDNEY MICROSOMAL ANTIBODY (ANTI KLM)",id:102}];


labTestList.listInfo2 = [{name: "PCV ( PACK CELL VOLUME )",id:103},{name: "HB ( HAEMOGLOBIN )",id:104},{name: "RBC ( RED BLOOD CELL COUNT )",id:105},
{name: "WBC TOTAL (Abacus 5)",id:106},{name: "FULL BLOOD COUNT (5 part diff)",id:107},{name: "ESR ( ERYTHROCYTE SEDIMENTATION RATE )",id:108},
{name: "EOSIN COUNT",id:109},
{name: "PLATELET COUNT",id:110},
{name: "RETICULOCYTE COUNT",id:111},{name: "SICKLING TEST",id:112},{name: "GENOTYPE TEST",id:113},{name: "BLOOD GROUP",id:114},
{name: "FULL BLOOD COUNT( MANUAL)",id:115},
{name: "CLOTTING TIME (CT)",id:116},
{name: "PROTHROMBIN TIME (PT)",id:117},{name: "GROUPING ,SCREENING & CROSS -MATCHING 1 PINT OF BLOOD",id:118},{name: "CD3/CD4 COUNT ABSOLUTE",id:119},
{name: "INDIRECT COOMBS TEST",id:120},{name: "WBC  Diff (5parts diff)",id:121},{name: "COAGULATION  PROFILE",id:122},{name: "WBC TOTAL (Manual)",id:123},
{name: "CD 8 Count",id:124},
{name: "HIV VIRAL LOAD COUNT",id:125},
{name: "RHESUS ANTI-BODIES TITRE",id:126},{name: "GROUP ,SCREENING",id:127},{name: "GROUP ,SCREENING & X  MATCH  3  PINT",id:128},
{name: "ONE  PINT  OF  BLOOD( TRANSFUSION )",id:129},{name: "Group  and save",id:130},{name: "DIRECT  COOMBS TEST",id:131},
{name: "CEROBROSPINAL FLUID (CSF) CELL COUNT",id:132},
{name: "WBC DIFF (manual)",id:133},{name: "BLEEDING TIME",id:134},{name: "BLOOD FILM",id:135},{name: "PCV ( PACK CELL VOLUME ) - ADULT",id:136},
{name: "SCREENING AND X OF DONATED BLOOD(DIALYSIS)",id:137},{name: "ACTIVATED PARTIAL THROMBOPLASTIN TIME APTT (PTTK)",id:138},
{name: "COMPLEMENT C3 PROTEIN",id:139},{name: "ANTI DNAse B TEST",id:140},
{name: "ANF ANTI DNA (ds DNA)",id:141},

{name: "COMPLEMENT C4 PROTEIN",id:142},{name: "SCREENING AND X OF DONATED BLOOD(OPD) 1 PINT",id:143},
{name: "SCREENING AND X OF DONATED BLOOD(OPD ) 2 PINTS",id:144},
{name: "SCREENING AND X OF DONATED BLOOD( OPD) 3 PINTS",id:145},
{name: "INR(INTERNATIONAL NORMALISED RATIO)",id:146},{name: "TOTAL IgE",id:147},{name: "CROSS- MATCHING",id:148},{name: "ARTERIAL BLOOD GASES",id:149},
{name: "RECTICULOCYTE PRODUCTION INDEX",id:150},
{name: "HIV 1 & 2 ELISA + P24 ANTIGEN",id:151},{name: "ADULT ALLERGY FOOD SCREEN",id:152},{name: "FOLIC ACID (SERIUM)",id:153},
{name: "FOLIC ACID(SERIUM)",id:154},
{name: "FIBRINOGEN",id:155},{name: "Phadiatops(Inhalants)",id:156},{name: "HUMAN LYMPHOCYTIC T VIRUS 1 & 2 QUANTIFICATN",id:157},
{name: "HB Electrophoresis Quantitative",id:158},{name: "Total IgG ASSAY",id:159},{name: "PROTEIN C",id:160},{name: "PROTEIN S",id:161},
{name: "TOTAL IgA ASSAY",id:162},{name: "TOTAL IgM ASSAY",id:163},{name: "TOTAL IgD ASSAY",id:164},{name: "TOTAL IgG, IgM & IgA ASSAY",id:165},
{name: "Anti Phospholipids Antibody IgG & IgM",id:166}];

labTestList.listInfo3 = [{name: "PAP SMEAR  FOR CYTOLOGY",id:167},{name: "URINE   CYTOLOGY",id:168},{name: "BLOOD  CYTOLOGY",id:169},
{name: "ASPIRATE  FOR CYTOLOGY",id:170},{name: "TISSUE   HISTOLOGY",id:171},{name: "BONE   HISTOLOGY",id:172},{name: "SPUTUM  CYTOLOGY",id:173},
{name: "F N A C( FINE NEEDLE  ASPIRATE FOR CYTOLOGY)",id:174},
{name: "BUCCAL SMEAR FOR CYTOLOGY",id:175},{name: "TISSUE BIOPSY FOR HISTOLOGY",id:176},{name: "GASTRIC BIOPSY HISTOLOGY",id:177},
{name: "TISSUE FUNGI ANALYSIS",id:178},{name: "TISSUE AFB ANALYSIS",id:179},
{name: "TISSUE HISTOLOGY WITH SPECIAL STAINS",id:180}];

labTestList.listInfo4 = [{name: "PSA ( RAPID )",id:181},{name: "B-HCG QUANTITATIVE",id:182},{name: "T3",id:183},
{name: "T4",id:184},{name: "TSH",id:185},{name: "FSH",id:186},{name: "LH",id:187},
{name: "H C G (QTY)",id:188},
{name: "PROGESTERONE",id:189},{name: "PROLACTIN",id:190},{name: "TESTOSTERONE",id:191},
{name: "OESTROGEN",id:192},{name: "THYRIOD FUNCTION TEST (TFT)",id:193},
{name: "CORTISOL",id:194},
{name: "FERTILITY PROFILE",id:195},{name: "OVULATION PROFILE",id:196},{name: "ALFA FETO PROTEIN ( A F P )",id:197},

{name: "TOTAL P S A(QTY)",id:198},{name: "C E A ( CARCINO EMBROYONIC ANTIGEN)",id:199},{name: "CA125",id:200},{name: "CA 15-3",id:201},
{name: "FREE T4",id:202},
{name: "THYROGLOBULIN ANTIBODIES",id:203},
{name: "NT-Pro BNP",id:204},{name: "TSH RECEPTOR ANTIBODIES",id:205},{name: "THYROID PEROXIDASE ANTIBODY",id:206},
{name: "ACTH",id:207},{name: "HUMAN GROWTH HORMONE",id:208},{name: "FREE T3",id:209},{name: "FREE PSA",id:210},
{name: "17-OH PROGESTERONE",id:211},{name: "INSULIN QUANTITATIVE",id:212},{name: "DHEA-S",id:213},

{name: "PLASMA FREE METNEPHRINES",id:214},
{name: "ANDROSTENEDIONE ASSAY",id:215},{name: "MINERALOCORTICOID ASSAY",id:216},{name: "B2- MICROGLOBULIN",id:217},
{name: "PTH (PARATHYROID HORMONE)",id:218},
{name: "CA19-9",id:219},

{name: "HLA-B27",id:220},{name: "ANTI - MULLERIAN HORMONE",id:221},{name: "ANTI-PHOSPHOLIPID ANTIBODY",id:222},
{name: "ANTI-CARDIOLIPIN ANTIBODY",id:223},
{name: "ANTI-CYCLIC CITRULLINATED PEPTIDE ANTIBODIES(Anti- CCP) Quantitative.",id:224},{name: "SOMATOMEDIN (IGF)",id:225},
{name: "ANTI DIRUETIC HORMONE (ADH)",id:226},
{name: "FREE TESTOSTERONE",id:227},

{name: "FREE/TOTAL PSA RATIO",id:228},
{name: "FREE/TOTAL PSA RATIO",id:229},{name: "ANCA (ANTI CYTOPLASMIC AUTOANTIBODIES)",id:230},
{name: "AGBM (ANTI BASMENT GLOMERULAR ANTIBPDIES)",id:231},
{name: "INHIBIN B",id:232},
{name: "DIHYDROTESTOSTERONE LEVEL",id:233},{name: "SEX CHROMOSOME DETERMINATION",id:234}];

labTestList.listInfo5 = [{name: "MALARIA PARASITE",id:235},{name: "URINE MICROSCOPY",id:236},{name: "URINE M/C/S",id:237},
{name: "HVS MICROSCOPY",id:238},{name: "HVS M/C/S",id:239},{name: "ENDOCERVICAL SWAB (ECS) M/C/S",id:240},{name: "URETHRAL SWAB (US) M/C/S",id:241},
{name: "EYE SWAB M/C/S",id:242},
{name: "THROAT SWAB M/C/S",id:243},{name: "EAR SWAB M/C/S",id:244},{name: "SPUTUM AFB x3",id:245},
{name: "SPUTUM M/C/S",id:246},{name: "SEMEN ANALYSIS",id:247},
{name: "SEMEN Analysis/M/C/S",id:248},
{name: "CSF M/C/S",id:249},{name: "CSF ANALYSIS",id:250},{name: "BLOOD CULTURE",id:251},

{name: "STOOL M/C/S",id:252},{name: "GRAM STAIN",id:253},{name: "VDRL",id:254},{name: "Widal",id:255},{name: "BLOOD FOR MICROFILARIAE",id:256},
{name: "RHEUMATOID FACTOR (RAPID)",id:257},
{name: "MANTOUX",id:258},{name: "HEPATITIS B SURFACE   ANTIGEN  (HBs Ag )",id:259},{name: "HEPATITIS C VIRUS ANTIBODY  (H C V RAPID)",id:260},
{name: "SKIN SNIP FOR MICROFILARIAE",id:261},{name: "ASO TITRE",id:262},{name: "HIV 1",id:263},{name: "HELICOBACTER PYLORI TEST ( H. PYLORI )",id:264},
{name: "T.B. SEROLOGY IgG/IgM",id:265},{name: "STOOL ANALYSIS/MICROSCOPY",id:266},{name: "SPUTUM  AFB   X I",id:267},
{name: "ASPIRATE     M / C / S",id:268},

{name: "RHEUMATOID FACTOR  (Quantitative)",id:269},
{name: "WOUND SWAB    M / C / S",id:270},{name: "BUCCAL SWAB FOR   MYCOLOGY",id:271},{name: "SEMEN  M / C / S",id:272},
{name: "NASAL  SWAB  M / C / S",id:273},
{name: "HEPATITIS B Envelope ANTIBODY (HBeAb)",id:274},

{name: "MALARIA PARASITE (Thick and Thin Film)",id:275},{name: "HEPATITIS B Envelope ANTIGEN   (HBeAg)",id:276},
{name: "HEPATITIS B SURFACE  ANTIBODY ( HBsAb )",id:277},
{name: "HEPATITIS B CORE ANTIBODY (HbcAb) ELISA/TOTAL",id:278},
{name: "HEPATITIS B CORE ANTIBODY IgM( HBcAb )",id:279},{name: "HEPATITIS C  VIRUS TEST ( HCV ELISA)",id:280},{name: "CATHETER  TIP M/C/S",id:281},
{name: "ASPIRATE  FOR  A F B",id:282},

{name: "IUCD M/C /S",id:283},
{name: "HAEMO (BLOOD) PARASITES",id:284},{name: "Chlamydia Urine (PCR)",id:285},{name: "Chlamydia Urethra Swab",id:286},
{name: "Chlamydia Cervica Swab",id:287},
{name: "HEPATITIS A VIRUS (IgM)",id:288},{name: "HERPES SIMPLEX 1,2 VIRUS IgG",id:289},{name: "HERPES SIMPLEX 1,2 VIRUS IgM",id:290},
{name: "T. PALLIDIUM ELISA IgG",id:291},{name: "RUBELLA VIRUS IgM",id:292},{name: "VARICELLA IgM",id:293},{name: "VARICELLA IgG",id:294},
{name: "RUBELLA VIRUS IgG",id:295},{name: "CYTOMEGALO VIRUS(CMV) IgG",id:296},{name: "CYTOMEGALO VIRUS (CMV) IgM",id:297},
{name: "TOXOPLASMA GONDII (TOXO IgG)",id:298},
{name: "TOXOPLASMA GONDII (TOXO IgM)",id:299},

{name: "HIV 1 AND 2 SCREENING TEST",id:300},{name: "HEPATITIS B SURFACE ANTIBODY ( HBSAB ) ELISA",id:301},
{name: "HEPATITIS B SURFACE ANTIGEN (HBs Ag ) ELISA",id:302},
{name: "HEPATITIS B CORE ANTIBODY IgG( HBcAb )",id:303},
{name: "HEPATITIS B CORE ANTIBODY (HbcAb) TOTAL",id:304},{name: "BREAST LUMP- M/C/S",id:305},{name: "BREAST LUMP M/C/S",id:306},
{name: "OTHER SWAAB MC/S",id:307},{name: "T.B QUANTIFERON GOLD",id:308},{name: "HIV 1&2 ANTIBODIES",id:309},{name: "HEPATITIS C GENOTYPE",id:310},
{name: "HEPATITIS  B  PROFILE",id:311},

{name: "ROTAVIRUS/ADENOVIRUS COMBI TEST",id:312},{name: "VEROTOXIN/E.COLI 0157 COMBI TEST",id:313},{name: "PAEDIATRIC ALLERGY FOOD SCREEN",id:314},
{name: "HERPES SIMPLEX VIRUS I (HSVI) IgG",id:315},{name: "HERPES SIMPLEX VIRUSI (HSV-I)IgM",id:316},
{name: "HERPES SIMPLEX VIRUSII (HSV-II)IgG",id:317},
{name: "HERPES SIMPLEX VIRUSII(HSV-II)IgM",id:318},{name: "PCR- HIV QUANTITATIVE",id:319},
{name: "HAPETITIS B SURFACE ANTIGEN (qHBSAg) QUANTIFICATION",id:320},
{name: "Skin Scrapping for Fungal test (KOH)",id:321},{name: "Sputum fungal Test (M/C/S)",id:322},
{name: "CHLAMYDIA IgG ELISA (Serum)",id:323},{name: "Chlamydia IgM (ELISA) SERUM",id:324},{name: "MEASLES IgG/IgM",id:325},
{name: "MUMPS IgG/IgM",id:326},{name: "SKIN SCRAPPING FOR MYCOLOGY",id:327},{name: "HIV DRUG RESISTANT ASSAY",id:328},
{name: "HEPATITIS B CORE ANTIBODY IgM ELISA",id:329}];

labTestList.listInfo6 = [{name: "CARBAMAZEPINE-S (TEGRETOL)",id:330},{name: "CANNABIS (blood/urine)",id:331},{name: "COCAINE (Urine )",id:332},
{name: "OPIATES (Urine )",id:333},{name: "MORPHINE (Urine )",id:334},{name: "BARBITURATES (Urine )",id:335},{name: "AMPHETAMINE (Urine )",id:336},
{name: "SERUM LEVETIRACETAM",id:337},{name: "BENZOLEDIAZIPAN",id:338},{name: "TACROLIMUS CONCENTRATION IN PLASMA",id:339},
{name: "AFLATOXIN B1 LEVEL:",id:87},{name: "AFLATOXIN- M1 LEVEL:",id:88},{name: "ALCOHOL (BLOOD)",id:89}];

labTestList.listInfo7 = [{name: "HBV DNA VIRAL LOAD",id:80},{name: "HCV RNA VIRAL LOAD",id:81},{name: "CELLULAR/GENETIC DNA TEST",id:82},
{name: "HPV DNA TEST",id:83},
{name: "HLA B27 STATUS",id:84},{name: "ANGIOTENSIN CONVERTING ENZYME (ACE LEVELS)",id:85},{name: "BCR-FGFR1 QUANTITATION",id:86}];
  
  
  return labTestList;

});

//radiology data

app.factory("scanTests",function(){
var scanTestList = {};

scanTestList.listInfo1 = [{name: "Chest X-ray (CXR)  1 view",price: 1000,id:1},{name: "Skull X-ray (FXR)  (2 View)",price:800,id:2},
{name: "Pelvic  X-ray (1 view)",id:3},
{name: "Intravenous Urography (IVU)",id:4},{name: "Barium Swallow (BS)",id:5},{name: "Barium Meal & follow through (BM&FT)",id:6},
{name: "Retrograde Cystourethrogram(Uretrography)",id:7},{name: "Barium Enema",id:8},
{name: "POST-NASAL SPACE(P.N.S)  Nasopharnyx (1 View)",id:9},{name: "Shoulder X-Ray (1 view)",id:10},
{name: "Abdomen X-ray",id:11},{name: "Abdominal (Erect & Supine) X-ray",id:12},{name: "Ankle X-ray (2 Views)",id:13},
{name: "Calcaneum X-ray (2 Views)",id:14},
{name: "Neck/Cervical X-ray (2 Views)",id:15},{name: "Coccyx X-ray",id:16},{name: "Elbow joint X-ray (2 Views)",id:17},
{name: "Femur/Thigh X-ray (2 views)",id:18},{name: "Finger X-ray (2 views)",id:19},{name: "Foot/Toe X-ray (2 Views)",id:20},
{name: "Hand (Carpal/Metacarpal Bones) X-ray (2 Views)",id:21},{name: "Hip Joint X-ray (2 Views)",id:22},
{name: "Humerus/Upper Arm X-ray (2 Views)",id:23},
{name: "Knee X-ray (2 views)",id:24},{name: "Lumbo Sacral Spines X-ray (2 views)",id:25},{name: "Mastoid Air Cells",id:26},
{name: "Micturating Cystourethrogram",id:27},{name: "Scapula X-ray (2 Views)",id:28},{name: "Sternum X-ray (2 Views)",id:29},
{name: "Thoracic Inlets X-Ray (2 Views)",id:30},
{name: "Tibia/Fibula (Leg) X-ray (2 Views)",id:31},{name: "Ulna/Radius (Forearm) X-ray",id:32},{name: "Wrist X-ray (2 views)",id:33},
{name: "Forearm/Ulna/Radius X-ray (2 views)",id:34},{name: "Jaw Maxilla and Mandibles X-ray (2 Views)",id:35},
{name: "Clavicular X-Ray (1 View)",id:36},{name: "Sternoclavicular Joints (2 views)",id:37},{name: "Thoracic Vertabrae X-Ray (2 Views)",id:38},
{name: "Temporomandibular Joint (5 Views)",id:39},{name: "X-ray Paranasal sinuses - OM, OF, LAT.",id:40},
{name: "CHEST X-RAY(PA and LAT.) 2 VIEWS",id:41},{name: "Ankle X-ray(3views)",id:42},{name: "Foot/Toe X-ray (3Views)",id:43},
{name: "Fistulogram",id:44},
{name: "Shoulder X-ray(3viiews)",id:45},{name: "Shoulder X-ray(2views)",id:46},{name: "VENOGRAM",id:47},
{name: "Occipito-mental(OM) X-ray (1 view)",id:48},
{name: "Hand X-ray (Carpal/Metacarpal:Both Hands)(4views)",id:49},
{name: "Foot/Toe X-ray (Both Feet)(4views)",id:50},{name: "Knee X-ray (Both knees) (4views)",id:51},{name: "Ankle X-ray (Both Ankles)(4views)",id:52},
{name: "Wrist X-ray (Both wrists) (4Views)",id:53},
{name: "Tibia/Fibula X-ray (Both Legs)(4Views)",id:54},{name: "Femur/Thigh X-ray(Both Femoral/Thighs) (4Views)",id:55},
{name: "X-ray Reporting Only",id:56},{name: "Myelogram",id:57},{name: "Clavicle X-ray (2 views)",id:58},{name: "Pelvimetry X-ray",id:59},
{name: "Mastoids",id:60},
{name: "TEMPORO-MANDIBULAR JOINT(TMJ) X-RAY X-ray 2views",id:61},{name: "Digital X-ray",id:62},{name: "LATERAL SOFT TISSUE (NECK)",id:63},
{name: "Cervical Spine(Flexion and Extension) 2 Views",id:64},{name: "Retrograde Urethrogram",id:65},{name: "X-Ray CD Reprinting",id:66},
{name: "HYSTEROSALPINOGRAM -HSG (DISPOSABLE)",id:67},{name: "HYSTEROSALPINOGRAM -HSG (NON-DISPOSABLE)",id:68},
{name: "PROSTRATE USS",id:69},{name: "Lumbo Sacral Spine X-ray (3 Views)",id:70},
{name: "Hand/Finger - NHIS",id:71},{name: "Wrist - NHIS",id:72},{name: "Foream - NHIS",id:73},{name: "Elbow - NHIS",id:74},
{name: "Humerus - NHIS",id:75},{name: "Shoulder - NHIS",id:76},{name: "Clavicle - NHIS",id:77},
{name: "Foot/Toe - NHIS",id:78},{name: "Ancle-NHIS",id:79},
{name: "Leg (Tibia/Fibula NHIS",id:80},{name: "Knee -NHIS",id:81},{name: "Hip -NHIS",id:82},{name: "Femur or tThigh -NHIS",id:83},
{name: "Pelvic -NHIS",id:84},{name: "Chest(PA/AP) - NHIS",id:85},{name: "Chest(PA/Latereal) - NHIS",id:86},
{name: "Chest For Ribs (Oblique) - NHIS",id:87},{name: "Apical/Lordotic - NHIS",id:88},{name: "Stemum - NHIS",id:89},
{name: "Thoracic Inlet - NHIS",id:90},
{name: "Cervical Spine - NHIS",id:91},
{name: "Lateral Neck(Soft Tissue - NHIS",id:92},{name: "Thoracic Spine - NHIS",id:93},{name: "Thoraco Lumba Spine - NHIS",id:94},
{name: "Lumbar Spine - NHIS",id:95},{name: "Lumbo Sacral Spine - NHIS",id:96},{name: "Scrum - NHIS",id:97},
{name: "Sacro Illiac Joint (S.I.J) - NHIS",id:98},
{name: "Cervical Spine (Oblique) - NHIS",id:99},{name: "Sacro-coccxy - NHIS",id:100},
{name: "Abdomen(Plain) - NHIS",id:101},{name: "Abdomen(Eract/Supine) - NHIS",id:102},{name: "Abdomen (Pregnancy) - NHIS",id:103},
{name: "Skule(AP/Lat) - NHIS",id:104},{name: "Skulll(Pa/Lat/Townes) - NHIS",id:105},
{name: "Mastoids - NHIS",id:106},{name: "Sinuses AP/LNT/OM - NHIS",id:107},{name: "Mandibles (Jaw) - NHIS",id:108},
{name: "Temporo Mandibular Joints (TM) - NHIS",id:109},{name: "Sella Turcica - NHIS",id:111},{name: "Tangental - NHIS",id:112},
{name: "Occipito-Mental (OM) - NHIS",id:113},
{name: "Periapical - NHIS",id:114},{name: "Bitewings - NHIS",id:115},{name: "Panoramic View - NHIS",id:116},{name: "Barium Swallow - NHIS",id:117},
{name: "Barium Meal/Follow through - NHIS",id:118},{name: "Barium enema - NHIS",id:119},{name: "Intravenus Urography (IVU) - NHIS",id:120},
{name: "Hysterosalpingogram (HSG) - NHIS",id:121},{name: "Cysto-Urethorgram - NHIS",id:122},{name: "Fistulogram - NHIS",id:123},
{name: "Myelogram - NHIS",id:124},{name: "Skeletal Survey (Adult) - NHIS",id:125},{name: "Electrocadography - NHIS",id:126},
{name: "Eletro Encephalography",id:127},{name: "Mycturating Cyto-Urethrogram - NHIS",id:128},{name: "Phlebogram-One Leg - NHIS",id:129},
{name: "Venogram-One Leg - NHIS",id:130},{name: "Arthrogram - NHIS",id:131},{name: "Sialogram - NHIS",id:132},{name: "Sinogram - NHIS",id:133},
{name: "MRI Scan - NHIS",id:134},{name: "CT Scan - NHIS",id:135},{name: "Mammography - NHIS",id:136}];

/*******Listing of Ultrasonography *************/    

scanTestList.listInfo2 = [{name: "Obstetric/Gynaecology Scan",id:137},{name: "Female Pelvic Scan - With print out",id:138},
{name: "Female Pelvic Scan - Without print out",id:139},{name: "Abdominal Scan emphasis - Liver (Hepatobillary) Scan",id:140},
{name: "Ophthalmic Scan Per Eye",id:141},{name: "ECHOCARDIOGRAPHY(Cardiac Echo)",id:142},{name: "SPIROMETRY TEST",id:143},
{name: "Doppler Ultrasound Per Region",id:144},{name: "Abdominal Scan",id:145},{name: "Abdominal Scan emphasis - Kidney (Renal Scan)",id:146},
{name: "Abdominal Scan emphasis - Bowels",id:147},
{name: "Abdominal Scan emphasis - Pancrease",id:148},{name: "Abdominal Scan emphasis - Spleen",id:149},
{name: "Scrotal/Testicular Scan",id:150},{name: "Soft Tissue (Breast) scan",id:151},{name: "BREAST SCAN",id:152},
{name: "TRANSVAGINAL SCAN",id:153},{name: "FONTANELLE USS",id:154},{name: "Folliculometry Scan",id:155},
{name: "Soft Tissue(Neck/Thyroid etc) Scan",id:156},
{name: "TRANSRECTAL SCAN",id:157},{name: "THYROID SCAN",id:158},{name: "Soft Tissue(Muscles) Ultrasound",id:159},
{name: "Soft Tissue(Thigh) Scan",id:160},
{name: "STRESS ECHOCARDIOGRAPHY(Stress Cardiac Echo)",id:161},{name: "Obstetric - 4D",id:162},{name: "Biophysical Profile - Obstetric",id:163},
{name: "Ultrasound Print Out Per Sheet",id:164},{name: "Ultrasound Guided Biopsy",id:165},{name: "Abdomino-Pelvic Scan",id:166},
{name: "SONO-HSG",id:167},{name: "HAND/FINGER (NHIS)",id:168},{name: "Obstetric Scan - NHIS",id:169},{name: "Abdominal Scann - NHIS",id:170},
{name: "Pelvic Scan - NHIS",id:171},{name: "Breast Scan - NHIS",id:172},{name: "Bladder Scan - NHIS",id:173},
{name: "Abdominal Pelvic Scan - NHIS",id:174},{name: "Prostate Scan - NHIS",id:175},{name: "Thyroid Scan - NHIS",id:176},
{name: "Testes/scrotal Scan (each) - NHIS",id:177},{name: "Ovulometry/Tv Scan - NHIS",id:178},{name: "Trans-Fontanellar  (Children) - NHIS",id:179}];

/********************Listing of Computerized Tomography Scan (C.T. SCAN)  **********************/   


scanTestList.listInfo3 = [{name: "CT Scan Interpreting Only",id:180},{name: "BRAIN/SKULL C.T.SCAN-PLAIN (P)",id:181},
{name: "Neck CT Scan (Cervical)-PLAIN",id:182},{name: "CT Scan Sinuses/Nasal Cavity",id:183},{name: "Abdominal/Pelvic CT Scan-PLAIN",id:184},
{name: "CT Scan Pelvic Girdle (Pelvis)",id:185},{name: "Thoracic Spine CT Scan",id:186},{name: "Chest CT Scan-PLAIN",id:187},
{name: "CT Scan Femur (thigh) and Related Soft Tissues",id:188},{name: "C.T.SCAN-Angiography Whole Body",id:189},
{name: "C.T.SCAN-Angiography Regional",id:190},{name: "C.T.SCAN-Angiography (Interventional) Including Introduction of Stents",id:200},
{name: "C.T.SCAN CD Result Recording Per Plate",id:201},{name: "Hand CT Scan (Fingers Included)",id:202},

{name: "CT Scan Upper Arm (Humerus and Related Soft Tissues)",id:203},{name: "CT Scan Lower Arm (Ulna and Redius and Related Soft Tissues)",id:204},
{name: "CT Scan Tibia and Fibula and Related Soft Tissues",id:205},{name: "Lumbosacral Spine C.T.SCAN",id:206},
{name: "BRAIN/SKULL C.T.SCAN-SINGLE CONTRAST (P)",id:207},{name: "ABDOMINAL/PELVIC C.T.SCAN-SINGLE CONTRAST",id:208},
{name: "ABDOMINAL/PELVIC C.T.SCAN-DOUBLE CONTRAST",id:209},{name: "ABDOMINAL/PELVIC C.T.SCAN-TRIPPLE CONTRAST",id:210},
{name: "CHEST C.T.SCAN-SINGLE CONTRAST",id:211},{name: "CHEST C.T.SCAN-DOUBLE CONTRAST",id:212},{name: "CHEST C.T.SCAN-TRIPPLE CONTRAST",id:213},
{name: "KNEE JOINT C.T.SCAN",id:214},{name: "NECK C.T. SCAN (SoftTissue) -Single Contrast",id:215},{name: "ELBOW JOINT C.T.SCAN",id:216},
{name: "ORBITAL C.T.SCAN",id:217},{name: "C.T.SCAN-PELVIMETRY",id:218},{name: "EAR/MASTOIDS C.T.SCAN",id:219},{name: "C.T.SCAN-MYELOGRAM",id:220},
{name: "MRI",id:221},
{name: "MRI REPORTING ONLY",id:222},{name: "ANKLE C.T.SCAN",id:223},{name: "C.T.SCAN-Angiography including Tripple Screen/Cardiac Study",id:224},
{name: "C.T.SCAN- Perfusion(Specify Organ/Tissue)",id:225},{name: "C.T.SCAN-Colonoscopy(Virtual Colonoscopy)",id:226},
{name: "C.T.SCAN-Pneumography",id:227},{name: "C.T.SCAN-Calcium Scoring (for increased Specificity of FRAMINGHAM SCORE)",id:228},
{name: "C.T.SCAN-KUB (Kidney,Ureter & Bladder)",id:229},{name: "C.T.SCAN-Bronchoscopy(Virtual Bronchoscopy)",id:230},

{name: "C.T.SCAN-VENOGRAPHY",id:231},{name: "C.T Scan of the jaws (maxilla and mandibles and related soft tissues",id:232},
  {name: "CT Scan Paranasal Sinusis",id:233},
{name: "CT Scan Myelography",id:234},{name: "CT Scan IVU",id:235},{name: "CT Scanogram",id:236},
{name: "CT Scan Abdomen",id:237},{name: "C.T Scan Facial Bones",id:238},
{name: "C.T Scan Head and Neck",id:239},{name: "CT-Scan-PELVIMETRY",id:240},{name: "CT CD Reprinting",id:241},
{name: "ANGIOGRAPHY STUDIES",id:242},{name: "ABDOMINAL/PELVIC C.T. SCAN-DOUBLE/TRIPLE CONTRAST (P)",id:243},
{name: "ABDOMINAL/PELVIC C.T. SCAN-SINGLE CONTRAST (P)",id:244},
{name: "ABDOMINAL/PELVIC C.T. SCAN-PLAN (P)",id:245},
{name: "ANKLE C.T. SCAN (P)",id:246},{name: "S",id:247},{name: "BRAIN/SKULL C.T.SCAN-SINGLE CONTAST",id:248},
{name: "C. T. SCAN FACIAL BONES (P)",id:249},
{name: "C. T. SCAN HEAD AND NECK (P)",id:250},{name: "C. T. SCAN OF THE JAWS (MAXILLA AND MANDIBLES) (P)",id:251},
{name: "C. T. SCAN CD RESULT RECORDING PER PLATE (P)",id:252},{name: "C.T. SCAN REPORTING (P) (P)",id:253},
{name: "C. T. SCAN-ANGIOGRAPHY (CARDIAC STUDY) (P)",id:254},{name: "C. T. SCAN-ANGIOGRAPHY REGIONAL (P)",id:255},

{name: "C. T. SCAN-ANGIOGRAPHY WHOLE BODY (P)",id:256},
{name: "C. T. SCAN-CALCIUM SCORING (FOR INCREASED SPECDIFICITY OF FRAMINGHAM SCORE) (P)",id:257},
{name: "C. T. SCAN-COLONOSCOPY (VIRTUAL COLONOSCOPY) (P)",id:258},{name: "C. T. SCAN-KUB (KIDNEY, URETER & BLADDER) (P)",id:259},
{name: "CHEST C.T. SCAN-SINGLE CONTRAST (P)",id:260},{name: "CHEST C.T. SCAN-PLAIN (P)",id:261},{name: "CHEST C.T. SCAN-DOUBLE CONTRAST (P)",id:262},
{name: "CHEST C.T. SCAN-TRIPLE CONTRAST (P)",id:263},{name: "CHEST C.T. SCAN REPORTING (P)",id:264},{name: "C.T. SCAN ABDMEN (P)",id:265},
{name: "CHEST C.T. SCAN FEMUR (THIGH) AND RELATEED SOFT TISSUES (P)",id:266},{name: "C.T. SCAN INTERPRETING ONLY (P)",id:267},
{name: "C.T. SCAN IVU (P)",id:268},{name: "C.T. SCAN LOWER ARM (ULNA AND RADIUS AND RELATED SOFT TISSUES) (P)",id:269},
{name: "C.T. SCAN MYELOGRAPHY (P)",id:270},{name: "C.T. SCAN PELVIC GIRDLE (PELVIS) (P)",id:271},{name: "C.T. SCAN SINUSES/NASAL CAVITY (P)",id:272},
{name: "C.T. SCAN TIBIA AND FIBULA AND RELATEDE SOFT TISSUES (P)",id:273},{name: "C.T. SCAN UPPER ARM (HUMERUS AND RELATED SOFT TISSUES) (P)",id:274},
{name: "EAR/MASTODIDS C.T. SCAN (P)",id:275},{name: "ELBOW JOINT C.T. SCAN (P)",id:276},
{name: "HAND C. T. SCAN (FINGERS INCLUDED) (P)",id:277},{name: "KNEE JOINT C.T. SCAN (P)",id:278},{name: "LUMBO-SACRAL SPINE C.T. SCAN (P)",id:279},
{name: "NECK C. T. SCAN (SOFT TISSUE) - SINGLE CONTRAST (P)",id:280},{name: "NECK C. T. SCAN (CERVICAL) - PLAIN (P)",id:281},
{name: "ORBITAL C.T. SCAN (P)",id:282},{name: "THORACIC SPINE S.T. SCAN (P)",id:283},{name: "C.T. HEAD AND NECK (P)",id:284},
{name: "THORACOLUMBAR CT",id:285},
{name: "C. T. BRAIN",id:286}]


/************** Listing of ECG  ****************/

scanTestList.listInfo4 = [{name: "ECG  12 Lead/Analysis NORMAL ECG @ REST)",id:287},{name: "STRESS ECG(ECG @ EXERCISE)",id:288},
{name: "HOLTER/AMBULATORY ECG",id:289}];

/**************** Listing of MRI  ************/ 

scanTestList.listInfo5 = [{name: "MRI - ABDOMINO-PELVIC SCAN-SINGLE CONTRAST",id:290},{name: "MRI - ABDOMINO-PELVIC SCAN PLAIN",id:291},
{name: "MRI - ANKLE SCAN",id:292},{name: "MRI - BRAIN SCAN-PLAIN",id:293},{name: "MRI - BRAIN SCAN-CONTRAST",id:294},
{name: "MRI - RESULT RECORDING PER PLATE(FPR REPLACEMENT)",id:295},
{name: "FUNCTIONAL MRI (FMRI)",id:296},{name: "MRI -CERVICAL SPINE",id:297},{name: "MRI - THORACIC SPINE",id:298},
{name: "MRI - LUMBOSACRAL SPINE",id:299},
{name: "MRI - ABDOMEN",id:300},
{name: "MRI - PELVIC",id:301},{name: "MRI - CHEST",id:302},{name: "MRI - EXTREMITIES-KNEES, ANKLES, SHOULDER JOINT",id:303},
{name: "MRI - ANGIOGRAPHY STUDIES",id:304},{name: "MRI Spectroscopy",id:305},{name: "MRI - Screening One Sequence",id:306},
{name: "MRI CD Reprinting",id:307},
{name: "MRI - Chol-Pancreatography",id:308},{name: "MRI -ANGIOGRAPHY STUDIES (PEDIATRIC)",id:309},{name: "MRI CHOL-PANCREATOGRAPHY (PEDIATRIC)",id:310},
{name: "MRI SCREENING ONE SEQUENCE (PEDIATRIC)",id:311},{name: "MRI -ABDOMINO-PELVIC SCAN-SINGLE-CIBTRAST (PEDIATRIC)",id:312},
{name: "MRI -ABDOMINO-PELVIC SCAN-PLAIN (MRCP) (PEDIATRIC)",id:313},{name: "MRI -ANKLE SCAN (PEDIATRIC)",id:314},
{name: "MRI -BRAIN SCAN-PLAIN (PEDIATRIC)",id:315},{name: "MRI -BRAIN SCAN-CONTRAST (ANGIO)",id:316},
{name: "MRI REPORTING ONLY (PEDIATRIC)",id:317},{name: "MRI RESULT RECORDING PER PLATE (FOR A REPLACEMENT) (PEDIATRIC)",id:318},
{name: "MRI CD REPRINTING (PEDIATRIC)",id:319},{name: "FUNCTIONAL MRI (FMR)(PEDIATRIC)",id:320},
{name: "MRI -CERVICAL SPINE(PEDIATRIC)",id:321},{name: "THORACIC SPINE(PEDIATRIC)",id:322},{name: "MRI -LUMBOSACRAL SPINE(PEDIATRIC)",id:323},
{name: "MRI -ABDOMEN(PEDIATRIC)",id:324},
{name: "PELVIC SCAN SINGLE CONTRAST(PEDIATRIC)",id:325},{name: "MRI -CHEST(PEDIATRIC)",id:326},
{name: "MRI -EXTREMITIES-KNEES, ANKLES, SHOULDER JOINT(PEDIATRIC)",id:327},
{name: "MRI Total Spine (CBN)",id:328},{name: "MRI - LEG",id:329},{name: "MRI BRAIN (P) WITH CONTRAST",id:330},
{name: "MRI PELVIS PAEDIATRICS",id:331}];


/***************** Listing of MAMMOGRAM   ********************/

scanTestList.listInfo6 = [{name: "MAMMOGRAPHY - SINGLE BREAST(ADDITIONAL VIEW)",id:332},
{name: "MAMMOGRAPHY - SINGLE BREAST(PREVIOUS MASTECTOMY)",id:333},
{name: "MAMMOGRAPHY WITH STEREOTACTIC BIOPSY",id:334},{name: "MAMMOGRAPHY - BOTH BREASTS (TWO VIEWS)",id:335}];

  
  return scanTestList;
});

app.factory("Drugs",function(){

  var listOfDrugs = [{name: "Abilify",id:1},{name: "Acetaminophen",id:2},{name: "Acyclovir",id:3},
  {name: "Adderall",id:4},{name: "Albuterol",id:5},{name: "Aleve",id:6},{name: "Allopurinol",id:7},
  {name: "Alprazolam",id:8},{name: "Ambien",id:9},{name: "Amiodarone",id:10},{name: "Amitriptyline",id:11},{name: "Amlodipine",id:12},
  {name: "Amoxicillin",id:13},{name: "Aricept",id:14},
  {name: "Aspirin",id:15},{name: "Atenolol",id:6},{name: "Ativan",id:17},{name: "Atorvastatin",id:18},
  {name: "Augmentin",id:19},{name: "Azithromycin",id:20},
  {name: "Baclofen",id:21},{name: "Bactrim",id:22},{name: "Bactroban",id:23},{name: "Belsomra",id:24},
  {name: "Benadryl",id:25},{name: "Benicar",id:26},
  {name: "Biaxin",id:27},{name: "Bisoprolol",id:28},{name: "Boniva",id:29},{name: "Breo Ellipta",id:30},
  {name: "Brilinta",id:31},{name: "Brovana",id:32},{name: "Bupropion",id:33},
  {name: "Buspar",id:34},{name: "Buspirone",id:35},{name: "Butrans",id:36},{name: "Bydureon",id:37},{name: "Byetta",id:38},
  {name: "Bystolic",id:39},
  {name: "Cardizem",id:40},{name: "Carvedilol",id:41},{name: "Celebrex",id:42},{name: "Celexa",id:43},{name: "Cephalexin",id:44},
  {name: "Cetirizine",id:45},
  {name: "Cialis",id:46},{name: "Cipro",id:47},{name: "Ciprofloxacin",id:48},{name: "Citalopram",id:49},
  {name: "Claritin",id:50},{name: "Clindamycin",id:51},{name: "Clonazepam",id:52},{name: "Clonidine",id:53},{name: "Coreg",id:54},
  {name: "Coumadin",id:55},
  {name: "Cozaar",id:56},{name: "Crestor",id:57},{name: "Cyclobenzaprine",id:58},{name: "Cymbalta",id:59},
  {name: "Daliresp",id:60},{name: "Depakote",id:61},
  {name: "Detrol",id:62},{name: "Dexamethasone",id:63},{name: "Dextromethorphan",id:64},{name: "Diazepam",id:65},
  {name: "Diclofenac",id:66},{name: "Diflucan",id:67},
  {name: "Digoxin",id:68},{name: "Dilantin",id:69},{name: "Dilaudid",id:70},{name: "Diltiazem",id:71},
  {name: "Diovan",id:72},{name: " Diphenhydramine",id:73},{name: "Ditropan",id:74},{name: "Doxazosin",id:75},{name: "Doxycycline",id:76},
  {name: "Dulera",id:77},
  {name: "DuoNeb",id:78},{name: "Dyazide",id:79},{name: "Effexor",id:80},{name: "Effient",id:81},{name: "Elavil",id:82},
  {name: "Eligard",id:83},{name: "Eliquis",id:84},
  {name: "Elocon",id:85},{name: "Enalapril",id:86},{name: "Enbrel",id:87},{name: "Entresto",id:88},{name: "EpiPen",id:89},
  {name: "Epogen",id:90},
  {name: "Erythromycin",id:91},{name: "Estrace",id:92},{name: "Estradiol",id:93},{name: "Etodolac",id:94},
  {name: "Evista",id:95},{name: "Excedrin",id:96},{name: "Exelon",id:97},
  {name: "Exforge",id:98},{name: "Ezetimibe",id:99},{name: "Famotidine",id:100},{name: "Farxiga",id:101},{name: "Femara",id:102},
  {name: "Fenofibrate",id:103},
  {name: "Fentanyl",id:104},{name: "Ferrous Sulfate",id:105},{name: "Fetzima",id:106},{name: "Fioricet",id:107},
  {name: "Fish Oil",id:108},{name: "Flagyl",id:109},
  {name: "Flexeril",id:110},{name: "Flomax",id:111},{name: "Flonase",id:112},{name: "Flovent",id:113},
  {name: "Fluoxetine",id:114},{name: "Focalin",id:115},{name: "Folic Acid",id:116},{name: "Forteo",id:117},
  {name: "Fosamax",id:118},{name: "Furosemide",id:119},
  {name: "Furosemide",id:120},{name: "Gabapentin",id:121},{name: "Gammagard",id:122},{name: "Gamunex",id:123},
  {name: "Garcinia Cambogia",id:124},{name: "Gardasil",id:125},{name: "Gemfibrozil",id:126},
  {name: "Gemzar",id:127},{name: "Genvoya",id:128},{name: "Geodon",id:129},{name: "Gilenya",id:130},
  {name: "Gilotrif",id:131},{name: "Gleevec",id:132},{name: "Glipizide",id:133},
  {name: "Glucophage",id:134},{name: "Glucotrol",id:135},{name: "Glucovance",id:136},{name: "Glyburide",id:137},{name: "Glyxambi",id:138},
  {name: "Gralise",id:139},{name: "Guaifenesin",id:140},
  {name: "Halaven",id:141},{name: "Harvoni",id:142},{name: "Havrix",id:143},{name: "Hcg",id:144},{name: "Heparin",id:45},
  {name: "Herceptin",id:146},{name: "Hetlioz",id:147},
  {name: "Hizentra",id:148},{name: "Horizant",id:149},{name: "Humalog",id:150},{name: "Humira",id:151},
  {name: "Humulin",id:152},{name: "Humulin N",id:153},{name: "Hydrochlorothiazide",id:154},
  {name: "Hydrocodone",id:155},{name: "Hydroxychloroquine",id:156},{name: "Hydroxyzine",id:157},{name: "Hysingla ER",id:158},
  {name: "Hytrin",id:159},{name: "Hyzaar",id:160},{name: "Ibrance",id:161},
  {name: "Ibuprofen",id:162},{name: "Imbruvica",id:163},{name: "Imdur",id:164},{name: "Imitrex",id:165},{name: "Imodium",id:166},
  {name: "Implanon",id:167},{name: "Incruse Ellipta",id:168},{name: "Inderal",id:169},{name: "Injectafer",id:170},
  {name: "Inlyta",id:171},{name: "Insulin",id:172},{name: "Intelence",id:173},
  {name: "Intuniv",id:174},{name: "Invega",id:175},{name: "Invokamet",id:176},
  {name: "Invokana",id:177},{name: "Isentress",id:178},{name: "Isosorbide",id:179},{name: "Istalol",id:180},
  {name: "Jakafi",id:181},{name: "Jalyn",id:182},{name: "Janumet",id:183},{name: "Januvia",id:184},
  {name: "Jardiance",id:185},{name: "Jentadueto",id:186},{name: "Jetrea",id:187},
  {name: "Jevtana",id:188},{name: "Jublia",id:189},{name: "Juvederm",id:190},{name: "Juvisync",id:191},
  {name: "Juxtapid",id:192},{name: "K-dur",id:193},{name: "Kadcyla",id:194},
  {name: "Kadian",id:195},{name: "Kalbitor",id:196},{name: "Kaletra",id:197},{name: "Kapidex",id:198},
  {name: "Kapvay",id:199},{name: "Kazano",id:200},{name: "Keflex",id:201},
  {name: "Kenalog",id:202},{name: "Keppra",id:203},{name: "Kerydin",id:204},{name: "Keytruda",id:205},{name: "Kineret",id:206},
  {name: "Klonopin",id:207},
  {name: "Klor-con",id:208},{name: "Kombiglyze XR",id:209},{name: "Krill Oil",id:210},
  {name: "Kyprolis",id:211},{name: "Kytril",id:212},{name: "Lamictal",id:213},{name: "Lansoprazole",id:214},
  {name: "Lasix",id:215},{name: "Latuda",id:216},{name: "Levaquin",id:217},{name: "Levothyroxine",id:218},
  {name: "Levoxyl",id:219},{name: "Lexapro",id:220},{name: "Lidoderm",id:221},
  {name: "Linzess",id:222},{name: "Lipitor",id:223},{name: "Lisinopril",id:224},{name: "Lithium",id:225},
  {name: "Loratadine",id:226},{name: "Lorazepam",id:227},
  {name: "Losartan",id:228},{name: "Lovenox",id:229},{name: "Lumigan",id:230},{name: "Lupron",id:231},{name: "Lyrica",id:232},{name: "Macrobid",id:233},
  {name: "Meclizine",id:234},{name: "Melatonin",id:235},{name: "Meloxicam",id:236},{name: "Metformin",id:237},
  {name: "Methadone",id:238},{name: "Methocarbamol",id:239},{name: "Methotrexate",id:240},{name: "Methylprednisolone",id:241},
  {name: "Metoclopramide",id:242},{name: "Metoprolol",id:243},
  {name: "Metronidazole",id:244},{name: "MiraLax",id:245},{name: "Mirapex",id:246},{name: "Mirtazapine",id:247},
  {name: "Mobic",id:248},{name: "Morphine",id:249},{name: "Motrin",id:250},{name: "Mucinex",id:251},
  {name: "Naloxone",id:252},{name: "Namenda",id:253},{name: "Naprosyn",id:254},{name: "Naproxen",id:255},{name: "Nasacort",id:256},
  {name: "Nasonex",id:257},{name: "Neurontin",id:258},{name: "Nexium",id:259},{name: "Niacin",id:260},
  {name: "Niaspan",id:261},{name: "Nicotine",id:262},{name: "Nifedipine",id:263},{name: "Nitrofurantoin",id:264},{name: "Nizoral",id:265},
  {name: "Norco",id:266},{name: "Nortriptyline",id:267},{name: "Norvasc",id:268},
  {name: "NovoLog",id:269},{name: "Nucynta",id:270},{name: "Nuvigil",id:271},{name: "Ofev",id:272},{name: "Omeprazole",id:273},
  {name: "Omnicef",id:274},{name: "Ondansetron",id:275},{name: "Onfi",id:276},
  {name: "Onglyza",id:277},{name: "Opana",id:278},{name: "Opdivo",id:279},{name: "Orapred",id:280},{name: "Orencia",id:281},
  {name: "Orlistat",id:282},{name: "Ortho Tri-Cyclen",id:283},{name: "Orthovisc",id:284},
  {name: "Oseltamivir",id:285},{name: "Osphena",id:286},{name: "Otezla",id:287},{name: "Oxybutynin",id:289},{name: "Oxycodone",id:290},
  {name: "Oxycontin",id:291},{name: "Oxytrol",id:292},
  {name: "Paroxetine",id:293},{name: "Paxil",id:294},{name: "Pepcid",id:295},{name: "Percocet",id:296},{name: "Phenergan",id:297},
  {name: "Plaquenil",id:298},{name: "Plavix",id:299},{name: "Potassium Chloride",id:300},
  {name: "Pradaxa",id:301},{name: "Pravachol",id:302},{name: "Pravastatin",id:303},{name: "Prednisone",id:304},
  {name: "Premarin",id:305},{name: "Prevacid",id:306},{name: "Prilosec",id:307},{name: "Prolia",id:308},{name: "Promethazine",id:309},
  {name: "Propranolol",id:310},
  {name: "Protonix",id:311},{name: "Prozac",id:312},{name: "QNASL",id:313},{name: "Qsymia",id:314},{name: "Quillivant XR",id:315},
  {name: "Qutenza",id:316},{name: "Ramipril",id:317},{name: "Ranexa",id:318},
  {name: "Ranitidine",id:319},{name: "Rapaflo",id:320},{name: "Reclast",id:321},{name: "Reglan",id:322},{name: "Relafen",id:323},
  {name: "Remeron",id:324},{name: "Remicade",id:325},{name: "Renvela",id:326},
  {name: "Requip",id:327},{name: "Restasis",id:328},{name: "Restoril",id:329},{name: "Revlimid",id:330},
  {name: "Risperdal",id:331},{name: "Risperidone",id:332},{name: "Ritalin",id:333},
  {name: "Rituxan",id:335},{name: "Robaxin",id:336},{name: "Rocephin",id:337},{name: "Saphris",id:338},
  {name: "Savella",id:339},{name: "Senna",id:340},{name: "Sensipar",id:341},
  {name: "Septra",id:342},{name: "Seroquel",id:343},{name: "Sertraline",id:344},{name: "Sildenafil",id:345},
  {name: "Simbrinza",id:346},{name: "Simvastatin",id:347},{name: "Singulair",id:348},{name: "Skelaxin",id:349},
  {name: "Soma",id:350},{name: "Spiriva",id:351},{name: "Spironolactone",id:352},{name: "Stiolto Respimat",id:353},
  {name: "Strattera",id:354},{name: "Suboxone",id:355},{name: "Symbicort",id:356},
  {name: "Synthroid",id:357},{name: "Tamoxifen",id:357},{name: "Tamsulosin",id:358},
  {name: "Tegretol",id:359},{name: "Temazepam",id:360},{name: "Terazosin",id:361},{name: "Testosterone",id:362},{name: "Tizanidine",id:363},
  {name: "Topamax",id:364},{name: "Toprol",id:365},{name: "Toradol",id:366},{name: "Tradjenta",id:367},{name: "Tramadol",id:368},
  {name: "Travatan",id:369},{name: "Trazodone",id:370},{name: "Triamcinolone",id:371},
  {name: "Triamterene",id:372},{name: "Tricor",id:373},{name: "Trileptal",id:374},
  {name: "Trintellix",id:375},{name: "Tylenol",id:376},{name: "Uceris",id:377},{name: "Ulesfia",id:378},{name: "Uloric",id:379},
  {name: "Ultane",id:380},{name: "Ultracet",id:381},{name: "Ultram",id:382},{name: "Ultresa",id:383},{name: "Uptravi",id:384},
  {name: "Uroxatral",id:385},{name: "Utibron Neohaler",id:386},
  {name: "Valacyclovir",id:387},{name: "Valium",id:388},{name: "Valtrex",id:389},{name: "Vancomycin",id:390},
  {name: "Vasotec",id:391},{name: "Venlafaxine",id:392},{name: "Ventolin",id:393},
  {name: "Verapamil",id:394},{name: "Vesicare",id:395},{name: "Viagra",id:396},{name: "Vicodin",id:397},
  {name: "Victoza",id:398},{name: "Viibryd",id:399},{name: "Vimpat",id:400},
  {name: "Vistaril",id:401},{name: "Vitamin E",id:402},{name: "Voltaren",id:403},{name: "Voltaren Gel",id:404},
  {name: "Vytorin",id:405},{name: "Vyvanse",id:406},{name: "Warfarin",id:407},
  {name: "Wellbutrin",id:408},{name: "Wilate",id:409},{name: "Xalatan",id:410},{name: "Xalkori",id:411},
  {name: "Xanax",id:412},{name: "Xanax XR",id:413},{name: "Xarelto",id:414},
  {name: "Xeljanz",id:415},{name: "Xeloda",id:416},{name: "Xenazine",id:417},{name: "Xenical",id:418},
  {name: "Xgeva",id:419},{name: "Xiaflex",id:420},{name: "Xifaxan",id:421},
  {name: "Xigduo XR",id:422},{name: "Xiidra",id:423},{name: "Xofigo",id:424},{name: "Xolair",id:425},
  {name: "Xopenex",id:426},{name: "Xtandi",id:427},{name: "Xyrem",id:428},
  {name: "Xyzal",id:429},{name: "Yasmin",id:430},{name: "Yaz",id:431},{name: "Yervoy",id:432},{name: "Yondelis",id:433},
  {name: "Yosprala",id:434},{name: "Zanaflex",id:435},
  {name: "Zantac",id:436},{name: "Zestoretic",id:437},{name: "Zestril",id:438},{name: "Zetia",id:439},
  {name: "Ziac",id:440},{name: "Zithromax",id:441},{name: "Zocor",id:443},
  {name: "Zofran",id:444},{name: "Zoloft",id:445},{name: "Zolpidem",id:446},{name: "Zometa",id:447},{name: "Zomig",id:448},
  {name: "Zostavax",id:449},
  {name: "Zosyn",id:450},{name: "Zovirax",id:451},{name: "Zyprexa",id:452},{name: "Zyrtec",id:453},
  {name: "Zytiga",id:454},{name: "Zyvox",id:455}];

  return listOfDrugs;
});

app.factory("cities",function(){
  var allCities = ["Aba","Abakaliki","Abeokuta","Abonnema","Abuja","Ado Ekiti","Afikpo","Agbor","Agulu","Aku","Akure",
  "Amaigbo","Ankpa","Asaba","Auchi","Awka","Azare","Bama","Bauchi","Bende","Benin City",
  "Bida","Birnin Kebbi","Biu","Buguma","Calabar","Damaturu","Daura","Dutse","Ede","Effium","Effon Alaiye","Eha Amufu",
  "Ejigbo","Ekpoma","Enugu","Enugu Ukwu","Epe","Etiti",
  "Ezza Inyimagu","Funtua","Gamboru","Gashua","Gboko","Gbongan","Gombe","Gusau","Hadejia","Ibadan","Idah",
  "Ife","Ifo","Ifon","Igboho","Igbo Ora","Igbo Ukwu","Ihiala","Ijebu Igbo",
  "Ijebu Ode","Ijero","Ikare","Ikeja","Ikerre","Ikire","Ikirun","Ikom","Ikorodu","Ikot Ekpene","Ila Orangun",
  "Ilawe Ekiti","Ilesha","Ilobu","Ilorin","Inisa","Ise","Iseyin",
  "Ishieke","Iwo","Jalingo","Jimeta","Jos","Kaduna","Kafanchan","Kagoro","Kano","Katsina","Kaura Namoda","Keffi","Kishi",
  "Kontagora","Kuroko","Lafia","Lagos",
  "Lokoja","Maiduguri","Makurdi","Malumfashi","Minna","Modakeke","Mubi","Nguru","Nkpor",
  "Nnewi","Nsukka","Numan","Obosi","Offa","Ogaminan","Ogbomosho","Ohafia","Oka Akoko","Okene",
  "Okigwi","Okitipupa","Okpogho","Okrika","Ondo","Onitsha","Oron","Oshogbo","Otukpo","Owerri",
  "Owo","Oyo","Ozubulu","Port Harcourt","Sagamu","Sango Otta","Sapele","Shaki",
  "Sokoto","Suleja","Uga","Ugep","Ughelli","Umuahia","Uromi","Uyo","Warri","Wukari","Yenagoa","Yola","Zaria"];

  return allCities;
})  


















































