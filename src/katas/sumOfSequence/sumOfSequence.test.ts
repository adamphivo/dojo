import assert from 'assert';
import { sequenceSum } from './sumOfSequence';

describe('SumOfSequence test suite', () => {
  it('Should return the sum of the steps', () => {
    assert.strictEqual(sequenceSum(2, 6, 2), 12);
    assert.strictEqual(sequenceSum(1, 5, 1), 15);
    assert.strictEqual(sequenceSum(1, 5, 3), 5);
  });
});
