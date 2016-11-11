#!/usr/bin/env node

import Since from './since';
import { argv } from 'yargs';

// Get command line args
const dateInput = argv._[0];

// Do nothing if no input provided
if (!dateInput) {
  console.log("No input provided.");
} else {
  // Create new Since, which prints result to console
  new Since(dateInput);
}
