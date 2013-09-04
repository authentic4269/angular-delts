if(!angular.element.prototype.offset) {
	angular.element.prototype.offset = function () {
		var rawDom = this[0];
		var _x = 0, _y = 0;
		var body = document.documentElement || document.body;
		var scrollX = window.pageXOffset || body.scrollLeft;
		var scrollY = window.pageYOffset || body.scrollTop;
		_x = rawDom.getBoundingClientRect().left + scrollX;
		_y = rawDom.getBoundingClientRect().top + scrollY;
		return {left : _x, top : _y};
	}
}

angular.element.prototype.elementOffset = function (element) {
	var rawDom = (element.length)? element[0] : element;
	var _x = 0, _y = 0;
	var body = document.documentElement || document.body;
	var scrollX = window.pageXOffset || body.scrollLeft;
	var scrollY = window.pageYOffset || body.scrollTop;
	_x = rawDom.getBoundingClientRect().left + scrollX;
	_y = rawDom.getBoundingClientRect().top + scrollY;
	return {left : _x, top : _y};
}