angular.module('delts.services').factory('DataService', ['$rootScope', '$http', function ($rootScope, $http) {
    var root = {};
    var SERVER = 'http://localhost:8124';
    root.brothers = function(callback) {
    	$http.get(SERVER + '/brothers', {}).success(function (data) {
    		JSON.parse(callback(data));
    	})
    };
    root.gallery = function(callback) {
    	$http.get(SERVER + '/gallery', {}).success(function (data) {
    		JSON.parse(callback(data));
    	});
    };
    root.cordelts = function(callback) {
    	$http.get(SERVER + '/cordelts', {}).success(function (data) {
    		JSON.parse(callback(data));
    	});
    };
    return root;
}]);
