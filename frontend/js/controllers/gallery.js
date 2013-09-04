angular.module('delts.controllers').controller('GalleryCtrl', ['$scope', '$http', 'DataService', function ($scope, $http, DataService) {
		$scope.images = [];
		DataService.gallery(setimages);
		function setimages(data)
		{
			$scope.images = data;
		}
}]);
