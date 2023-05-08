import assert from 'assert';
import { pigIt } from './pigit';

describe('Pig Latin test suite', () => {
  it('Should move the first letter to last position and add ay at the end', () => {
    assert.strictEqual(pigIt('Pig latin is cool'), 'igPay atinlay siay oolcay');
    assert.strictEqual(pigIt('This is my string'), 'hisTay siay ymay tringsay');
  });
  it('Shoud leave punctuation mark untouched', () => {
    assert.strictEqual(pigIt('Hello world !'), 'elloHay orldway !');
  });
  it('Shoud leave multiple spaces', () => {
    assert.strictEqual(pigIt('Hello  world !'), 'elloHay  orldway !');
  });
});
