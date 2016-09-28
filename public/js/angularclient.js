var app = angular.module('myApp',["ngRoute"]);

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


});

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
        $window.location.href = '/user/user-update';
      }
    });
	}
}]);

app.factory("userData",function(){
  var user = {};
  return {
    set: function(data){
      user["userInfo"] = data;
    },
    get: function(){
      return user["userInfo"];
    }
  }
})

app.controller('loginController',["$scope","$http","$location","$window",function($scope,$http,$location,$window) {
  $scope.login = {};
  
	$scope.send = function(){        
        $http({
          method  : 'POST',
          url     : '/user/login',
          data    : $scope.login, //forms user object
          headers : {'Content-Type': 'application/json'} 
         })
          .success(function(data) {              
            if (data) {             
              $window.location.href = '/user/dashboard';             
            } else {       
              $scope.error = "Email or Password incorrect!";            
            }
          });	                                 //multiData.sendData(uploadUrl,$scope.logInfo);
	}
}])

app.controller('signupController',["$scope","$http","$location","$window",function($scope,$http,$location,$window) {
  $scope.user = {};
	$scope.submit = function(){        
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
    console.log($scope.user)       
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
          $window.location.href = '/user/user-update';                           
        } 
      });		                                 
	}

}]);

app.controller('searchController',["$scope","$http","$location","$window","multiData","userData",function($scope,$http,$location,$window,multiData,userData) {
   $scope.result;
   $scope.user = {};
    $scope.search = function(){        
      $http({
        method  : 'GET',
        url     : "/user/find-group",
        data    : $scope.user, //forms user object
        headers : {'Content-Type': 'application/json'} 
        })
      .success(function(data) {              
        console.log(data);
        if(data){
          userData.set(data);
          $window.location.href = "/user/find-specialist";
        }
      });		                                 
    }    
}]);

app.controller('resultController',["$scope","$http","$location","multiData","userData",function($scope,$http,$location,multiData,userData) {
   $scope.userInfo =  userData.get();
   console.log($scope.userInfo);
   $location.path("/list");                              
}]);

app.controller('listController',["$scope","$http","$location","multiData","userData",function($scope,$http,$location,multiData,userData) {
   $scope.userInfo =  userData.get();
   console.log($scope.userInfo);
                          
}]);

