import assert from 'assert';
import { findEvenIndex } from './equalSideOfArray';

describe('FindEvenIndex test suite', () => {
  it('should find the even index in an array', () => {
    assert.deepStrictEqual(findEvenIndex([1, 2, 3, 4, 3, 2, 1]), 3);
    assert.deepStrictEqual(findEvenIndex([1, 100, 50, -51, 1, 1]), 1);
    assert.deepStrictEqual(findEvenIndex([20, 10, 30, 10, 10, 15, 35]), 3);
    assert.deepStrictEqual(findEvenIndex([10, -80, 10, 10, 15, 35, 20]), 6);
  });
  it('should return -1 if no even index exitsts', () => {
    assert.deepStrictEqual(findEvenIndex([1, 2, 3, 4, 5, 6]), -1);
  });
});
