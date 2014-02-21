var fs = require('fs');
var parser = require('../lib');
var assert = require('assert');

var file = __dirname + '/fixtures/attr-key.xml';

var data = fs.readFileSync(file);

// Wihout passing an attrKey
var result = parser.toJson(data, {reversible: true, object: true});
assert.strictEqual(result.wow.such['$t'], 'doge');
assert.strictEqual(result.wow.such.type, 'very');

// Without coercion
result = parser.toJson(data, {reversible: true, object: true, attrKey: '_'});
assert.strictEqual(result.wow.such['_'], 'doge');
assert.strictEqual(result.wow.such.type, 'very');
