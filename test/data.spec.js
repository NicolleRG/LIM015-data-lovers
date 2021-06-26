import { sortDataName, sortDataNoc } from '../src/data.js';

describe('sortDataName', () => {
  it('is a function', () => {
    expect(typeof sortDataName).toBe('function');
  });

  it.skip('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('sortDataNoc', () => {
  it('is a function', () => {
    expect(typeof sortDataNoc).toBe('function');
  });

  it.skip('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
