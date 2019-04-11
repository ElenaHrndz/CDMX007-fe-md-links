#!/usr/bin/env node
const program = require('commander');

const {
  printLinks,
  validateLink,
  validateLinks,
  getStats,
  getStatsValidate
} = require ('./src/index.js');

program
  .version('0.1.0')

// program.on('command:*', function(){
//   printLinks();
// });

program
  .command('get-links')
  .alias('gl')
  .action(() =>{
    printLinks();
  })

program
  .command('validate-md <link>')
  .alias('vm')
  .action((link)=>{
    validateLink(link);
  })

program
  .command('validate')
  .alias('v')
  .action(() =>{
    validateLinks();
  })

program
  .command('stats')
  .alias('s')
  .action(()=>{
    getStats();
  })

  program
    .command('validateStats')
    .alias('vS')
    .action(()=>{
      getStatsValidate();
    })

program.parse(process.argv);
