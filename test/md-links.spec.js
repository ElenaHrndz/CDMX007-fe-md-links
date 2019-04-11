const readFile = require('../src/index.js', './functions.js', './validate.js', './stats.js','./validateStats.js' );
const hasMD = require('../src/index.js');



describe('readFile', () => {
  it('should be an object', () => {
    expect(typeof readFile).toBe('object');
  });
});

describe('hasMD', () => {
  it('should be an object', () => {
    expect(typeof hasMD).toBe('object');
    // console.log('FIX ME!');
  });
});

describe('validate', () => {
  it('should be an object', () => {
    expect(typeof hasMD).toBe('object');
    // console.log('FIX ME!');
  });
});
