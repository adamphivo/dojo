import assert from 'assert';
import { parseInt } from './parseIntReloaded';

describe('parseInt reloaded test suite', () => {
  it('Should translate string into number', () => {
    assert.deepStrictEqual(parseInt('one'), 1);
    assert.deepStrictEqual(parseInt('twenty'), 20);
    assert.deepStrictEqual(parseInt('one million'), 1000000);
    assert.deepStrictEqual(parseInt('two hundred forty-six'), 246);
    assert.deepStrictEqual(parseInt('one hundred and one'), 101);
  });
});
