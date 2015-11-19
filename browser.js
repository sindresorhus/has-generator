/* eslint-disable no-new, no-new-func */
'use strict';

try {
	new Function('return function * () {}');
	module.exports = true;
} catch (err) {
	module.exports = false;
}
