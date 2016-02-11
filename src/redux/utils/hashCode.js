// http://stackoverflow.com/questions/9407892/how-to-generate-random-sha1-hash-to-use-as-id-in-node-js

function byteToHex (byte) {
  return ('0' + byte.toString(16)).slice(-2)
}

// str generateId(int len);
//   len - must be an even number (default: 40)
export default function hashCode (len) {
  var arr = new Uint8Array((len || 40) / 2)
  window.crypto.getRandomValues(arr)
  return [].map.call(arr, byteToHex).join('')
}
