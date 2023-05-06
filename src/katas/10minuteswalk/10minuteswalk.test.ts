import assert from 'assert';
import { isValidWalk } from './10minuteswalk';

describe('10minuteswalk Kata tests suite', () => {
  it('Should return the correct value according to the given directions', () => {
    assert.equal(
      isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']),
      true
    );
    assert.equal(
      isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']),
      false
    );
    assert.equal(isValidWalk(['w']), false);
    assert.equal(
      isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']),
      false
    );
  });
});
