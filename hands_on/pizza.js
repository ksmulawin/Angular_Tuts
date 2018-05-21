var pizzap = angular.module('pizzaApp',[]);

pizzap.controller('pizzaController',function($scope,$http){
				$http.get('menu.json')
					.success(function(result){
						$scope.flavor =  result.pizza;
						$scope.toppings =  result.toppings;
						$scope.sides =  result.sides;
						$scope.drinks =  result.drinks;
					});
					
				$scope.price = 0;
				$scope.getPrice = function(price){
					$scope.price = price;
				}
				
				
				$scope.toppo = [];
				$scope.toppingPrice = 0;
				$scope.getToppo = function(obj)
				{
					var topping = obj.t.ingredient;
					var toppo = $scope.toppo;
					if(toppo.indexOf(topping) !== -1) {
						$scope.toppingPrice -= parseFloat(obj.t.price);
						toppo.splice(toppo.indexOf(topping), 1);
					}
					else
					{
						toppo.push(topping);
						$scope.toppingPrice += parseFloat(obj.t.price);
					}
					
					
				}
				
});

pizzap.filter('join', function () {
    return function join(array, separator, prop) {
        if (!Array.isArray(array)) {
			return array; // if not array return original - can also throw error
        }

        return (!!prop ? array.map(function (item) {
            return item[prop];
        }) : array).join(separator);
    };
});


			