var ScriptLoader = (function(){
	var urlCount = -1
	var urlCounter = 0;
	
	function loadScript(url, callback) {
		var script = document.createElement('script');
		script.type = 'text/javascript';

		if(script.readyState) {   // IE
			script.onreadystatechange = function() {
				if(script.readyState === 'loaded' || script.readyState === 'complete') {
					script.onreadystatechange = null;

					if(typeof callback === 'function') {
						callback();
					}
				}
			}
		} else {   // Other browsers
			script.onload = function() {
				if(typeof callback === 'function') {
					callback();
				}
			}
		}

		script.src = url;
		document.getElementsByTagName('head')[0].appendChild(script);		
	}


	return {
		load: function(urls, callback, progressCallback) {
			if(urls.constructor === Array) {
				if(urlCount == -1)
				{
					urlCount = urls.length;
					if(typeof progressCallback === "function") progressCallback(urlCounter, urlCount);
				}
				var that = this,
				url = urls.shift();

				if(url){
					loadScript(url, function() {
						urlCounter++;
						if(typeof progressCallback === "function") progressCallback(urlCounter, urlCount);
						that.load(urls, callback, progressCallback);
					});
				}
				else{
					if(typeof callback === "function") {
						callback();
					}
				}
			} else {
				loadScript(urls, callback);
			}
		}
	};
})();