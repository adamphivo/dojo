import assert from 'assert';
import { dnaStrand } from './complementarydna';

describe('first', () => {
  it('Should return the complementary DNA string', () => {
    assert.strictEqual(dnaStrand('AAAA'), 'TTTT');
    assert.strictEqual(dnaStrand('ATTGC'), 'TAACG');
    assert.strictEqual(dnaStrand('GTAT'), 'CATA');
  });
});
