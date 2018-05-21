var app = angular.module('calculatorApp',[]);

app.controller('calculatorController',function($scope){
		$scope.symbols = ['+','-','*','/','%'];
		$scope.computatedValue = '0.00'
		
		$scope.update = function(){
		
						var n1 = typeof $scope.input1 != 'undefined' ? checkNaN(parseFloat($scope.input1)) : 0;
						var n2 = typeof $scope.input2 != 'undefined' ? checkNaN(parseFloat($scope.input2)) : 0;
						var operator = $scope.operator;
						total = eval(n1+operator+n2);
						$scope.computatedValue = checkNaN(total).toFixed(2);
		}

		});


		
function checkNaN(n)
{
	return isNaN(n) == true ? 0 : n;
}