# oddcast-msgpack

    An oddcast utility for msgpack

[![Build Status](https://travis-ci.org/oddnetworks/oddcast-msgpack.svg?branch=master)](https://travis-ci.org/oddnetworks/oddcast-msgpack)

Install
-------

```bash
npm install --save oddcast-msgpack
```

Usage
-----

```js
const msg = require('oddcast-msgpack');
```

### encode(obj)

Encodes an object into a buffer.

    > let encoded = msg.encode({thing: 1, foo: 'bar'})
    > buf
    <Buffer 82 a5 74 68 69 6e 67 01 a3 66 6f 6f a3 62 61 72>

-------------------------------------------------------
### decode(buf)

Decodes a buffer.

    > let decoded = msg.decode(buf)
    > decoded
    { thing: 1, foo: 'bar' }

-------------------------------------------------------
### encodeHex(obj)

Encodes an object into a hex string.

    > encoded = msg.encodeHex({thing: 1, foo: 'bar'})
    > encoded
    '82a57468696e6701a3666f6fa3626172'

-------------------------------------------------------
### decodeHex(str)

Decodes a hex string into an object.

    > decoded = msg.decodeHex(encoded)
    > decoded
    {thing: 1, foo: 'bar'}

License
-------

MIT
