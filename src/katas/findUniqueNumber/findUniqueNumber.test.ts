import assert from 'assert';
import { findUniq } from './findUniqueNumber';

describe('findUniqueNumber test suite', () => {
  it('Should find the unique number', () => {
    assert.strictEqual(findUniq([1, 1, 1, 2, 1, 1]), 2);
    assert.strictEqual(findUniq([0, 0, 0.55, 0, 0]), 0.55);
  });
});
