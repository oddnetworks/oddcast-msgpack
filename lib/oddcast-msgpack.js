'use strict';

const msgpack = require('msgpack5')();
const encode = msgpack.encode;
const decode = msgpack.decode;
const errors = require('./errors');
const OddcastMessageType = require('./oddcast-message-type');

msgpack.register(0x42, OddcastMessageType, oddcastEncode, oddcastDecode);

function oddcastEncode(obj) {
	const buf = new Buffer(obj.size);
	buf.fill(obj.value);
	return buf;
}

function oddcastDecode(data) {
	const result = new OddcastMessageType(data.length, data.toString('utf8', 0, 1));

	for (let i = 0; i < data.length; i++) {
		if (data.readUInt8(0) !== data.readUInt8(i)) {
			throw new errors.DecodeError('oddcastDecode: should all be the same');
		}
	}

	return result;
}

exports.encode = function (object) {
	try {
		return encode(object);
	} catch (err) {
		throw new errors.EncodeError(err.message);
	}
};

exports.encodeHex = function (obj) {
	try {
		return encode(obj).toString('hex');
	} catch (err) {
		throw new errors.EncodeError(`Hex encoding error: ${err.message}`);
	}
};

exports.decode = function (buffer) {
	try {
		return decode(buffer);
	} catch (err) {
		throw new errors.DecodeError(err.message);
	}
};

exports.decodeHex = function (hexString) {
	try {
		const buf = new Buffer(hexString, 'hex');
		return decode(buf);
	} catch (err) {
		throw new errors.DecodeError(`Hex decoding error: ${err.message}`);
	}
};
