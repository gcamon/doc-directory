var app = angular.module('myApp',[]);

app.service("multiData",["$http","$window",function($http,$window){
	this.sendData = function(url,data){
		var fd = new FormData();

		for(var key in data){
			fd.append(key,data[key]);
		};

		$http.put(url,fd,{
			transformRequest: angular.identity,
			headers: {"Content-Type":undefined}
		})
    .success(function(response){
      if(response === "success")
        $window.location.href = '/user/user-update';
    });

	}

}]);

app.factory("dataFromBack",function(){
  var content = {};
  return {
    set: function(data){
      content["dataFromBackend"] = data;
    },
    get: function(){
      return content["dataFromBackend"];
    }
  }
})

app.controller('loginController',["$scope","$http","$location","$window","dataFromBack",function($scope,$http,$location,$window,dataFromBack) {
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
              console.log(data);              
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

app.controller('profileController',["$scope","$http","$location","dataFromBack",function($scope,$http,$location,dataFromBack) {
  
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
}])

app.controller('updateController',["$scope","$http","$location","multiData",function($scope,$http,$location,multiData) {
  $scope.user = {};
  $scope.update = function(){
    var uploadUrl = "/user/update"; 
    console.log($scope.user)       
     multiData.sendData(uploadUrl,$scope.user);    
	}

}])