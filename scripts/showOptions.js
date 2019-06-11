
const Denon = require('denon-client');


var prefix = [ 'Denon', 'Options' ];
function showObject(obj) {
	for(let [key, value] of Object.entries(obj)) {
		let a = prefix;
//		console.log(key);
		if(typeof value == 'object') {
			prefix.push(key);
			showObject(value);
		} else {
			a.push(key);
			console.log(a.join('.'));
		}
		prefix.pop();
	}
}


showObject(Denon.Options);
