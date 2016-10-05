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
    templateUrl: '/assets/pages/in-patient-dashboard-welcome.html',
    controller: 'welcomeController'
  })
});

app.service('templateService',[function(){
  this.isThroughLogin = false;
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
        $window.location.href = '/doctor/update';
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
}])

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
            if(data.type === "Patient") {
              $window.location.href = '/patient/dashboard';  
            } else if(data.type === "Doctor") {
              $window.location.href = '/doctor/dashboard';  
            } else if(data.type === "Hospital" || data.type === "Clinic" || data.type === "Phamarcy" || 
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
        $scope.user.typeOfUser = type;
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
   search($scope.refineUser,"/user/refine-find-group");
  }
  var search = function(data,url){
    if(Object.keys(data).length > 0){
    localManager.removeItem("userInfo");
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

app.controller("inPatientDashboardController",["$scope","$location","localManager","templateService",function($scope,$location,localManager,templateService){
  console.log(templateService.isThroughLogin)
  if(templateService.isThroughLogin){
    $location.path("/welcome");
  } else {
    $location.path("/appointment");
  }
   
}])

app.controller("appointmentController",["$scope","$location","localManager",function($scope,$location,localManager){
   var doctorData = localManager.getValue("userInfo");
   $scope.docInfo = doctorData;
   console.log($scope.docInfo)
}])
app.controller("welcomeController",["$scope","$location","localManager",function($scope,$location,localManager){
   
}])




