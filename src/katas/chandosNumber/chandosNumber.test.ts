import assert from 'assert';
import { nthChandosNumber } from './chandosNumber';

describe('Basic Tests', function () {
  it('It should works for basic tests.', function () {
    assert.deepStrictEqual(nthChandosNumber(1), 5);
    assert.deepStrictEqual(nthChandosNumber(9), 630);
    assert.deepStrictEqual(nthChandosNumber(123), 97530);
    assert.deepStrictEqual(nthChandosNumber(23), 3280);
  });
});
