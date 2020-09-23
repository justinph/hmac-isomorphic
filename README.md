# hmac-isomorphic

### Usage

Make sure that whatever build system you are using (Webpack etc) is honoring the browser field in package.json. Then import the library.

```js
const createHmacDigest = require('hmac-isomorphic');
const signature = await createHmacDigest('sha256', 'abc123', 'def456');
console.log(signature);
```

### Implementation
* Uses [native crypto](https://nodejs.org/dist/latest-v12.x/docs/api/crypto.html#crypto_hmac_digest_encoding) in NodeJS and the native [subtle crypto](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest) in the browser.