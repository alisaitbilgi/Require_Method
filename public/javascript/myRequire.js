function require(fileName) {
	var xhr = new XMLHttpRequest();
	var module = {exports: {}};
	var path = "/javascript/" + fileName + ".js";   //`/javascript/${fileName}.js`
	xhr.open("GET", path , false);
	xhr.onreadystatechange = function() {
		if(xhr.readyState === 4) {
			if(xhr.status === 200){
				new Function("module", xhr.responseText)(module);
			}
		}
	}
	xhr.send(null);
	return module.exports;
};
