const moment = require('moment');
const _ = require('lodash');

// Date format by country
// Source: https://en.wikipedia.org/wiki/Date_format_by_country
const inputFormats = [
  // United States: 'MM-DD-YYYY'
  {
    re: /^(\d{1,2})[-/](\d{1,2})[-/](\d{2}|\d{4})$/,
    format: 'MM-DD-YYYY',
  },

  // Asia, Europe: 'DD.MM.YYYY'
  {
    re: /^(\d{1,2})[-./](\d{1,2})[-./](\d{2}|\d{4})$/,
    format: 'DD-MM-YYYY',
  },

  // China, Japan, Iran: 'YYYY-MM-DD'
  {
    re: /^(\d{2}|\d{4})[-./](\d{1,2})[-./](\d{1,2})$/,
    format: 'YYYY-MM-DD',
  },
];

class Since {
  constructor(input) {
    let dayDelta = _.flow(
      Since.parseInput,
      Since.getSecondsDelta,
      Since.secondsToDays,
    )(input);

    if (!(!dayDelta || isNaN(dayDelta))) {
      dayDelta = Math.floor(dayDelta);
      this.toString = () => `Days ${dayDelta > 0 ? 'since' : 'until'} '${input}': ${Math.abs(dayDelta)}`;
    } else {
      this.toString = () => "Try entering a date in the format 'MM-DD-YYYY'.";
    }
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
  * Returns number of seconds that have elapsed between input and now
  */
  static getSecondsDelta(input) {
    let delta = null;

    if (moment.isMoment(input) && input.isValid()) {
      if (input.isBefore(moment())) {
        delta = (moment().valueOf() - input.valueOf()) / 1000;
      } else {
        delta = ((input.valueOf() - moment().valueOf()) / 1000) * -1;
      }
    }

    return delta;
  }

  /**
  * Converts seconds to days
  */
  static secondsToDays(seconds) {
    if (!(!seconds || isNaN(seconds))) {
      return seconds / (60 * 60 * 24);
    }
    return null;
  }
}

export default Since;
