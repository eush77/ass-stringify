'use strict';

var stringify = require('..');

var test = require('tape');

var fs = require('fs');


var sample = fs.readFileSync(__dirname + '/sample.ass', { encoding: 'utf8' });
var subtitle = require('./sample.json');


test('ass-stringify', function (t) {
  t.equal(stringify(subtitle), sample);
  t.end();
});
