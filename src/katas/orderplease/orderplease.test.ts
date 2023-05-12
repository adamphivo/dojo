import assert from 'assert';
import { order } from './orderplease';

describe('Order please test suite', () => {
  it('Should return an empty string if the input string is empty', () => {
    assert.strictEqual(order(''), '');
  });
  it('Should sort words according to the inside number', () => {
    assert.equal(order('is2 Thi1s T4est 3a'), 'Thi1s is2 3a T4est');
    assert.equal(
      order('4of Fo1r pe6ople g3ood th5e the2'),
      'Fo1r the2 g3ood 4of th5e pe6ople'
    );
  });
});
