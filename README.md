# hmac-isomorphic

### Usage

Make sure that whatever build system you are using (Webpack etc) is honoring the browser field in package.json. Then import the library.

###

The module provides a single function that returns a promise, both in node and in the browser. There are three arguments:
1. algo, string: the signing algorithim to use. Can be sha256, sha512, etc. Be sure to use the naming mechanism from nodejs, e.g. `sha256` _not_ `SHA-256`.
2. key, string: the encryption key to use. This should be secret.
3. message, string: the message to generate the signature from.

```js
const createHmacDigest = require('hmac-isomorphic');
createHmacDigest('sha256', 'abc123', 'def456').then(console.log);
```

### Implementation
* Uses [native crypto](https://nodejs.org/dist/latest-v12.x/docs/api/crypto.html#crypto_hmac_digest_encoding) in NodeJS and the native [subtle crypto](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest) in the browser.