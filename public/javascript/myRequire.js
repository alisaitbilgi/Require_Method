function require(fileName) {
	var xhr = new XMLHttpRequest();
	var module = {exports: {}};
	var path = "/javascript/" + fileName + ".js";   //`/javascript/${fileName}.js`
	xhr.open("GET", path , false);
	xhr.onreadystatechange = function() {
		if(xhr.readyState === 4) {
			if(xhr.status === 200){
				/* bugün bu saate kadar evalsiz bu kodu işletmeye çalıştım fakat beceremedim, bu kısmı
				new Function şeklinde bıraktım ama aslında "eval(xhr.responseText);" ile aynı işlem.
				new Function'ın nasıl kullanıldığını sen gösterdikten sonra buraya uyarlamaya çalıştım
				fakat function body'sine module.exports.a = {a:5}; şeklinde yazığımızda çalışıyor ancak
				mesela var x = module.exports.a = {a:5}; dedikten sonra new Function'ın body'sine x'i yazığımda,
				bu x'in eşit olduğu işlemi yani yaptıramadım.. :(  Neden yazdıramadığımı biliyorum anladım fakat nasıl
				yazdırmam gerektiğini bulamadım o yüzden daha fazla zaman kaybetmeden eval'li olan versiyonuyla
				bıraktım.. Check'lerin eklenmiş halini de , eğer oluyor evalsiz yazılan halini de yazabilirim */
				eval(new Function("module", "response", "return response")(module, xhr.responseText));
			}
		}
	}
	xhr.send(null);
	return module.exports;
};
