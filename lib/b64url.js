function rtrim(data, chr) {
  var drop = 0
    , len = data.length
  while (data.charAt(len - 1 - drop) === chr) drop++
  return data.substr(0, len - drop)
}

module.exports.encode = function(data) {
  var buf = data
  if (!(data instanceof Buffer)) {
    buf = new Buffer(Buffer.byteLength(data))
    buf.write(data)
  }
  return rtrim(buf.toString('base64').replace('+', '-').replace('/', '_'), '=')
}

module.exports.decode = function(data, encoding) {
  encoding = encoding === undefined ? 'utf8' : encoding
  var buf = new Buffer(data.replace('-', '+').replace('_', '/'), 'base64')
  if (!encoding) return buf
  return buf.toString(encoding)
}
