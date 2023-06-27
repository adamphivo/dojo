import assert from 'assert';
import { getAugmentation } from './getAugmentation';

describe('test', () => {
  it('test', () => {
    assert.deepEqual(getAugmentation(100, 20), 120);
  });
});
