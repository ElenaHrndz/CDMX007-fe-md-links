const files = require('fs');

exports = {
  readFile:() => {
    files.readFile('README.md', 'utf8', function(err, data) {
      if (err) {
        return console.log(err);
      }

      console.log(data);
    });
  },

 mdLinks: ()=> {
    files.readFile('README.md', 'utf8', function(err, data) {
      if (err) {
        return console.log(err);
      }

      console.log(data);
    });
    //  return README.md;
  }
}
