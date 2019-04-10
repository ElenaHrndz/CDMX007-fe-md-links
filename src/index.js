const colors = require('colors');

const functions = require('./functions.js');
const validate = require('./validate.js');
const stats = require('./stats.js');
const validateStats = require('./validateStats.js')

const printLinks = () => {
  functions.hasMD('./', function(array) {
    array.forEach(fileName => {
      functions.readFile(fileName);
    });
  });
}

const validateLinks = () => {
  validate.hasMD('./', function(array) {
    array.forEach(fileName => {
      validate.readFile(fileName, function(urls, txt, file) {
        validate.validate(urls, txt, file);
      });
    });
  });
}

const validateLink = (fileName) => {
  validate.readFile(fileName, function(urls, txt, file) {
    validate.validate(urls, txt, file);
  });
}

const getStats = () => {
  stats.hasMD('./', function(array) {
    array.forEach(fileName => {
      stats.readFile(fileName);
    });
  });
}

const getStatsValidate = () => {
validateStats.hasMD('./', function(array) {
  array.forEach(fileName => {
    validateStats.readFile(fileName, function(uniqueUrl){
      validateStats.validStats(uniqueUrl);
    });
  });
});
}


module.exports.validateLink = validateLink;
module.exports.validateLinks = validateLinks;
module.exports.printLinks = printLinks;
module.exports.getStats = getStats;
module.exports.getStatsValidate = getStatsValidate;
