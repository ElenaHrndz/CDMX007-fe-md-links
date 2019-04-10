const fs = require('fs');
var path = require('path');
const fetch = require('node-fetch');

let hasMD = function(startPath, callback) {
  //We generate an array
  let mdArray = [];
  //generate a return value
  var _returner;

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

let readFile = function(mdToRead, callback) {
  let _returnerUrl;
  _returnerUrl = fs.readFile(mdToRead, 'utf8', function(err, data) {
    if (err) {
      return console.log(err);
    } {
      const convertToString = data.toString();
      //const regTxt = /(?:[^[])([^[]*)(?=(\]+\(((https?:\/\/)|(http?:\/\/)|(www\.))))/g;
      //  const txt = convertToString.match(regTxt);
      const reg = /(((https?:\/\/)|(http?:\/\/)|(www\.))[^\s\n)]+)(?=\))/g;
      let url = convertToString.match(reg);
      //  const urlTotal = url.length;
      let uniqueUrl;
      if (url != null) {
        //console.log('Total links' +" " + url.length);
        uniqueUrl = url.filter((v, i, a) => a.indexOf(v) === i);
        //console.log('Total unique links' +" " + uniqueUrl.length + "");
        console.log(`File: ${mdToRead}\nTotal links ${url.length}\nTotal unique links ${uniqueUrl.length}\n`);
      }
      callback(uniqueUrl, mdToRead);
    }
  });
  return _returnerUrl;
}

let validStats = function(uniqueUrl, mdToRead) {
  let badLinks = 0;
  for (let i = 0; i < uniqueUrl.length; i++) {
    fetch(uniqueUrl[i])
      .then(response => {
        if (response.status == 404 | 400) {
          badLinks++;
        }
        if (i === uniqueUrl.length - 1) {
          console.log(`File: ${mdToRead}\nTotalTotal Functional Links: ${uniqueUrl.length-badLinks}\nTotal Broken links: ${badLinks}\n`)
        }
      });
  }
}


// function onlyUnique(value, index, self) {
//   return self.indexOf(value) === index;
// }

module.exports.hasMD = hasMD;
module.exports.readFile = readFile;
module.exports.validStats = validStats;
