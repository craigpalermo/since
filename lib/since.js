const moment = require('moment');
const _ = require('lodash');

// Date format by country
// Source: https://en.wikipedia.org/wiki/Date_format_by_country
const inputFormats = [
  // United States: "MM-DD-YYYY"
  {
    re: /^(\d{1,2})[-\/](\d{1,2})[-\/](\d{2}|\d{4})$/,
    format: "MM-DD-YYYY",
  },

  // Asia, Europe: "DD.MM.YYYY"
  {
    re: /^(\d{1,2})[-\.\/](\d{1,2})[-\.\/](\d{2}|\d{4})$/,
    format: "DD-MM-YYYY",
  },

  // China, Japan, Iran: "YYYY-MM-DD"
  {
    re: /^(\d{2}|\d{4})[-\.\/](\d{1,2})[-\.\/](\d{1,2})$/,
    format: "YYYY-MM-DD",
  },
];

class Since {
  constructor(input) {
    let daysSince = _.flow(
      this.parseInput,
      this.getSecondsSince,
      this.secondsToDays
    )(input);

    // TODO human-readable output
    if (!(!daysSince || isNaN(daysSince))) {
      daysSince = Math.floor(daysSince);
      this.toString = () => `Days since '${input}': ${daysSince}`;
    } else {
      this.toString = () => `Try entering a date in the format "MM-DD-YYYY".`;
    }
  }

  /**
  * Converts string input to moment object
  */
  parseInput(input) {
    let result = null;
    let match;

    for (let idx in inputFormats) {
      const { re, format } = inputFormats[idx];
      match = input.match(re);

      if (match) {
        return moment(`${match[1]}-${match[2]}-${match[3]}`, format);
      }
    }
  }

  /**
  * Returns number of seconds that have elapsed between input and now
  */
  getSecondsSince(input) {
    if (!moment.isMoment(input) || !input.isValid()) {
      return null;
    }
    return (moment().valueOf() - input.valueOf()) / 1000;
  }

  /**
  * Converts seconds to days
  */
  secondsToDays(seconds) {
    if (!(!seconds || isNaN(seconds))) {
      return seconds / (60 * 60 * 24);
    }
    return null;
  }
}

export default Since;
