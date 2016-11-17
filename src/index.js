#!/usr/bin/env node

import Since from './since';
import { argv } from 'yargs';

// Get input string from command line
const dateInput = argv._[0];

// Do nothing if no input provided
if (!dateInput) {
  if (argv.help) {
    console.log(`Try entering a date in the format "MM-DD-YYYY".`);
  } else {
    console.log("No input provided.");
  }
} else {
  // Create new Since, which prints result to console
  new Since(dateInput);
}
