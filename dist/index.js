#!/usr/bin/env node
'use strict';

var _since = require('./since');

var _since2 = _interopRequireDefault(_since);

var _yargs = require('yargs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Get input string from command line
var dateInput = _yargs.argv._[0];

// Do nothing if no input provided
if (!dateInput) {
  console.log("No input provided.");
} else {
  // Create new Since, which prints result to console
  new _since2.default(dateInput);
}