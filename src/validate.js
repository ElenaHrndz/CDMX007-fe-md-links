const fs = require('fs');
var path = require('path');
const fetch = require('node-fetch');

let hasMD = function(startPath, callback){
  //We generate an array
  let mdArray = [];
  //generate a return value
  let _returner;
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

let readFile = function (mdToRead,callback){
  // let urlArray = [];
  let _returnerUrl;
  _returnerUrl = fs.readFile(mdToRead, 'utf8', function(err, data) {
    if (err) {
    return console.log(err);
    }
      {
        const convertToString = data.toString();
        const regTxt = /(?:[^[])([^[]*)(?=(\]+\(((https?:\/\/)|(http?:\/\/)|(www\.))))/g;
        const txt = convertToString.match(regTxt);
        const reg = /(((https?:\/\/)|(http?:\/\/)|(www\.))[^\s\n)]+)(?=\))/g;
        const urlArray = convertToString.match(reg);
        if(urlArray != null){
          // console.log(txt)
        }
        callback(urlArray, txt, mdToRead);
      }
  });
  return _returnerUrl;
}

let validate = function (urlArray, txt, mdToRead) {
  for(let i =0; i < urlArray.length; i++){
    fetch(urlArray[i])
      .then(response => {
        if (response.status == 200) {
          //console.log("This are the ok links");
          console.log(`Text: ${txt[i]}\nLink: ${urlArray[i]}\nFile: ${mdToRead}\nResponse code: ${response.status}\nResponse: ${response.statusText}\n`.cyan)
        } else if (response.status == 404|400) {
          console.log(`ERROR.\nText: ${txt[i]}\nLink: ${urlArray[i]}\nFile: ${mdToRead}\nResponse code: ${response.status}\nResponse: ${response.statusText}\n`.red)
        }
      }
    );
    }
  }

module.exports.hasMD = hasMD;
module.exports.readFile = readFile;
module.exports.validate = validate;
