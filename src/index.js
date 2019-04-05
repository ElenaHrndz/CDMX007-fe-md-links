const functions = require('./functions.js');
const colors = require('colors');
//console.log (functions.stat());
functions.hasMD('./', function(array) {
    array.forEach(fileName => {
      functions.readFile(fileName);
    });
});
