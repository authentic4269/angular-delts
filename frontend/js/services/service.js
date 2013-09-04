angular.module('delts.services').factory('DataService', ['$http', function ($http) {
			var root = {};
			root.getBrothers = function(success, failure) {
				$http.get(YII + '/api/event/view/' + id, {}).success(function (data) {
					Util.ajaxLoader.show();
					successCalback(data);
				}).error(function (data) {
					Util.ajaxLoader.show();
					failureCallback(data);
				});
			}
			
			return root;
		}
	]);
