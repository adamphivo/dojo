import assert from 'assert';
import { lowestProduct } from '.';

describe('Tests', () => {
  it('test', () => {
    assert.deepEqual(lowestProduct('123456789'), 24);
    assert.deepEqual(lowestProduct('234567899'), 120);
    assert.deepEqual(lowestProduct('2345611117899'), 1);
    assert.deepEqual(lowestProduct('333'), 'Number is too small');
    assert.deepEqual(
      lowestProduct('1234111'),
      4,
      'Numbers should be consecutives'
    );
  });
});
