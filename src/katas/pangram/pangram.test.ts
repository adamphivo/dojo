import assert = require('assert');
import { isPangram } from './pangram';

it('should check wether the phrase is a pangram or not', () => {
  assert.strictEqual(
    isPangram('The quick brown fox jumps over the lazy dog.'),
    true
  );
  assert.strictEqual(isPangram('This is not a pangram.'), false);
});
