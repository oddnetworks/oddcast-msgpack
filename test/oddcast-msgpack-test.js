'use strict';

const test = require('tape');

const errors = require('./../lib/errors');
const oddcastMsgpack = require('./../lib/oddcast-msgpack');

const MESSAGE = {
	pattern: {
		role: 'store',
		cmd: 'set',
		type: 'thingamabob'
	},
	payload: {
		arbitrary: 'thingy',
		goes: {
			right: 'here',
			ok: '?',
			yes: 123
		}
	}
};

test('encode', t => {
	t.plan(2);

	const encoded = oddcastMsgpack.encode(MESSAGE);
	const badCall = function () {
		oddcastMsgpack.encode(undefined);
	};

	t.throws(badCall, errors.EncodeError, 'throws an EncodeError');
	t.ok((encoded instanceof Buffer), 'returns a Buffer');
	t.end();
});

test('encodeHex', t => {
	t.plan(2);

	const EXPECTED = oddcastMsgpack.encode(MESSAGE).toString('hex');
	const badCall = function () {
		oddcastMsgpack.encodeHex(undefined);
	};

	t.throws(badCall, errors.EncodeError, 'throws an EncodeError');
	t.equal(oddcastMsgpack.encodeHex(MESSAGE), EXPECTED, 'returns hex string of Buffer');
	t.end();
});

test('decode', t => {
	t.plan(2);

	const encoded = oddcastMsgpack.encode(MESSAGE);
	const badCall = function () {
		oddcastMsgpack.decode(undefined);
	};

	t.throws(badCall, errors.DecodeError, 'throws a DecodeError');
	t.deepEqual(oddcastMsgpack.decode(encoded), MESSAGE, 'decodes a Buffer');
	t.end();
});

test('decodeHex', t => {
	t.plan(2);

	const encodedHex = oddcastMsgpack.encodeHex(MESSAGE);
	const badCall = function () {
		oddcastMsgpack.decodeHex('99');
	};

	t.throws(badCall, errors.DecodeError, 'throws a DecodeError');
	t.deepEqual(oddcastMsgpack.decodeHex(encodedHex), MESSAGE, 'decodes encoded hex string');
	t.end();
});
