const argv = require('yargs').argv;
const moment = require('moment');
const _ = require('lodash');

// Get command line args
const dateInput = argv._[0];
console.log(dateInput);

const Since = class Since {
  constructor(input) {
    this.input = input;

    const daysSince = _.flow(
      this.parseInput,
      this.getSecondsSince,
      this.secondsToDays
    )(input);

    // TODO human-readable output
    console.log(`It has been ${daysSince} days since ${input}`);
  }

  /**
  * Converts string input to moment object
  */
  parseInput(input) {
    let result = null;

    const match = input.match(/^(\d{1,2})\/(\d{1,2})\/(\d{2}|\d{4})$/);
    if (match) {
      result = moment(`${match[1]}/${match[2]}/${match[3]}`, "MM-DD-YYYY");
    }

    // TODO add support for more input formats

    return result;
  }

  /**
  * Returns number of seconds that have elapsed between input and now
  */
  getSecondsSince(input) {
    if (!moment.isMoment(input)) {
      return null;
    }
    return (moment().valueOf() - input.valueOf()) / 1000;
  }

  /**
  * Converts seconds to days
  */
  secondsToDays(seconds) {
    if (!isNaN(seconds)) {
      return seconds / (60 * 60 * 24);
    }
    return null;
  }
}

// Do nothing if no input provided
if (!dateInput) {
  console.log("No input provided.");
  return;
}

// Create new Since, which prints result to console
const mySince = new Since(dateInput);
