import assert from 'assert';
import { arrayDiff } from './arraydiff';

describe('Array Diff test suite', () => {
  it('Should not remove', () => {
    assert.deepStrictEqual(arrayDiff([1, 2, 3], [4]), [1, 2, 3]);
  });
  it('Should items', () => {
    assert.deepStrictEqual(arrayDiff([1, 2, 3], [3, 2]), [1]);
  });
  it('Should remove all items', () => {
    assert.deepStrictEqual(arrayDiff([4, 5, 6], [4, 5, 6]), []);
  });
});
