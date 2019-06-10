'use strict';

const Configstore = require('configstore');
const config = require('../config');

var conf = new Configstore('neeo-driver-denon-avr');
// conf.add = function(key) {
// 	if(!conf.has(key)) {
// 		conf.set(key, {});
// 	}
// }
conf.set(config);

module.exports = conf;
