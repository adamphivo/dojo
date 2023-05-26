import assert from 'assert';
import { findHack } from './findTheCracker';

describe('findTheCracker test suite', () => {
  it('Should return the petit(s) malin(s)', () => {
    const results = [
      ['name1', 150, ['B', 'A', 'A', 'C', 'A', 'A']],
      ['name2', 120, ['B', 'A', 'A', 'A']],
      ['name3', 160, ['B', 'A', 'A', 'A', 'A']],
      ['name4', 140, ['B', 'A', 'A', 'C', 'A']]
    ];

    assert.deepStrictEqual(findHack(results), ['name2', 'name4']);
  });
});
