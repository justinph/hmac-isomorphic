if (typeof window !== 'undefined') {
  throw new Error(
    'The window object is available. Are you trying to run the module in the Browser?'
  );
}

const crypto = require('crypto');

const createHmacDigest = (algo, key, message) => {
  const hmac = crypto.createHmac(algo, key);
  hmac.update(message);
  return Promise.resolve(hmac.digest('hex'));
};

module.exports = createHmacDigest;