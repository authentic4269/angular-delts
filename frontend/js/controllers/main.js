function MainCtrl($scope, $http, $window) {
		$scope.tab = 'home';
		$scope.redirect = function(newloc) {
			$scope.tab = newloc;
			window.location = '#/' + newloc;
		}
};