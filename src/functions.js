const fs = require('fs');
var path = require('path');
const fetch = require('node-fetch');

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
      const regTxt = /(?:[^[])([^[]*)(?=(\]+\(((https?:\/\/)|(http?:\/\/)|(www\.))))/g;
      const txt = convertToString.match(regTxt);
      const reg = /((https?:\/\/|http?:\/\/|www\.)[^\)]+)/g;
      const urlArray = convertToString.match(reg);
      console.log("This are the found links".cyan);
      if (urlArray != null) {
        for (let i = 0; i < urlArray.length; i++) {
          console.log(`Text: ${txt[i]}\nLink: ${urlArray[i]}`);
        }
      }
    }
    //console.log(data);
  });
}

module.exports.hasMD = hasMD;
module.exports.readFile = readFile;
