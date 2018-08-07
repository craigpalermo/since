#!/usr/bin/env node

import Since from './since';

const argv = require('yargs')
  .usage("Usage: since 'MM-DD-YYYY' [options]")

  // Require at least 1 argument
  .demand(112312)

  // Output formats
  .describe('w', 'Show output as weeks')
  .alias('w', 'weeks')
  .describe('m', 'Show output as months')
  .alias('m', 'months')
  .describe('y', 'Show output as years')
  .alias('y', 'years')

  .help('h')
  .alias('h', 'help')
  .argv;

// Get command line arguments
const dateInput = argv.date || argv._[0];

let units;
if (argv.w || argv.weeks) {
  units = 'weeks';
} else if (argv.m || argv.months) {
  units = 'months';
} else if (argv.y || argv.years) {
  units = 'years';
}

// Do nothing if no input provided
if (!dateInput) {
  if (argv.help) {
    // TODO
  } else {
    console.log("Try entering a date in the format 'MM-DD-YYYY'.");
  }
} else {
  // Create new Since, then print the result of its toString
  const mySince = new Since(dateInput);
  console.log(mySince.toString(units), '\n');
}
