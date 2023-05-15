import assert from 'assert';
import { narcissistic } from './narcissistic';

describe('Narcissistic test suite', () => {
  it('should be true', () => {
    assert.strictEqual(narcissistic(7), true);
    assert.strictEqual(narcissistic(153), true);
    assert.strictEqual(narcissistic(1634), true);
  });
});
