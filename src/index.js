// const functions = require('./functions.js');
//
// console.log (functions.readFile());


const functions = require('./functions.js');

//console.log (functions.stat());
functions.hasMD('./', function(array) {
    array.forEach(fileName => {
      functions.readFile(fileName);
    });
});
