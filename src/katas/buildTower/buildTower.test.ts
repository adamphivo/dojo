import assert from 'assert';
import { buildTower } from './buildTower';

describe('buildTower test suite', () => {
  it('should return the correct tower', () => {
    assert.deepEqual(buildTower(1), ['*']);
    assert.deepEqual(buildTower(2), [' * ', '***']);
    assert.deepEqual(buildTower(3), ['  *  ', ' *** ', '*****']);
  });
});
