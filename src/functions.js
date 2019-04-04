const fs = require('fs');
var path = require('path');

let hasMD = function(startPath, callback) {
  //We generate an array
  let mdArray = [];
  //generate a return value
  var _returner;
  //We create an  asyncronus return value
  //read all the files in an specific directory
  _returner = fs.readdir(startPath, (err, files) => {
    files.forEach(file => {
      //if some extencion name of the file has md we added to the array to return
      if (path.extname(file) == '.md') {
        mdArray.push(file);
      }
    });
    callback(mdArray);
  });

  return _returner;
}

let readFile = function(mdToRead) {
  fs.readFile(mdToRead, 'utf8', function(err, data) {
    if (err) {
      return console.log(err);
    } {
      //console.log(data.toString());
      const convertToString = data.toString();
      const reg = /(((https?:\/\/)|(http?:\/\/)|(www\.))[^\s\n)]+)/g;
      const foundUrl = convertToString.match(reg);
      console.log("This are the found links".cyan);
      if (foundUrl != null) {
        console.log(foundUrl);
      }
    }
    //console.log(data);
  });
}

/*exports.stat = function (){
 fs.stat('contenido.md', function(err, stat) {
    if(err == null) {
     console.log('File exists');
    } else if(err.code == 'ENOENT') {
     // file does not exist
     fs.writeFile('log.txt', 'Some log\n');
    } else {
     console.log('Some other error: ', err.code);
    }
 });
}*/
module.exports.hasMD = hasMD;
module.exports.readFile = readFile;
