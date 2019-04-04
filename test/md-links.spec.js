const readFile = require('../src/functions.js');

describe('readFile', () => {
  it('should be an object', () => {
    expect(typeof readFile).toBe('object');
  });
});


const hasMD = require('../src/functions.js');

describe('hasMD', () => {

  it('should be an object', () => {
    expect(typeof hasMD).toBe('object');
    // console.log('FIX ME!');
  });

});
