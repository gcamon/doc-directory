var app = angular.module('myApp',["ngRoute","ngAnimate","angularModalService"]);

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

 .when("/patient-prescriptions/:id",{
  templateUrl: "/assets/pages/patient-view-prescriptions.html",
  controller: "prescriptionTemplateController"
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

 //for laboratory
 .when("/referral/laboratory-test",{
  templateUrl:"/assets/pages/laboratory/referral-lab.html",
  controller: "labReferredPatientsController"
 })

 //for radiology
 .when("/referral/radiology-test",{
  templateUrl: "/assets/pages/radiology/referral-scan.html",
  controller: "radioReferredPatientController"
 })

 .when("/pharmacy/view-prescription/:id",{
  templateUrl: "/assets/pages/pharmacy-inner-pages/view-prescription.html",
  controller: "pharmacyViewPrescriptionController"
 })

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
 });
  
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

  //holds lab referral data
  this.holdLaboratoryReferralData

  //holds unRantest array 
  this.holdUnranTest;

  this.holdTheRadiologyToFowardTestTo;

}])

app.service("multiData",["$http","$window","templateService",function($http,$window,templateService){
	this.sendPic = function(url,data){
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
})

app.controller('loginController',["$scope","$http","$location","$window","ModalService","templateService",function($scope,$http,$location,$window,ModalService,templateService) {
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
      element.bind("change",function(){
        scope.$apply(function(){
          modelSetter(scope,element[0].files[0])
        })
      })
    }
  }
}]);

