import assert from 'assert';
import { exchangeSort } from './exchangeSort';

// https://www.codewars.com/kata/58aa8b0538cf2eced5000115/train/javascript
describe('Exchange sort test suite', () => {
  it('should returns the minimum number of switch needed to sort the sequence', () => {
    assert.deepEqual(exchangeSort([7, 7, 8, 8, 9, 9]), 0);
    assert.deepEqual(exchangeSort([9, 7, 8, 8, 9, 7]), 1);
    assert.deepEqual(exchangeSort([8, 8, 7, 9, 9, 9, 8, 9, 7]), 4);
    assert.deepEqual(
      exchangeSort([9, 9, 9, 9, 9, 8, 8, 8, 8, 7, 7, 7, 7, 7, 7]),
      6
    );
    assert.deepEqual(exchangeSort([9, 9, 9, 7, 7, 8, 9, 7, 8, 9, 7, 9]), 4);
    assert.deepEqual(exchangeSort([9, 9, 7, 7, 8, 8]), 4);

    assert.deepEqual(exchangeSort([9, 7, 9]), 1);
    assert.deepEqual(exchangeSort([8, 7, 8]), 1);
    assert.deepEqual(exchangeSort([7, 8, 7, 8]), 1);
    assert.deepEqual(exchangeSort([8, 8, 7, 8]), 1);
    assert.deepEqual(exchangeSort([8, 8, 7, 7, 8]), 2);
  });
});
