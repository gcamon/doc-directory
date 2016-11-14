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

 .when("/referred-patients",{
  templateUrl: "/assets/pages/referred-patients-list.html",
  controller: "referredPatientsController"
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
    
    $scope.getName = function(firstname,lastname,id,pic,specialty){
      templateService.getfirstname = firstname;
      templateService.getlastname = lastname;
      templateService.getid = id;
      templateService.getpic = pic;
      templateService.getspecialty = specialty;
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
    if(docObj.service_access === true) {
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
      console.log("-------------------------------------")
      console.log(templateService.holdPrescriptions)
      console.log("-------------------------------------")
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
    $scope.pharmacyData.forEach(function(center){
      if(center.user_id === id){
        templateService.holdTheCenterToFowardPrescriptionTo = center;
        return;
      }
    });      
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
        console.log(templateService.holdPrescriptionToBeForwarded);
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
    templateService.holdIdForSpecificDoc = id;
    var page = "/patient-doctor/treatment/" + id;
    localManager.setValue("currentPageForPatients",page);
    $location.path("/patient-doctor/treatment/" + id);
     
  }

  $scope.userPatient = function(id){
    templateService.holdIdForSpecificPatient = id;
    var page = "/doctor-patient/treatment/" + id;
    localManager.setValue("currentPage",page);
    $location.path("/doctor-patient/treatment/" + id);
  }

}]);

//doctor's id is paased to this controller for ajax call;
app.controller("myDoctorController",["$scope","$location","$http","templateService","localManager",
  function($scope,$location,$http,templateService,localManager){
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
        console.log(data);
        $scope.docInfo = data;
    });
    
}]);

//similar the mydoctorController
app.controller("myPatientController",["$scope","$http","$location","templateService","localManager",
  function($scope,$http,$location,templateService,localManager){
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
          patient.sender = "doctor";
    });

    $scope.writePrescription =function(){
      $scope.isToPrescribe = true;
    }

    $scope.viewMedicalHistory = function(){
      $scope.isToSeeRecord = true;
    }

    $scope.writeNew = function(){
      $scope.isNewPrescription = true;
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
      $scope.drugList.pop(drug);
      count.num--;
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
      templateService.holdPharmacyReferralData = data;
      localManager.setValue("pharmacyData",data);
  }); 

  $scope.logout = function () {
    localManager.removeItem("userInfo");
    localManager.removeItem("currentPage");
    localManager.removeItem("currentPageForPatients");
    localManager.removeItem("currPageForPharmacy");
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

  pharmacyData.forEach(function(data){      
    if(refId === data.ref_id) {
      $scope.refData = data;       
      return;
    }
  });

  $scope.toAnotherPharmacy = function(){      
    var unavailableDrugArr = [];
    $scope.refData.pharmacy.prescription_body.forEach(function(drug){ //remember to replace phamarcy with the correct spelling pharmacy.   
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
    console.log(unavailableDrugArr)
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
}]);


//for pharmacists
app.controller("referredPatientsController",["$scope","$location","$http","templateService",function($scope,$location,$http,templateService) {
  $scope.patient = {};

  $scope.isNotOption = true;

  $scope.showOption = function(){
     $scope.isNotOption = false;
     if(!$scope.isOption){
      $scope.isOption = true;
     } else {
      $scope.isNotOption = true;
      $scope.isOption = false;
     }
  }

  $scope.findPrescription = function(){
    if($scope.patient.ref_id){
      $scope.patient.criteria = "refIdCriteria";      
    } else if($scope.patient.phone) {
      $scope.patient.criteria = "phoneCriteria";
    }
    typeOfSearch($scope.patient);
  }
    

  var typeOfSearch = function(criteria) {
    var foundData = [];      
    $http({
          method  : 'PUT',
          url     : "/pharmacy/find-patient/prescription",
          data    : criteria,
          headers : {'Content-Type': 'application/json'} 
          })
        .success(function(data) { 
          console.log(data)
          if(data){
            var convertToNum = parseInt($scope.patient.ref_id);      
            data.referral.forEach(function(referalData){
              if(referalData.ref_id === convertToNum){
                 foundData.push(referalData);
                 $scope.foundRefData = foundData;
               } else {
                 $scope.error = "Patient prescription not found!";
               }
            });
          } 
      });
  }

  $scope.viewPatientPrescription = function(id){
    templateService.holdId = id;
    var pageUrl = "/pharmacy/view-prescription/" + id;
    $location.path(pageUrl);
    localManager.setValue("currPageForPharmacy",pageUrl);
  }
    

    /*var selected = {};
    var foundData = [];
    if($scope.patient.ref_id){
      selected.typeOfSearch = "refIdCriteria";
    } else if($scope.patient.phone) {
      selected.typeOfSearch = "phoneCriteria";
    }
    selected.criteria = $scope.patient.ref_id || $scope.patient.phone;
    templateService.holdPharmacyReferralData.forEach(function(referalData){
      var toStr = referalData.ref_id.toString();
      if($scope.patient.ref_id === toStr){
        foundData.push(referalData);
        $scope.foundRefData = foundData;
        console.log(foundData);        
      } else {
        console.log("it entered backend");
        $http({
            method  : 'PUT',
            url     : "/pharmacy/find-patient/prescription",
            data    : selected,
            headers : {'Content-Type': 'application/json'} 
            })
          .success(function(data) { 
            if(data.found){      
              data.found.forEach(function(referalData){
               foundData.push(referalData);
               $scope.foundRefData = foundData;
              });
            } else {
              $scope.error = data.errMessage;
            }
        });
      }
    });*/    

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




