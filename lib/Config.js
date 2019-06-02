'use strict';

const Configstore = require('configstore');
const config = require('../config');

var conf = new Configstore('neeo-driver-kodi');
// conf.add = function(key) {
// 	if(!conf.has(key)) {
// 		conf.set(key, {});
// 	}
// }
conf.set(config);

module.exports = conf;
