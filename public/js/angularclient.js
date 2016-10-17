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

 .when("/wallet",{
  templateUrl: '/assets/pages/my-wallet.html',
  controller: 'walletController'
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

  //this service is just to hold the consultation and current wallet amount for insuficientfundController.
  this.holdfee = "";
  this.holdwalletAmount = "";
 
}])

app.service("multiData",["$http","$window",function($http,$window){
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
      if(response === "success") {
        if(type === 'doctor'){
         $window.location.href = '/doctor/update';
        } else if('patient') {
          $window.location.href = '/patient/dashboard';
        }
      }
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
            if(data.typeOfUser === "Patient") {
              $window.location.href = '/patient/dashboard';  
            } else if(data.typeOfUser === "Doctor") {
              $window.location.href = '/doctor/dashboard';  
            } else if(data.typeOfUser === "Hospital" || data.type === "Clinic" || data.type === "Phamarcy" || 
              data.type === "Radiology Center" || data.type === "Laboratory Center" || data.type === "Fitness Center" ) {
              $window.location.href = "/medical-center/view";  
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
      console.log(model);
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

//controller for searches
app.controller('searchController',["$scope","$http","$location","$window","multiData","localManager",function($scope,$http,$location,$window,multiData,localManager) {
   $scope.user = {};
   console.log($scope.user)
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
      console.log(filterInput)    
      $http({
        method  : 'POST',
        url     : url,
        data    : filterInput, //forms user object
        headers : {'Content-Type': 'application/json'} 
        })
      .success(function(data) {              
        if(data){
          console.log(data)
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
app.controller("appointmentController",["$scope","$location","localManager","ModalService",function($scope,$location,localManager,ModalService){
   var doctorData = localManager.getValue("userInfo");
   $scope.docInfo = doctorData;

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
app.controller('listController',["$scope","$http","$location","$window","localManager",function($scope,$http,$location,$window,localManager) {
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
    $location.path("/welcome");
    $scope.getName = function(firstname,lastname,id,pic,specialty){
      templateService.getfirstname = firstname;
      templateService.getlastname = lastname;
      templateService.getid = id;
      templateService.getpic = pic;
      templateService.getspecialty = specialty;
    }
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
      for(var item = data.notification.length - 1; item > 0; item--) {
        if(!filter.hasOwnProperty(data.notification[item].type)){
          filter[data.notification[item].type] = [];
          filter[data.notification[item].type].push(data.notification[item]);
        } else {
          filter[data.notification[item].type].push(data.notification[item]);
        }
        
      }
     
      $scope.name = templateService.getfirstname;
      $scope.total = data.notification.length-1;
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
app.controller("inPatientDashboardController",["$scope","$location","localManager","templateService",function($scope,$location,localManager,templateService){
    $location.path("/appointment");
}]);

//controller passes data from the page to angular. data from the patient notification box to be used within angular.
app.controller("patientNotificationController",["$scope","$location","templateService",function($scope,$location,templateService){  
  var filter = {};
  $scope.getData = function(firstname,lastname,date,pic,fee,patientName,wallet_amount,doc_id,service_access,specialty){
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
       templateService.holdAllNotification.push(values);

   }
   }

   $scope.convertDate = function(date){
     templateService.getRealDate = date;
     $scope.realDate = templateService.getRealDate;
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
 })
 $scope.reqInfo = docObj;
 $scope.fundWallet = false;
 //sents out the doctor to the patient box showing that the patient has accepted the doctor and 
 //the wallet has enough fund to pay for consultation fee
 $scope.accept = function () {
    if(docObj.service_access === true) {//remember to set this param to docObj.service_access 
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
app.controller("patientTreatmentController",["$scope","ModalService","requestManager","templateService",function($scope,ModalService,requestManager,templateService){
 
}]);




