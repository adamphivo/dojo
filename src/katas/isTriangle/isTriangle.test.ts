import assert from 'assert';
import { isTriangle } from './isTriangle';

describe('PublicTest', function () {
  it('should pass basic tests', () => {
    assert.strictEqual(isTriangle(1, 2, 2), true);
    assert.strictEqual(isTriangle(7, 2, 2), false);
  });
});
