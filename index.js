#!/usr/bin/env node
'use strict';

const program = require('commander');

program
  .version('0.0.1')
  .command('init [name]','Creats a bare minimum Kohana2 Project')
  // .option('-m, --more','we can have as many options as we want')
  // .option('-i, --input [optional]','optional user input')
  // .option('-I, --another-input <required>','required user input')
  .parse(process.argv); // end with parse to parse through the input