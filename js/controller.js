//ngRoute from angular-route.js

var app = angular.module('mainApp',['ngRoute']);

//$routeProvider is from ngRoute
app.config(['$routeProvider',function($routeProvider){

	/* **TUTS11 code
		$routeProvider
		.when('/',{
			template: 'Welcome user!'
		})
		.when('/anotherPage',{
			template: 'Welcome user! again...'
		})
		.otherwise({
			redirectTo: '/'
		});
	*/
	
	/*  **Tuts12 code** 
		$routeProvider
		.when('/',{
			templateUrl: 'tuts12-page.html'
		})
		.when('/surprise',{
			templateUrl: 'tuts12-page2.html'
		})
		.otherwise({
			redirectTo: '/'
		});
	*/
	
	$routeProvider
		.when('/',{
			templateUrl: 'tuts13-login.html'
		})
		.when('/dashboard',{
			resolve:{
				"check" : function($location,$rootScope){
					
					if(!$rootScope.loggedIn)
					{
						$location.path('/');
					}
				}
			},
			templateUrl: 'tuts13-dashboard.html'
			
			
		})
		.when('/error',{
			redirectTo: '/'
		})
		.otherwise({
			redirectTo: '/'
		});
}]);

//*Controller of 13
/* app.controller('loginController',function($scope,$location){
	$scope.submit = function(){
		var username = $scope.username;
		var password = $scope.password;
		if(username == 'ksmulawin' && password == '1')
		{
			$location.path('/dashboard');
		}
		else
		{
			alert('Invalid credentials!');
		}
	}
}); */

//controller of 14
app.controller('loginController',function($scope,$location,$rootScope){
	$scope.submit = function(){$rootScope.username = $scope.username;
		
		if($scope.username == 'ksmulawin' && $scope.password == '1')
		{
			$rootScope.loggedIn = true;
			$location.path('/dashboard');
		}
		else
		{
			alert('Invalid credentials!');
		}
	}
});