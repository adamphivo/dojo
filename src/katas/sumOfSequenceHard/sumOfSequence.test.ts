import assert from 'assert';
import { sequenceSum } from './sumOfSequence';

describe('SumOfSequence test suite', () => {
  it('Should return the sum of the steps', () => {
    assert.deepEqual(sequenceSum(2, 6, 2), 12);
    assert.deepEqual(sequenceSum(1, 5, 1), 15);
    assert.deepEqual(sequenceSum(1, 5, 3), 5);
    assert.deepEqual(sequenceSum(-1, -5, -3), -5);
    assert.deepEqual(sequenceSum(16, 15, 3), 0);
    assert.deepEqual(sequenceSum(-24, -2, 22), -26);
    assert.deepEqual(sequenceSum(-2, 4, 658), -2);
    assert.deepEqual(sequenceSum(780, 68515438, 5), 469436517521190);
    assert.deepEqual(sequenceSum(9383, 71418, 2), 1253127200);
    assert.deepEqual(sequenceSum(20, 67338879, 5), 453452442295970);
  });
});
