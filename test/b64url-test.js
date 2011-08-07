var b64url = require('b64url')
  , assert = require('assert')

exports['encode drops padding'] = function(beforeExit) {
  assert.equal(b64url.encode('abcd'), 'YWJjZA', 'expect padding to be dropped')
}

exports['encode decode padding symmetry'] = function(beforeExit) {
  var data = 'abc'
  assert.equal(b64url.decode(b64url.encode(data)), data, 'expect same data')
}
