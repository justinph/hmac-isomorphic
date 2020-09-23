if (typeof window === 'undefined') {
  throw new Error(
    'The window object is not available. Are you trying to run the module in NodeJS?'
  );
}

const decodeSignature = (signature) => {
  var b = new Uint8Array(signature);
  var str = Array.prototype.map.call(b, x => ('00'+x.toString(16)).slice(-2)).join("")
  return str;
};

const createHmacDigest = async (algo, key, message) => {
  const encoder = new TextEncoder('utf-8');
  return crypto.subtle.importKey(
    "raw",
    encoder.encode(key),
    {
      name: "HMAC",
      hash: {name: "SHA-256"}
    },
    false,
    ["sign"]
  ).then(cryptoKey => {
    const encodedMessage = encoder.encode(message);
    return window.crypto.subtle.sign(
      "HMAC",
      cryptoKey,
      encodedMessage,
    )
  }).then(encodedSignature => {
    return decodeSignature(encodedSignature);
  });
};

module.exports = createHmacDigest;