app.controller('pictureController',["$scope","$http","$location","multiData",function($scope,$http,$location,multiData) {
   $scope.user = {};
   $scope.user.type = "picture";
   $scope.update = function(){
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

//controller for searches from  the home page
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
     
      localManager.removeItem("userInfo");        
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
    
    localManager.removeItem("userInfo");
    console.log(localManager + "coming from resultcontroller")
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
app.controller("connectController",["$scope","$location","$http","localManager",function($scope,$location,$http,localManager){
   var doctorData = localManager.getValue("userInfo");
   $scope.docInfo = doctorData;
   $scope.patient = {};
   $scope.sent = true;
   
   $scope.getAnswer = function(firstname,lastname,pic,id) {
     if(Object.keys($scope.patient).length > 0){
      var random = Math.random(Math.floor() * 1000);
       $scope.patient.sender_firstname = firstname;
       $scope.patient.sender_lastname = lastname;
       $scope.patient.type = "question";
       $scope.patient.sender_profile_pic_url = pic;
       $scope.patient.sender_id = id;
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

   $scope.sendRequest = function(firstname,lastname,pic,id) {
      if($scope.sent){
      $scope.sent = false;
      var random = Math.floor(Math.random() * 1000);
       $scope.patient.sender_firstname = firstname;
       $scope.patient.sender_lastname = lastname;
       $scope.patient.type = "consultation";
       $scope.patient.sender_profile_pic_url = pic;
       $scope.patient.sender_id = id;
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
               $scope.message = "Your consultation request has been sent!";
               //use settime out to clear the textfieeld and the response message
          });
        } else {
          $scope.message = "You have already sent a request!"
        }
      
   }
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

  $scope.book = function(person){
    getAHelp("book",person);
    templateService.doctorsData = localManager.getValue("userInfo");    
  }

  $scope.ask = function(person){
    getAHelp("ask",person)
  }

  function getAHelp(type,thePerson) {
     var theDoctor = {user_id: thePerson}
     console.log(theDoctor);
     $http({
        method  : 'PUT',
        url     : "/user/book",
        data : theDoctor,
        headers : {'Content-Type': 'application/json'} 
        })
      .success(function(data) {              
        if(data.isNotLoggedIn){          
          modalCall();
        } else {
          console.log(data);          
          localManager.removeItem("userInfo");          
          localManager.setValue("userInfo",data);          
          $window.location.href = "/patient/dashboard";
        }
      });
  }

  function modalCall(){

      ModalService.showModal({
          templateUrl: 'login.html',
          controller: "loginController"
      }).then(function(modal) {
          modal.element.modal();
          modal.close.then(function(result) {
            $scope.message = "You said " + result;
          });
      });
  
  }
                      
}]);

/*** for doctors ***/
//saves few details about the logged in doctor to a angularjs service so that it can be used in other controllers.
app.controller("inDoctorDashboardController",["$scope","$location","localManager","templateService",function($scope,$location,localManager,templateService){
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
      console.log(data)
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
        console.log(patient);
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
/////////////////////////////////////////////////////////////////////////////////////////
app.controller("selectedAppointmentController",["$scope","$location","$http","$window","templateService","localManager",
  function($scope,$location,$http,$window,templateService,localManager){

    $scope.sessionInfo = templateService.holdAppointmentData;

    $scope.getTreatment = function(){
      var session = {};
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

app.controller("inTreatmentController",["$scope","$http","localManager","$location","templateService",
  function($scope,$http,localManager,$location,templateService){
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
        consoloe.log("it hapm")
        console.log(data.result)       
        $scope.testResult = data.result;
      } else {
        $scope.message = "No test result for this patient";
      }
  });            
 }
  

  $scope.sendToScan = function(){
    
    
  }

  $scope.sendToECG = function(){
    
  }

  $scope.otherCheck = function(){
    
  }
}]);

/**********************Laboratory tests list **********************/

app.controller("labController",["$scope","$location","templateService",function($scope,$location,templateService){

var listInfo = [{name: "ORAL GLOCOSE TOLERANCE TEST (OGTT)",price: 1000},{name: "TWO HOURS POSTPRANDIAL (2HPP)",price:800},{name: "FASTING BLOOD SUGAR (FBS)"},
{name: "RANDOM BLOOD SUGAR (RBS)"},{name: "PREGNANCY TEST  ( URINE )"},{name: "SODIUM Na+"},{name: "POTASSIUM K"},{name: "ELECTROLYTES"},
{name: "BICARBONATE HC03"},{name: "CALCIUMS Ca2"},{name: "UREA"},{name: "CREATININE"},{name: "URINE ELECTROLYTES"},{name: "KIDNEY FUNCTION TEST(KFT)"},
{name: "ELECTROLYTE/UREA/CREATININE E/U -Cr"},{name: "IN PHOSPHORUS   ( PO4 )( INORGANIC PHOS)"},{name: "B-HCG. ( BLOOD PREGNANCY TEST )"},
{name: "LFT ( LIVER FUNCTION TEST)"},{name: "SGOT/AST"},{name: "SGPT/ALT"},{name: "ALP (ALKALINE PHOSPHASE)"},{name: "TOTAL BILIRUBIN"},{name: "DIRECT BILIRUBIN"},
{name: "AIBUMIN"},{name: "TOTAL PROTEIN"},{name: "GLOBULIN"},{name: "CHOLESTEROL"},{name: "TRIGLYCERIDES"},{name: "URIC ACID"},{name: "GAMMA GT"},
{name: "LIPID PROFILE"},{name: "LOW DENSITY LIPOPROTEIN"},{name: "HIGH DENSITY LIPOPROTEIN ( HDL )"},{name: "KIDNEY STONE ANALYSIS"},{name: "AMYLASE ( TOTAL )"},
{name: "CREATINE PHOSPHATE KINASE (CK/CPK)"},{name: "ACID PHOSPHATASE"},{name: "PROTEIN ELECTROPHORESIS"},{name: "URINALYSIS"},{name: "OCCULT  BLOOD  TEST ( OBT)"},
{name: "KIDNEY FUNCTION TEST"},{name: "GLYCATED HAEMOGLOBIN ( HBA1C)"},{name: "24 HRS URINE FOR CREATININE/CREATININE CLEARANCE"},{name: "PROTEIN/CR. RATIO IN URINE"},
{name: "MICRO ALBUMIN  IN  URINE"},{name: "D -  DIMER"},{name: "CREATINE  KINASE MYOGLOBLIN  ( C K . MB )"},{name: "IRON  FERRITIN"},{name: "PROTEIN IN 24hrs URINE"},
{name: "PROTEIN  TOTAL IN C S F"},{name: "AMYLASE  ( PANCREATIC )"},{name: "Hs C - REACTIVE  PROTEIN   ( C R P ). QAUNTITATIVE"},{name: "CREATININE CLEARANCE"},
{name: "Astin"},{name: "LDH"},{name: "Inorgnic Phosporus Serum"},{name: "TROPONIN I (QTY)"},{name: "BENCE JONES PROTEIN"},{name: "MAGNESIUM"},{name: "BUN"},
{name: "MYOGLOBIN SERUM/URINE"},{name: "SERUM IRON"},{name: "TROPONIN T (QTY)"},{name: "VITAMIN B 12"},{name: "24HRS URINE FOR CREATININE"},{name: "C- PEPTIDE"},
{name: "C - REACTIVE  PROTEIN   ( C R P ).RAPID"},{name: "VITAMIN D (25 Hydroxyl)"},{name: "VITANIN D (25OH)"},{name: "GLOMERULAR FILTERATION RATE (GFR)"},
{name: "ANA (ANTINUCLEAR ANTIBODIES)"},{name: "GLUCOSE-6-PHOSPHATE DEHYDROGENASE (G-6PD)"},{name: "1 Hrs. After Ingesting Glucose"},{name: "2 Hrs. After Ingesting Glucose"},
{name: "CHLAMYDIA IgM ELISA (Serum)"},{name: "CHLAMYDIA IgM ELSA (Serum)"},{name: "CHLAMYDIA IgM ELISA (SERUM)"},{name: "LIPASE"},{name: "Chlamydia IgG (ELISA) SERUM"},
{name: "Lead"},{name: "Corper"},{name: "Iron metabolism"},{name: "Zinc"},{name: "HPV DNA GENOTYPE"},{name: "HPV DNA GENOTYPE"},{name: "Sodium Valproate Level:"},
{name: "Serum alpha 1 anti-trypsin (AAT)"},{name: "BLOOD PH"},{name: "24HRS URINE CALCIUM"},{name: "HOMOCYSTEINE LEVEL IN PLASMA"},{name: "URINE TOTAL PROTEIN 24HR"},
{name: "ANTI LIVER & KIDNEY MICROSOMAL ANTIBODY (ANTI KLM)"}];


var listInfo2 = [{name: "PCV ( PACK CELL VOLUME )"},{name: "HB ( HAEMOGLOBIN )"},{name: "RBC ( RED BLOOD CELL COUNT )"},
{name: "WBC TOTAL (Abacus 5)"},{name: "FULL BLOOD COUNT (5 part diff)"},{name: "ESR ( ERYTHROCYTE SEDIMENTATION RATE )"},{name: "EOSIN COUNT"},
{name: "PLATELET COUNT"},
{name: "RETICULOCYTE COUNT"},{name: "SICKLING TEST"},{name: "GENOTYPE TEST"},{name: "BLOOD GROUP"},{name: "FULL BLOOD COUNT( MANUAL)"},
{name: "CLOTTING TIME (CT)"},
{name: "PROTHROMBIN TIME (PT)"},{name: "GROUPING ,SCREENING & CROSS -MATCHING 1 PINT OF BLOOD"},{name: "CD3/CD4 COUNT ABSOLUTE"},
{name: "INDIRECT COOMBS TEST"},{name: "WBC  Diff (5parts diff)"},{name: "COAGULATION  PROFILE"},{name: "WBC TOTAL (Manual)"},{name: "CD 8 Count"},
{name: "HIV VIRAL LOAD COUNT"},
{name: "RHESUS ANTI-BODIES TITRE"},{name: "GROUP ,SCREENING"},{name: "GROUP ,SCREENING & X  MATCH  3  PINT"},
{name: "ONE  PINT  OF  BLOOD( TRANSFUSION )"},{name: "Group  and save"},{name: "DIRECT  COOMBS TEST"},{name: "CEROBROSPINAL FLUID (CSF) CELL COUNT"},
{name: "WBC DIFF (manual)"},{name: "BLEEDING TIME"},{name: "BLOOD FILM"},{name: "PCV ( PACK CELL VOLUME ) - ADULT"},
{name: "SCREENING AND X OF DONATED BLOOD(DIALYSIS)"},{name: "ACTIVATED PARTIAL THROMBOPLASTIN TIME APTT (PTTK)"},{name: "COMPLEMENT C3 PROTEIN"},{name: "ANTI DNAse B TEST"},
{name: "ANF ANTI DNA (ds DNA)"},

{name: "COMPLEMENT C4 PROTEIN"},{name: "SCREENING AND X OF DONATED BLOOD(OPD) 1 PINT"},{name: "SCREENING AND X OF DONATED BLOOD(OPD ) 2 PINTS"},
{name: "SCREENING AND X OF DONATED BLOOD( OPD) 3 PINTS"},
{name: "INR(INTERNATIONAL NORMALISED RATIO)"},{name: "TOTAL IgE"},{name: "CROSS- MATCHING"},{name: "ARTERIAL BLOOD GASES"},
{name: "RECTICULOCYTE PRODUCTION INDEX"},
{name: "HIV 1 & 2 ELISA + P24 ANTIGEN"},{name: "ADULT ALLERGY FOOD SCREEN"},{name: "FOLIC ACID (SERIUM)"},{name: "FOLIC ACID(SERIUM)"},
{name: "FIBRINOGEN"},{name: "Phadiatops(Inhalants)"},{name: "HUMAN LYMPHOCYTIC T VIRUS 1 & 2 QUANTIFICATN"},
{name: "HB Electrophoresis Quantitative"},{name: "Total IgG ASSAY"},{name: "PROTEIN C"},{name: "PROTEIN S"},
{name: "TOTAL IgA ASSAY"},{name: "TOTAL IgM ASSAY"},{name: "TOTAL IgD ASSAY"},{name: "TOTAL IgG, IgM & IgA ASSAY"},
{name: "Anti Phospholipids Antibody IgG & IgM"}];

var listInfo3 = [{name: "PAP SMEAR  FOR CYTOLOGY"},{name: "URINE   CYTOLOGY"},{name: "BLOOD  CYTOLOGY"},
{name: "ASPIRATE  FOR CYTOLOGY"},{name: "TISSUE   HISTOLOGY"},{name: "BONE   HISTOLOGY"},{name: "SPUTUM  CYTOLOGY"},
{name: "F N A C( FINE NEEDLE  ASPIRATE FOR CYTOLOGY)"},
{name: "BUCCAL SMEAR FOR CYTOLOGY"},{name: "TISSUE BIOPSY FOR HISTOLOGY"},{name: "GASTRIC BIOPSY HISTOLOGY"},
{name: "TISSUE FUNGI ANALYSIS"},{name: "TISSUE AFB ANALYSIS"},
{name: "TISSUE HISTOLOGY WITH SPECIAL STAINS"}];

var listInfo4 = [{name: "PSA ( RAPID )"},{name: "B-HCG QUANTITATIVE"},{name: "T3"},
{name: "T4"},{name: "TSH"},{name: "FSH"},{name: "LH"},
{name: "H C G (QTY)"},
{name: "PROGESTERONE"},{name: "PROLACTIN"},{name: "TESTOSTERONE"},
{name: "OESTROGEN"},{name: "THYRIOD FUNCTION TEST (TFT)"},
{name: "CORTISOL"},
{name: "FERTILITY PROFILE"},{name: "OVULATION PROFILE"},{name: "ALFA FETO PROTEIN ( A F P )"},

{name: "TOTAL P S A(QTY)"},{name: "C E A ( CARCINO EMBROYONIC ANTIGEN)"},{name: "CA125"},{name: "CA 15-3"},{name: "FREE T4"},
{name: "THYROGLOBULIN ANTIBODIES"},
{name: "NT-Pro BNP"},{name: "TSH RECEPTOR ANTIBODIES"},{name: "THYROID PEROXIDASE ANTIBODY"},
{name: "ACTH"},{name: "HUMAN GROWTH HORMONE"},{name: "FREE T3"},{name: "FREE PSA"},
{name: "17-OH PROGESTERONE"},{name: "INSULIN QUANTITATIVE"},{name: "DHEA-S"},

{name: "PLASMA FREE METNEPHRINES"},
{name: "ANDROSTENEDIONE ASSAY"},{name: "MINERALOCORTICOID ASSAY"},{name: "B2- MICROGLOBULIN"},{name: "PTH (PARATHYROID HORMONE)"},
{name: "CA19-9"},

{name: "HLA-B27"},{name: "ANTI - MULLERIAN HORMONE"},{name: "ANTI-PHOSPHOLIPID ANTIBODY"},
{name: "ANTI-CARDIOLIPIN ANTIBODY"},
{name: "ANTI-CYCLIC CITRULLINATED PEPTIDE ANTIBODIES(Anti- CCP) Quantitative."},{name: "SOMATOMEDIN (IGF)"},{name: "ANTI DIRUETIC HORMONE (ADH)"},
{name: "FREE TESTOSTERONE"},

{name: "FREE/TOTAL PSA RATIO"},
{name: "FREE/TOTAL PSA RATIO"},{name: "ANCA (ANTI CYTOPLASMIC AUTOANTIBODIES)"},{name: "AGBM (ANTI BASMENT GLOMERULAR ANTIBPDIES)"},
{name: "INHIBIN B"},
{name: "DIHYDROTESTOSTERONE LEVEL"},{name: "SEX CHROMOSOME DETERMINATION"}];

var listInfo5 = [{name: "MALARIA PARASITE"},{name: "URINE MICROSCOPY"},{name: "URINE M/C/S"},
{name: "HVS MICROSCOPY"},{name: "HVS M/C/S"},{name: "ENDOCERVICAL SWAB (ECS) M/C/S"},{name: "URETHRAL SWAB (US) M/C/S"},
{name: "EYE SWAB M/C/S"},
{name: "THROAT SWAB M/C/S"},{name: "EAR SWAB M/C/S"},{name: "SPUTUM AFB x3"},
{name: "SPUTUM M/C/S"},{name: "SEMEN ANALYSIS"},
{name: "SEMEN Analysis/M/C/S"},
{name: "CSF M/C/S"},{name: "CSF ANALYSIS"},{name: "BLOOD CULTURE"},

{name: "STOOL M/C/S"},{name: "GRAM STAIN"},{name: "VDRL"},{name: "Widal"},{name: "BLOOD FOR MICROFILARIAE"},
{name: "RHEUMATOID FACTOR (RAPID)"},
{name: "MANTOUX"},{name: "HEPATITIS B SURFACE   ANTIGEN  (HBs Ag )"},{name: "HEPATITIS C VIRUS ANTIBODY  (H C V RAPID)"},
{name: "SKIN SNIP FOR MICROFILARIAE"},{name: "ASO TITRE"},{name: "HIV 1"},{name: "HELICOBACTER PYLORI TEST ( H. PYLORI )"},
{name: "T.B. SEROLOGY IgG/IgM"},{name: "STOOL ANALYSIS/MICROSCOPY"},{name: "SPUTUM  AFB   X I"},{name: "ASPIRATE     M / C / S"},

{name: "RHEUMATOID FACTOR  (Quantitative)"},
{name: "WOUND SWAB    M / C / S"},{name: "BUCCAL SWAB FOR   MYCOLOGY"},{name: "SEMEN  M / C / S"},{name: "NASAL  SWAB  M / C / S"},
{name: "HEPATITIS B Envelope ANTIBODY (HBeAb)"},

{name: "MALARIA PARASITE (Thick and Thin Film)"},{name: "HEPATITIS B Envelope ANTIGEN   (HBeAg)"},{name: "HEPATITIS B SURFACE  ANTIBODY ( HBsAb )"},
{name: "HEPATITIS B CORE ANTIBODY (HbcAb) ELISA/TOTAL"},
{name: "HEPATITIS B CORE ANTIBODY IgM( HBcAb )"},{name: "HEPATITIS C  VIRUS TEST ( HCV ELISA)"},{name: "CATHETER  TIP M/C/S"},
{name: "ASPIRATE  FOR  A F B"},

{name: "IUCD M/C /S"},
{name: "HAEMO (BLOOD) PARASITES"},{name: "Chlamydia Urine (PCR)"},{name: "Chlamydia Urethra Swab"},
{name: "Chlamydia Cervica Swab"},
{name: "HEPATITIS A VIRUS (IgM)"},{name: "HERPES SIMPLEX 1,2 VIRUS IgG"},{name: "HERPES SIMPLEX 1,2 VIRUS IgM"},
{name: "T. PALLIDIUM ELISA IgG"},{name: "RUBELLA VIRUS IgM"},{name: "VARICELLA IgM"},{name: "VARICELLA IgG"},
{name: "RUBELLA VIRUS IgG"},{name: "CYTOMEGALO VIRUS(CMV) IgG"},{name: "CYTOMEGALO VIRUS (CMV) IgM"},{name: "TOXOPLASMA GONDII (TOXO IgG)"},
{name: "TOXOPLASMA GONDII (TOXO IgM)"},

{name: "HIV 1 AND 2 SCREENING TEST"},{name: "HEPATITIS B SURFACE ANTIBODY ( HBSAB ) ELISA"},{name: "HEPATITIS B SURFACE ANTIGEN (HBs Ag ) ELISA"},
{name: "HEPATITIS B CORE ANTIBODY IgG( HBcAb )"},
{name: "HEPATITIS B CORE ANTIBODY (HbcAb) TOTAL"},{name: "BREAST LUMP- M/C/S"},{name: "BREAST LUMP M/C/S"},
{name: "OTHER SWAAB MC/S"},{name: "T.B QUANTIFERON GOLD"},{name: "HIV 1&2 ANTIBODIES"},{name: "HEPATITIS C GENOTYPE"},{name: "HEPATITIS  B  PROFILE"},

{name: "ROTAVIRUS/ADENOVIRUS COMBI TEST"},{name: "VEROTOXIN/E.COLI 0157 COMBI TEST"},{name: "PAEDIATRIC ALLERGY FOOD SCREEN"},
{name: "HERPES SIMPLEX VIRUS I (HSVI) IgG"},{name: "HERPES SIMPLEX VIRUSI (HSV-I)IgM"},{name: "HERPES SIMPLEX VIRUSII (HSV-II)IgG"},
{name: "HERPES SIMPLEX VIRUSII(HSV-II)IgM"},{name: "PCR- HIV QUANTITATIVE"},{name: "HAPETITIS B SURFACE ANTIGEN (qHBSAg) QUANTIFICATION"},
{name: "Skin Scrapping for Fungal test (KOH)"},{name: "Sputum fungal Test (M/C/S)"},
{name: "CHLAMYDIA IgG ELISA (Serum)"},{name: "Chlamydia IgM (ELISA) SERUM"},{name: "MEASLES IgG/IgM"},
{name: "MUMPS IgG/IgM"},{name: "SKIN SCRAPPING FOR MYCOLOGY"},{name: "HIV DRUG RESISTANT ASSAY"},{name: "HEPATITIS B CORE ANTIBODY IgM ELISA"}];

var listInfo6 = [{name: "CARBAMAZEPINE-S (TEGRETOL)"},{name: "CANNABIS (blood/urine)"},{name: "COCAINE (Urine )"},
{name: "OPIATES (Urine )"},{name: "MORPHINE (Urine )"},{name: "BARBITURATES (Urine )"},{name: "AMPHETAMINE (Urine )"},
{name: "SERUM LEVETIRACETAM"},{name: "BENZOLEDIAZIPAN"},{name: "TACROLIMUS CONCENTRATION IN PLASMA"},{name: "AFLATOXIN B1 LEVEL:"},
{name: "AFLATOXIN- M1 LEVEL:"},{name: "ALCOHOL (BLOOD)"}];

var listInfo7 = [{name: "HBV DNA VIRAL LOAD"},{name: "HCV RNA VIRAL LOAD"},{name: "CELLULAR/GENETIC DNA TEST"},{name: "HPV DNA TEST"},
{name: "HLA B27 STATUS"},{name: "ANGIOTENSIN CONVERTING ENZYME (ACE LEVELS)"},{name: "BCR-FGFR1 QUANTITATION"}];


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

app.controller("scanController",["$scope","$location","templateService",function($scope,$location,templateService){

/***********Listing of X-Ray Investigation *******************/   

var listInfo1 = [{name: "Chest X-ray (CXR)  1 view",price: 1000},{name: "Skull X-ray (FXR)  (2 View)",price:800},{name: "Pelvic  X-ray (1 view)"},
{name: "Intravenous Urography (IVU)"},{name: "Barium Swallow (BS)"},{name: "Barium Meal & follow through (BM&FT)"},
{name: "Retrograde Cystourethrogram(Uretrography)"},{name: "Barium Enema"},
{name: "POST-NASAL SPACE(P.N.S)  Nasopharnyx (1 View)"},{name: "Shoulder X-Ray (1 view)"},
{name: "Abdomen X-ray"},{name: "Abdominal (Erect & Supine) X-ray"},{name: "Ankle X-ray (2 Views)"},{name: "Calcaneum X-ray (2 Views)"},
{name: "Neck/Cervical X-ray (2 Views)"},{name: "Coccyx X-ray"},{name: "Elbow joint X-ray (2 Views)"},
{name: "Femur/Thigh X-ray (2 views)"},{name: "Finger X-ray (2 views)"},{name: "Foot/Toe X-ray (2 Views)"},
{name: "Hand (Carpal/Metacarpal Bones) X-ray (2 Views)"},{name: "Hip Joint X-ray (2 Views)"},{name: "Humerus/Upper Arm X-ray (2 Views)"},
{name: "Knee X-ray (2 views)"},{name: "Lumbo Sacral Spines X-ray (2 views)"},{name: "Mastoid Air Cells"},
{name: "Micturating Cystourethrogram"},{name: "Scapula X-ray (2 Views)"},{name: "Sternum X-ray (2 Views)"},
{name: "Thoracic Inlets X-Ray (2 Views)"},
{name: "Tibia/Fibula (Leg) X-ray (2 Views)"},{name: "Ulna/Radius (Forearm) X-ray"},{name: "Wrist X-ray (2 views)"},
{name: "Forearm/Ulna/Radius X-ray (2 views)"},{name: "Jaw Maxilla and Mandibles X-ray (2 Views)"},
{name: "Clavicular X-Ray (1 View)"},{name: "Sternoclavicular Joints (2 views)"},{name: "Thoracic Vertabrae X-Ray (2 Views)"},
{name: "Temporomandibular Joint (5 Views)"},{name: "X-ray Paranasal sinuses - OM, OF, LAT."},
{name: "CHEST X-RAY(PA and LAT.) 2 VIEWS"},{name: "Ankle X-ray(3views)"},{name: "Foot/Toe X-ray (3Views)"},
{name: "Fistulogram"},
{name: "Shoulder X-ray(3viiews)"},{name: "Shoulder X-ray(2views)"},{name: "VENOGRAM"},{name: "Occipito-mental(OM) X-ray (1 view)"},
{name: "Hand X-ray (Carpal/Metacarpal:Both Hands)(4views)"},
{name: "Foot/Toe X-ray (Both Feet)(4views)"},{name: "Knee X-ray (Both knees) (4views)"},{name: "Ankle X-ray (Both Ankles)(4views)"},
{name: "Wrist X-ray (Both wrists) (4Views)"},
{name: "Tibia/Fibula X-ray (Both Legs)(4Views)"},{name: "Femur/Thigh X-ray(Both Femoral/Thighs) (4Views)"},
{name: "X-ray Reporting Only"},{name: "Myelogram"},{name: "Clavicle X-ray (2 views)"},{name: "Pelvimetry X-ray"},
{name: "Mastoids"},
{name: "TEMPORO-MANDIBULAR JOINT(TMJ) X-RAY X-ray 2views"},{name: "Digital X-ray"},{name: "LATERAL SOFT TISSUE (NECK)"},
{name: "Cervical Spine(Flexion and Extension) 2 Views"},{name: "Retrograde Urethrogram"},{name: "X-Ray CD Reprinting"},
{name: "HYSTEROSALPINOGRAM -HSG (DISPOSABLE)"},{name: "HYSTEROSALPINOGRAM -HSG (NON-DISPOSABLE)"},
{name: "PROSTRATE USS"},{name: "Lumbo Sacral Spine X-ray (3 Views)"},
{name: "Hand/Finger - NHIS"},{name: "Wrist - NHIS"},{name: "Foream - NHIS"},{name: "Elbow - NHIS"},
{name: "Humerus - NHIS"},{name: "Shoulder - NHIS"},{name: "Clavicle - NHIS"},{name: "Foot/Toe - NHIS"},{name: "Ancle-NHIS"},
{name: "Leg (Tibia/Fibula NHIS"},{name: "Knee -NHIS"},{name: "Hip -NHIS"},{name: "Femur or tThigh -NHIS"},
{name: "Pelvic -NHIS"},{name: "Chest(PA/AP) - NHIS"},{name: "Chest(PA/Latereal) - NHIS"},
{name: "Chest For Ribs (Oblique) - NHIS"},{name: "Apical/Lordotic - NHIS"},{name: "Stemum - NHIS"},{name: "Thoracic Inlet - NHIS"},
{name: "Cervical Spine - NHIS"},
{name: "Lateral Neck(Soft Tissue - NHIS"},{name: "Thoracic Spine - NHIS"},{name: "Thoraco Lumba Spine - NHIS"},
{name: "Lumbar Spine - NHIS"},{name: "Lumbo Sacral Spine - NHIS"},{name: "Scrum - NHIS"},{name: "Sacro Illiac Joint (S.I.J) - NHIS"},
{name: "Cervical Spine (Oblique) - NHIS"},{name: "Sacro-coccxy - NHIS"},
{name: "Abdomen(Plain) - NHIS"},{name: "Abdomen(Eract/Supine) - NHIS"},{name: "Abdomen (Pregnancy) - NHIS"},
{name: "Skule(AP/Lat) - NHIS"},{name: "Skulll(Pa/Lat/Townes) - NHIS"},
{name: "Mastoids - NHIS"},{name: "Sinuses AP/LNT/OM - NHIS"},{name: "Mandibles (Jaw) - NHIS"},
{name: "Temporo Mandibular Joints (TM) - NHIS"},{name: "Sella Turcica - NHIS"},{name: "Tangental - NHIS"},{name: "Occipito-Mental (OM) - NHIS"},
{name: "Periapical - NHIS"},{name: "Bitewings - NHIS"},{name: "Panoramic View - NHIS"},{name: "Barium Swallow - NHIS"},
{name: "Barium Meal/Follow through - NHIS"},{name: "Barium enema - NHIS"},{name: "Intravenus Urography (IVU) - NHIS"},
{name: "Hysterosalpingogram (HSG) - NHIS"},{name: "Cysto-Urethorgram - NHIS"},{name: "Fistulogram - NHIS"},
{name: "Myelogram - NHIS"},{name: "Skeletal Survey (Adult) - NHIS"},{name: "Electrocadography - NHIS"},
{name: "Eletro Encephalography"},{name: "Mycturating Cyto-Urethrogram - NHIS"},{name: "Phlebogram-One Leg - NHIS"},
{name: "Venogram-One Leg - NHIS"},{name: "Arthrogram - NHIS"},{name: "Sialogram - NHIS"},{name: "Sinogram - NHIS"},
{name: "MRI Scan - NHIS"},{name: "CT Scan - NHIS"},{name: "Mammography - NHIS"}];

/*******Listing of Ultrasonography *************/    

var listInfo2 = [{name: "Obstetric/Gynaecology Scan"},{name: "Female Pelvic Scan - With print out"},
{name: "Female Pelvic Scan - Without print out"},{name: "Abdominal Scan emphasis - Liver (Hepatobillary) Scan"},
{name: "Ophthalmic Scan Per Eye"},{name: "ECHOCARDIOGRAPHY(Cardiac Echo)"},{name: "SPIROMETRY TEST"},
{name: "Doppler Ultrasound Per Region"},{name: "Abdominal Scan"},{name: "Abdominal Scan emphasis - Kidney (Renal Scan)"},
{name: "Abdominal Scan emphasis - Bowels"},
{name: "Abdominal Scan emphasis - Pancrease"},{name: "Abdominal Scan emphasis - Spleen"},
{name: "Scrotal/Testicular Scan"},{name: "Soft Tissue (Breast) scan"},{name: "BREAST SCAN"},
{name: "TRANSVAGINAL SCAN"},{name: "FONTANELLE USS"},{name: "Folliculometry Scan"},{name: "Soft Tissue(Neck/Thyroid etc) Scan"},
{name: "TRANSRECTAL SCAN"},{name: "THYROID SCAN"},{name: "Soft Tissue(Muscles) Ultrasound"},{name: "Soft Tissue(Thigh) Scan"},
{name: "STRESS ECHOCARDIOGRAPHY(Stress Cardiac Echo)"},{name: "Obstetric - 4D"},{name: "Biophysical Profile - Obstetric"},
{name: "Ultrasound Print Out Per Sheet"},{name: "Ultrasound Guided Biopsy"},{name: "Abdomino-Pelvic Scan"},
{name: "SONO-HSG"},{name: "HAND/FINGER (NHIS)"},{name: "Obstetric Scan - NHIS"},{name: "Abdominal Scann - NHIS"},
{name: "Pelvic Scan - NHIS"},{name: "Breast Scan - NHIS"},{name: "Bladder Scan - NHIS"},
{name: "Abdominal Pelvic Scan - NHIS"},{name: "Prostate Scan - NHIS"},{name: "Thyroid Scan - NHIS"},
{name: "Testes/scrotal Scan (each) - NHIS"},{name: "Ovulometry/Tv Scan - NHIS"},{name: "Trans-Fontanellar  (Children) - NHIS"}];

/********************Listing of Computerized Tomography Scan (C.T. SCAN)  **********************/   


var listInfo3 = [{name: "CT Scan Interpreting Only"},{name: "BRAIN/SKULL C.T.SCAN-PLAIN (P)"},
{name: "Neck CT Scan (Cervical)-PLAIN"},{name: "CT Scan Sinuses/Nasal Cavity"},{name: "Abdominal/Pelvic CT Scan-PLAIN"},
{name: "CT Scan Pelvic Girdle (Pelvis)"},{name: "Thoracic Spine CT Scan"},{name: "Chest CT Scan-PLAIN"},
{name: "CT Scan Femur (thigh) and Related Soft Tissues"},{name: "C.T.SCAN-Angiography Whole Body"},
{name: "C.T.SCAN-Angiography Regional"},{name: "C.T.SCAN-Angiography (Interventional) Including Introduction of Stents"},
{name: "C.T.SCAN CD Result Recording Per Plate"},{name: "Hand CT Scan (Fingers Included)"},
{name: "CT Scan Upper Arm (Humerus and Related Soft Tissues)"},{name: "CT Scan Lower Arm (Ulna and Redius and Related Soft Tissues)"},
{name: "CT Scan Tibia and Fibula and Related Soft Tissues"},{name: "Lumbosacral Spine C.T.SCAN"},
{name: "BRAIN/SKULL C.T.SCAN-SINGLE CONTRAST (P)"},{name: "ABDOMINAL/PELVIC C.T.SCAN-SINGLE CONTRAST"},
{name: "ABDOMINAL/PELVIC C.T.SCAN-DOUBLE CONTRAST"},{name: "ABDOMINAL/PELVIC C.T.SCAN-TRIPPLE CONTRAST"},
{name: "CHEST C.T.SCAN-SINGLE CONTRAST"},{name: "CHEST C.T.SCAN-DOUBLE CONTRAST"},{name: "CHEST C.T.SCAN-TRIPPLE CONTRAST"},
{name: "KNEE JOINT C.T.SCAN"},{name: "NECK C.T. SCAN (SoftTissue) -Single Contrast"},{name: "ELBOW JOINT C.T.SCAN"},
{name: "ORBITAL C.T.SCAN"},{name: "C.T.SCAN-PELVIMETRY"},{name: "EAR/MASTOIDS C.T.SCAN"},{name: "C.T.SCAN-MYELOGRAM"},
{name: "MRI"},
{name: "MRI REPORTING ONLY"},{name: "ANKLE C.T.SCAN"},{name: "C.T.SCAN-Angiography including Tripple Screen/Cardiac Study"},
{name: "C.T.SCAN- Perfusion(Specify Organ/Tissue)"},{name: "C.T.SCAN-Colonoscopy(Virtual Colonoscopy)"},
{name: "C.T.SCAN-Pneumography"},{name: "C.T.SCAN-Calcium Scoring (for increased Specificity of FRAMINGHAM SCORE)"},
{name: "C.T.SCAN-KUB (Kidney,Ureter & Bladder)"},{name: "C.T.SCAN-Bronchoscopy(Virtual Bronchoscopy)"},
{name: "C.T.SCAN-VENOGRAPHY"},{name: "C.T Scan of the jaws (maxilla and mandibles and related soft tissues"},{name: "CT Scan Paranasal Sinusis"},
{name: "CT Scan Myelography"},{name: "CT Scan IVU"},{name: "CT Scanogram"},{name: "CT Scan Abdomen"},{name: "C.T Scan Facial Bones"},
{name: "C.T Scan Head and Neck"},{name: "CT-Scan-PELVIMETRY"},{name: "CT CD Reprinting"},
{name: "ANGIOGRAPHY STUDIES"},{name: "ABDOMINAL/PELVIC C.T. SCAN-DOUBLE/TRIPLE CONTRAST (P)"},{name: "ABDOMINAL/PELVIC C.T. SCAN-SINGLE CONTRAST (P)"},
{name: "ABDOMINAL/PELVIC C.T. SCAN-PLAN (P)"},
{name: "ANKLE C.T. SCAN (P)"},{name: "S"},{name: "BRAIN/SKULL C.T.SCAN-SINGLE CONTAST"},{name: "C. T. SCAN FACIAL BONES (P)"},
{name: "C. T. SCAN HEAD AND NECK (P)"},{name: "C. T. SCAN OF THE JAWS (MAXILLA AND MANDIBLES) (P)"},
{name: "C. T. SCAN CD RESULT RECORDING PER PLATE (P)"},{name: "C.T. SCAN REPORTING (P) (P)"},
{name: "C. T. SCAN-ANGIOGRAPHY (CARDIAC STUDY) (P)"},{name: "C. T. SCAN-ANGIOGRAPHY REGIONAL (P)"},
{name: "C. T. SCAN-ANGIOGRAPHY WHOLE BODY (P)"},{name: "C. T. SCAN-CALCIUM SCORING (FOR INCREASED SPECDIFICITY OF FRAMINGHAM SCORE) (P)"},
{name: "C. T. SCAN-COLONOSCOPY (VIRTUAL COLONOSCOPY) (P)"},{name: "C. T. SCAN-KUB (KIDNEY, URETER & BLADDER) (P)"},
{name: "CHEST C.T. SCAN-SINGLE CONTRAST (P)"},{name: "CHEST C.T. SCAN-PLAIN (P)"},{name: "CHEST C.T. SCAN-DOUBLE CONTRAST (P)"},
{name: "CHEST C.T. SCAN-TRIPLE CONTRAST (P)"},{name: "CHEST C.T. SCAN REPORTING (P)"},{name: "C.T. SCAN ABDMEN (P)"},
{name: "CHEST C.T. SCAN FEMUR (THIGH) AND RELATEED SOFT TISSUES (P)"},{name: "C.T. SCAN INTERPRETING ONLY (P)"},
{name: "C.T. SCAN IVU (P)"},{name: "C.T. SCAN LOWER ARM (ULNA AND RADIUS AND RELATED SOFT TISSUES) (P)"},
{name: "C.T. SCAN MYELOGRAPHY (P)"},{name: "C.T. SCAN PELVIC GIRDLE (PELVIS) (P)"},{name: "C.T. SCAN SINUSES/NASAL CAVITY (P)"},
{name: "C.T. SCAN TIBIA AND FIBULA AND RELATEDE SOFT TISSUES (P)"},{name: "C.T. SCAN UPPER ARM (HUMERUS AND RELATED SOFT TISSUES) (P)"},
{name: "EAR/MASTODIDS C.T. SCAN (P)"},{name: "ELBOW JOINT C.T. SCAN (P)"},
{name: "HAND C. T. SCAN (FINGERS INCLUDED) (P)"},{name: "KNEE JOINT C.T. SCAN (P)"},{name: "LUMBO-SACRAL SPINE C.T. SCAN (P)"},
{name: "NECK C. T. SCAN (SOFT TISSUE) - SINGLE CONTRAST (P)"},{name: "NECK C. T. SCAN (CERVICAL) - PLAIN (P)"},
{name: "ORBITAL C.T. SCAN (P)"},{name: "THORACIC SPINE S.T. SCAN (P)"},{name: "C.T. HEAD AND NECK (P)"},{name: "THORACOLUMBAR CT"},
{name: "C. T. BRAIN"}]


/************** Listing of ECG  ****************/

var listInfo4 = [{name: "ECG  12 Lead/Analysis NORMAL ECG @ REST)"},{name: "STRESS ECG(ECG @ EXERCISE)"},
{name: "HOLTER/AMBULATORY ECG"}];

/**************** Listing of MRI  ************/ 

var listInfo5 = [{name: "MRI - ABDOMINO-PELVIC SCAN-SINGLE CONTRAST"},{name: "MRI - ABDOMINO-PELVIC SCAN PLAIN"},
{name: "MRI - ANKLE SCAN"},{name: "MRI - BRAIN SCAN-PLAIN"},{name: "MRI - BRAIN SCAN-CONTRAST"},
{name: "MRI - RESULT RECORDING PER PLATE(FPR REPLACEMENT)"},
{name: "FUNCTIONAL MRI (FMRI)"},{name: "MRI -CERVICAL SPINE"},{name: "MRI - THORACIC SPINE"},{name: "MRI - LUMBOSACRAL SPINE"},
{name: "MRI - ABDOMEN"},
{name: "MRI - PELVIC"},{name: "MRI - CHEST"},{name: "MRI - EXTREMITIES-KNEES, ANKLES, SHOULDER JOINT"},
{name: "MRI - ANGIOGRAPHY STUDIES"},{name: "MRI Spectroscopy"},{name: "MRI - Screening One Sequence"},{name: "MRI CD Reprinting"},
{name: "MRI - Chol-Pancreatography"},{name: "MRI -ANGIOGRAPHY STUDIES (PEDIATRIC)"},{name: "MRI CHOL-PANCREATOGRAPHY (PEDIATRIC)"},
{name: "MRI SCREENING ONE SEQUENCE (PEDIATRIC)"},{name: "MRI -ABDOMINO-PELVIC SCAN-SINGLE-CIBTRAST (PEDIATRIC)"},
{name: "MRI -ABDOMINO-PELVIC SCAN-PLAIN (MRCP) (PEDIATRIC)"},{name: "MRI -ANKLE SCAN (PEDIATRIC)"},
{name: "MRI -BRAIN SCAN-PLAIN (PEDIATRIC)"},{name: "MRI -BRAIN SCAN-CONTRAST (ANGIO)"},
{name: "MRI REPORTING ONLY (PEDIATRIC)"},{name: "MRI RESULT RECORDING PER PLATE (FOR A REPLACEMENT) (PEDIATRIC)"},
{name: "MRI CD REPRINTING (PEDIATRIC)"},{name: "FUNCTIONAL MRI (FMR)(PEDIATRIC)"},
{name: "MRI -CERVICAL SPINE(PEDIATRIC)"},{name: "THORACIC SPINE(PEDIATRIC)"},{name: "MRI -LUMBOSACRAL SPINE(PEDIATRIC)"},
{name: "MRI -ABDOMEN(PEDIATRIC)"},
{name: "PELVIC SCAN SINGLE CONTRAST(PEDIATRIC)"},{name: "MRI -CHEST(PEDIATRIC)"},
{name: "MRI -EXTREMITIES-KNEES, ANKLES, SHOULDER JOINT(PEDIATRIC)"},
{name: "MRI Total Spine (CBN)"},{name: "MRI - LEG"},{name: "MRI BRAIN (P) WITH CONTRAST"},
{name: "MRI PELVIS PAEDIATRICS"},{name: ""}];


/***************** Listing of MAMMOGRAM   ********************/

var listInfo6 = [{name: "MAMMOGRAPHY - SINGLE BREAST(ADDITIONAL VIEW)"},{name: "MAMMOGRAPHY - SINGLE BREAST(PREVIOUS MASTECTOMY)"},
{name: "MAMMOGRAPHY WITH STEREOTACTIC BIOPSY"},{name: "MAMMOGRAPHY - BOTH BREASTS (TWO VIEWS)"}];

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
  console.log("yesssssssssssssss")
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
    console.log(sendObj)
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
  var cntrPage = localManager.getValue("userInfo"); 
  if(cntrPage){
     $location.path(localManager.getValue("currentPageForPatients") || "/appointment");   
  } else {
    $location.path(localManager.getValue("currentPageForPatients") || "/patient-dashboard");  
  }

}]);

////////////////////////////////////////////////////////////////////////////////////
//controller passes data from the page to angular. data from the patient notification box to be used within angular.
app.controller('patientWelcomeController',["$scope",function($scope){

}]);

app.controller("patientNotificationController",["$scope","$location","$http","$window","templateService","localManager",function($scope,$location,$http,
  $window,templateService,localManager){  
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



}]);

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
          console.log("deleted")
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
  console.log('Endpoint Created:');
  console.log(endpoint);

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
app.controller("patientPanelController",["$scope","$location","$http","templateService",function($scope,$location,$http,templateService){
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


///////////////pending Activities
app.controller("prescriptionTemplateController",["$scope","$location","$http","templateService",function($scope,$location,$http,templateService){
    var prescriptionObjs = [];
    templateService.holdPrescriptions.forEach(function(prescription){
    //var random = Math.floor(Math.random() * 999999999999 ); remember to delete this line when you clean up the database.
    //prescription.prescriptionId = random;    
      //console.log(prescription.prescriptionId)
      prescriptionObjs.unshift(prescription);
    });

    $scope.prescriptionRecordsResult = prescriptionObjs;

    var hasBeenSentTo = {};

    $http({
      method  : 'GET',
      url     : "/patient/get-prescription/track-record",        
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
      $location.path("/patient/view-prescription-history/" + id);
    }


    $scope.downloadPrescription = function (prescription) {
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

  var sending = function(id,type,url) {      
      if(type === 'Pharmacy'){   
        templateService.holdPrescriptionToBeForwarded.user_id = id; //user_id is the id of the phamarcy patient is forwarding prescription to.               
        
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
        console.log(localManager.getValue('doctorInfoforCommunication'));
    });

    $scope.videoRequest = function(){
      $window.location.href = "/patient/call";
    }

    $scope.chatRequest = function(){
      //$window.location.href = "/patient/call";
    }
    
}]);

//similar the mydoctorController
app.controller("myPatientController",["$scope","$http","$location","$window","templateService","localManager",
  function($scope,$http,$location,$window,templateService,localManager){
  var patient = {}; //patient obj.
  /*
  * the patient refreshing the dashboard page will still keep the patient on the current view template
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
        patient.allergy = $scope.patientInfo.allergy;
        patient.title = $scope.patientInfo.title;
        patient.sender = "doctor";
        var holdData = {
          profilePic: data.profile_pic_url,
          firstname: data.firstname,
          lastname: data.lastname
        }
       
        localManager.setValue("patientInfoForCommunication", holdData);
        console.log(localManager.getValue("patientInfoForCommunication"))
    });
     

    var viewed = false;

    
    $scope.makeVideoCall = function(){  
      $window.location.href = "/doctor/call";
    }

    $scope.writePrescription =function(){     
      $scope.isToPrescribe = true;
      $scope.isToSeeRecord = false;
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
        console.log(data);
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
    }

    $scope.removeDrug = function(){
      if(count.num > 1){
        $scope.drugList.pop(drug);
        count.num--;
      }
    }    

    patient.prescriptionBody = $scope.drugList;// adds prescription body to the prescription object as the doctor 
    //prepares to send it to the back end.
   


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
    //doctor creates a prescription object like above but saves it to a service called holdPrescriptionToBeForwarded. which will later be forwarded
    //to the backend after the doctor have searched and found the phamarcy to forward the prescription to.  
      templateService.holdPrescriptionToBeForwarded = patient;
      $location.path("/search/pharmacy");
    }
}]);

app.controller("communicationDoctorController",["$scope","localManager",function($scope,localManager){
  $scope.getinfo = localManager.getValue("patientInfoForCommunication");
}]);

app.controller("communicationPatientController",["$scope","localManager",function($scope,localManager){
  $scope.getinfo = localManager.getValue('doctorInfoforCommunication'); 
}]);

app.controller("VideoDiagnosisController",["$scope","$location","$window","$http","localManager","templateService",
  function($scope,$location,$window,$http,localManager,templateService){
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
        console.log(data)      
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
    }

    $scope.removeDrug = function(){
      if(count.num > 1){
        $scope.drugList.pop(drug);
        count.num--;
      }
    }    

    patient.prescriptionBody = $scope.drugList;// adds prescription body to the prescription object as the doctor 
    //prepares to send it to the back end.
   


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
      localManager.removeItem("deletedNotifications")
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
    console.log(deletedNote)
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
    console.log(deleted)
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

    console.log(objectFound)

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
        console.log(response)
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
      localManager.removeItem("deletedNotifications");
      localManager.removeItem("currPageForRadiology");
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

app.controller("radioTestControler",["$scope","$location","$http","templateService","localManager","ModalService",
  function($scope,$location,$http,templateService,localManager,ModalService) {
   
    //this deletes the view notiication after the center have viewed it.
    var deleted = localManager.getValue("deletedNotifications");
    console.log(deleted)
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







/*$scope.talk="talk the talk";
  $scope.user = {};
  $scope.getToken = function(){    
  $.getJSON("/gcamon",function(data){
    console.log(data)    
    var videoClient = new Twilio.Video.Client(data.token);
    videoClient.connect({to: $scope.user.name}).then(connected,function(error){
      console.log("could not connect to twilio " + error.messege)
    })
    
  })
   
 }*/
    
   /*$scope.getsip = function(){
    console.log("sent")
    $http({
        method  : 'POST',
        url     : 'https://api.twilio.com/2010-04-01/Accounts/ACebb54dd0a4bde0a55ed1f6f6a6721bc6/SIP/IpAccessControlLists/ALc91772d9bba580c5ed80f7bc46deddd3.json',
        headers : {'Content-Type': 'application/json'} 
        })
      .success(function(data) { 
        if(data)
          console.log(data)
      });
  }*/
















































































































