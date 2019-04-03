// const files = require('fs');
//
// exports.readFile = function() {
//     files.readFile('README.md', 'utf8', function(err, data) {
//       if (err) {
//         return console.log(err);
//       }
//
//       console.log(data);
//     });
//   },
//
//   exports.mdLinks = function() {
//     files.readFile('README.md', 'utf8', function(err, data) {
//       if (err) {
//         return console.log(err);
//       }
//
//       console.log(data);
//     });
//     //  return README.md;
//   }


const fs = require('fs');
var path = require('path');

exports.hasMD = function(startPath, callback){
  //We generate an array
  let mdArray = [];

  //generate a return value
  var _returner;

  //We create an  asyncronus return value
  //read all the files in an specific directory
  _returner = fs.readdir(startPath, (err, files) => {

    files.forEach(file => {
      //if some extencion name of the file has md we added to the array to return
      if(path.extname(file) == '.md'){
        mdArray.push(file);
      }
    });
    callback(mdArray);
  });

  return _returner;
}

// exports.stat = function (mdToRead){
//  fs.stat(".md", function(err, stat) {
//     if(err == null) {
//      console.log('File exists');
//     } else if(err.code == 'ENOENT') {
//      // file does not exist
//      fs.writeFile('log.md', 'Some log\n');
//     } else {
//      console.log('Some other error: ', err.code);
//     }
//  });
// }


exports.readFile = function (mdToRead){
  fs.readFile(mdToRead, 'utf8', function(err, data) {
    if (err) {
    return console.log(err);
    }{
       const convertToString = data.toString();
       console.log(convertToString)
       //Encuentra el número de coincidencias
      //  const reg = RegExp('http', 'g');
       const reg =  /\b(https?:\/\/.*?\.[a-z]{2,4}\b)/g;
       const foundHTTP = convertToString.match(reg);
       console.log(foundHTTP)

     }

    console.log(data);
 });
}
