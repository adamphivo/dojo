import assert from 'assert';
import { getSum } from './test';

describe('Test suite', () => {
  it('Should return the correct sum', () => {
    assert.deepStrictEqual(getSum(10), 23);
  });
});
