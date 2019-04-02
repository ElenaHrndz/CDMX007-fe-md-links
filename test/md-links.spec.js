const readFile = require('../src/functions.js');

describe('readFile', () => {
  it('is a object', () => {
    expect(typeof readFile).toBe('object');
  });
});


const mdLinks = require('../src/functions.js');

describe('mdLinks', () => {

  it('should be a object', () => {
    expect(typeof mdLinks).toBe('object');
    // console.log('FIX ME!');
  });

});
