function HomeCtrl($scope) {
    var base = "http://maps.google.com/maps?f=q&amp;source=%s&amp;hl=en&amp;" +
    "geocode=&amp;q=Delta+Tau+Delta,+Ithaca,+NY&amp;aq=t&amp;sll=37.0625," +
    "-95.677068&amp;sspn=52.505328,85.429688&amp;vpsrc=6&amp;t=m" +
    "&amp;ie=UTF8&amp;hq=&amp;hnear=Delta+Tau+Delta,+Ithaca,+New+York+14850" +
    "&amp;ll=42.452405,-76.488791&amp;spn=0.030398,0.054932" +
    "&amp;z=14&amp;iwloc=A%u";

  $scope.iframe_src = base.replace('%s', "s_q").replace('%u', "&amp;output=embed");
  $scope.iframe_href = base.replace('%s', 'embed').replace('%u', '');
  $scope.showLikeOverlay = false;
  
  $scope.hi = function() {
	  alert('hi');
  };
};
