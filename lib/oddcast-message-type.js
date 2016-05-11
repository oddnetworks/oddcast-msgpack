'use strict';

function OddcastMessageType(size, value) {
	Object.defineProperties(this, {
		size: {
			enumerable: true,
			writable: false,
			configurable: false,
			value: size
		},
		value: {
			enumerable: true,
			writable: false,
			configurable: false,
			value: value
		}
	});
}

module.exports = OddcastMessageType;
