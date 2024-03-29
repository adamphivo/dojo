import assert from 'assert';
import { beeramid } from './beeramid';

describe('Beeramid test suite', () => {
  it('Should return the maximum number of complete level', () => {
    assert.strictEqual(beeramid(9, 2), 1);
    assert.strictEqual(beeramid(10, 2), 2);
    assert.strictEqual(beeramid(11, 2), 2);
    assert.strictEqual(beeramid(21, 1.5), 3);
    assert.strictEqual(beeramid(454, 5), 5);
    assert.strictEqual(beeramid(455, 5), 6);
    assert.strictEqual(beeramid(4, 4), 1);
    assert.strictEqual(beeramid(3, 4), 0);
    assert.strictEqual(beeramid(0, 4), 0);
    assert.strictEqual(beeramid(-1, 4), 0);
  });
});
