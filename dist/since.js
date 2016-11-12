'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var moment = require('moment');
var _ = require('lodash');

var Since = function () {
  function Since(input) {
    _classCallCheck(this, Since);

    var daysSince = _.flow(this.parseInput, this.getSecondsSince, this.secondsToDays)(input);

    // TODO human-readable output
    console.log('It has been ' + daysSince + ' days since ' + input);
  }

  /**
  * Converts string input to moment object
  */


  _createClass(Since, [{
    key: 'parseInput',
    value: function parseInput(input) {
      var result = null;

      var match = input.match(/^(\d{1,2})\/(\d{1,2})\/(\d{2}|\d{4})$/);
      if (match) {
        result = moment(match[1] + '/' + match[2] + '/' + match[3], "MM-DD-YYYY");
      }

      // TODO add support for more input formats

      return result;
    }

    /**
    * Returns number of seconds that have elapsed between input and now
    */

  }, {
    key: 'getSecondsSince',
    value: function getSecondsSince(input) {
      if (!moment.isMoment(input)) {
        return null;
      }
      return (moment().valueOf() - input.valueOf()) / 1000;
    }

    /**
    * Converts seconds to days
    */

  }, {
    key: 'secondsToDays',
    value: function secondsToDays(seconds) {
      console.log('hello world');
      if (!isNaN(seconds)) {
        return seconds / (60 * 60 * 24);
      }
      return null;
    }
  }]);

  return Since;
}();

exports.default = Since;