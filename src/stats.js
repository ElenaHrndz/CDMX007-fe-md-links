const fs = require('fs');
var path = require('path');
const fetch = require('node-fetch');

let readFile = function (mdToRead, needValidation = false){
  fs.readFile(mdToRead, 'utf8', function(err, data) {
    if (err) {
    return console.log(err);
    }
    {
      //console.log(data.toString());
      const convertToString = data.toString();
      const reg = /(((https?:\/\/)|(http?:\/\/)|(www\.))[^\s\n)]+)(?=\))/g;
      let url = convertToString.match(reg);
      let uniqueUrl;

      console.log(`File: ${mdToRead} has:`);
      console.log('Total links' +" " + url.length);
      uniqueUrl = url.filter((v, i, a) => a.indexOf(v) === i);
      console.log('Total unique links' +" " + uniqueUrl.length + "\n");

      if(needValidation){
        return validateStats(uniqueUrl, mdToRead);
      }
     }
    //console.log(data);
 });
}

let validateStats = function(uniqueUrl, mdToRead) {
    let badLinks = 0;
    let goodLinks = 0;
    for (let i = 0; i < uniqueUrl.length; i++) {
      fetch(uniqueUrl[i])
        .then(response => {
          if (response.status == 404||response.status == 400) {
            badLinks++;
          }else if (response.status == 200|201) {
            goodLinks++;
          }
          if (goodLinks+badLinks === uniqueUrl.length) {
            console.log(`File: ${mdToRead} has:`);
            console.log(`Total Functional Links: ${goodLinks}\nTotal Broken links: ${badLinks}\n`);
          }
        }
      );
    }
}

module.exports.readFile = readFile;
