const colors = require('colors');

// const functions = require('./functions.js');
// functions.hasMD('./', function(array) {
//     array.forEach(fileName => {
//       functions.readFile(fileName);
//     });
// });

const validate = require('./validate.js');
validate.hasMD('./', function(array) {
    array.forEach(fileName => {
      validate.readFile(fileName, function(urls , txt){
        validate.validate(urls, txt);
      });
    });
});

const stats = require('./stats.js');
stats.hasMD('./', function(array) {
    array.forEach(fileName => {
      stats.readFile(fileName);
    });
});
