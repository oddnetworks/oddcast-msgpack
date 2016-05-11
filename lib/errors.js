'use strict';

const util = require('util');

// A superclass for all other Operational Errors and used by itself
// as a general operational exception indicator.
function OperationalError(message) {
	Error.call(this);
	Error.captureStackTrace(this, this.constructor);
	this.name = this.constructor.name;
	this.message = message;
}
util.inherits(OperationalError, Error);
exports.OperationalError = OperationalError;

function DecodeError(message) {
	Error.call(this);
	Error.captureStackTrace(this, this.constructor);
	this.name = this.constructor.name;
	this.message = message;
}
util.inherits(DecodeError, OperationalError);
exports.DecodeError = DecodeError;

function EncodeError(message) {
	Error.call(this);
	Error.captureStackTrace(this, this.constructor);
	this.name = this.constructor.name;
	this.message = message;
}
util.inherits(EncodeError, OperationalError);
exports.EncodeError = EncodeError;
