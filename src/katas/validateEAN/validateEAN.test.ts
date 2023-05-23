import assert from 'assert';
import { validateEAN } from './validateEAN';

describe('EAN validation test suite', () => {
  it('Should check wether a EAN is valid or not', () => {
    assert.strictEqual(validateEAN('9783815820865'), true);
    assert.strictEqual(validateEAN('9783815820864'), false);
    assert.strictEqual(validateEAN('9783827317100'), true);
  });
});
