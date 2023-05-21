import assert from 'assert';
import { spacey } from './spacey';

describe('Spacey test suite', () => {
  it('Should remove space', () => {
    assert.deepStrictEqual(spacey(['kevin', 'has', 'no', 'space']), [
      'kevin',
      'kevinhas',
      'kevinhasno',
      'kevinhasnospace'
    ]);
  });
});
