import assert from 'assert';
import { dirReduc } from './dirReduc';

describe('dirReduc test suite', () => {
  it('Should reduce the array of direction', () => {
    assert.deepEqual(
      dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']),
      ['WEST']
    );
    assert.deepEqual(
      dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH']),
      []
    );
  });
});
