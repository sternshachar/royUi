angular.module('royApp')
.directive("nav-bar",function(){
	return {
		restrict: 'E',
		templateUrl: 'views/navigation.html'
	}
})