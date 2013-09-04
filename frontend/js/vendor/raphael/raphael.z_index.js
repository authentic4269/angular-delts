(function () {
	Raphael.el.zIndex = function (z) {
		this.node.style.zIndex = z;
		return this;
	}
})();