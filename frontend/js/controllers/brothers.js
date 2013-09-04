angular.module('delts.controllers').controller('BrothersCtrl', ['$scope', '$http', 'DataService', function ($scope, $http, DataService) {
		$scope.brothers = [];
		DataService.getBrothers(callback);
		function callback(data) 
		{
			$scope.brothers = data;
		}

}]);
