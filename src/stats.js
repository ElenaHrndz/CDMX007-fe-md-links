const fs = require('fs');
var path = require('path');
const fetch = require('node-fetch');

let hasMD = function(startPath, callback){
  //We generate an array
  let mdArray = [];
  //generate a return value
  var _returner;

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

let readFile = function (mdToRead){
  fs.readFile(mdToRead, 'utf8', function(err, data) {
    if (err) {
    return console.log(err);
    }
    {
      //console.log(data.toString());
      const convertToString = data.toString();
      const regTxt = /(?:[^[])([^[]*)(?=(\]+\(((https?:\/\/)|(http?:\/\/)|(www\.))))/g;
      const txt = convertToString.match(regTxt);
      const reg = /(((https?:\/\/)|(http?:\/\/)|(www\.))[^\s\n)]+)/g;
      let url = convertToString.match(reg);
      const urlTotal = url.length;
      let uniqueUrl;
      if(url != null){
        //console.log(txt)
       // console.log("This are the found links".cyan);
        //console.log(urlTotal);
        console.log('Total links' +" " + url.length);
        uniqueUrl = url.filter((v, i, a) => a.indexOf(v) === i);
        console.log('Total unique links' +" " + uniqueUrl.length + "\n");
      }
      else
      {

      }

     }
    //console.log(data);
 });
}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

module.exports.hasMD = hasMD;
module.exports.readFile = readFile;
