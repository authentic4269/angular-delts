angular.module('delts.controllers').controller('RecruitCtrl', ['$scope', 'DataService', function ($scope, DataService) {
  $scope.first = '';
  $scope.last = '';
  $scope.dorm = '';
  $scope.room = '';
  $scope.number = '';
  $scope.netid = '';
  $scope.classyear = '';
  $scope.years = getYears();
	  
  function getYears()
  {
    	var years = [];

    	var now = new Date();
    	var year_start = new Date(now.getFullYear(), 0, 0, 0, 0, 0, 0);
    	var milli_since_start = now.getTime() - year_start.getTime();
    	var current_day = milli_since_start / 86400000;
        year_start = year_start.getFullYear();
    	if (current_day < 31)
    		years.push(year_start);
    	years.push(year_start + 1);
    	years.push(year_start + 2);
    	years.push(year_start + 3);
    	if (current_day > 288)
    		years.push(year_start + 4);
          alert(years);
    	return years;
  }

  
 $scope.submitForm() = function() 
 {
 }
}]);
