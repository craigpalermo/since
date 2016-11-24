import moment from 'moment';
import _ from 'lodash';

import inputFormats from './formats.js';

class Since {
  constructor(input) {
    this.input = input;
    this.milliDelta = _.flow(
      Since.parseInput,
      Since.getMilliDelta
    )(input);
  }

  /**
  * Prints this object's delta as a formatted string. If delta is undefined, then print an
  * error message.
  */
  toString(units = 'days') {
    let result = "Try entering a date in the format 'MM-DD-YYYY'.";

    if (!(!this.milliDelta || isNaN(this.milliDelta))) {
      let duration = moment.duration(this.milliDelta, 'ms');
      let displayValue;

      switch (units) {
        case "weeks":
          displayValue = Math.floor(duration.asWeeks());
          break;
        case "months":
          displayValue = Math.floor(duration.asMonths());
          break;
        case "years":
          displayValue = Math.floor(duration.asYears());
          break;
        default:
          displayValue = Math.floor(duration.asDays());
      }

      // Sample output: "Years since '07/04/1776': 240"
      let adjective = displayValue > 0 ? 'since' : 'until';
      result = `${_.capitalize(units)} ${adjective} '${this.input}': ${Math.abs(displayValue)}`;
    }

    return result;
  }

  /**
  * Converts string input to moment object
  */
  static parseInput(input) {
    let match;

    for (let idx = 0; idx < inputFormats.length; idx += 1) {
      const { re, format } = inputFormats[idx];
      match = input.match(re);

      if (match) {
        return moment(`${match[1]}-${match[2]}-${match[3]}`, format);
      }
    }

    return null;
  }

  /**
  * Returns number of milliseconds between input and now
  */
  static getMilliDelta(input) {
    let delta = null;

    if (moment.isMoment(input) && input.isValid()) {
      if (input.isBefore(moment())) {
        delta = (moment().valueOf() - input.valueOf());
      } else {
        delta = (input.valueOf() - moment().valueOf()) * -1;
      }
    }

    return delta;
  }
}

export default Since;
