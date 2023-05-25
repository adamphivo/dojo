import assert from 'assert';
import { SeriesSum } from './sumofnth';

describe('Nth test suite', () => {
  it('Should return the correct string', () => {
    assert.equal(SeriesSum(1), '1.00');
    assert.equal(SeriesSum(2), '1.25');
    assert.equal(SeriesSum(3), '1.39');
    assert.equal(SeriesSum(4), '1.49');
  });
});
