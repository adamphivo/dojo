import assert from 'assert';
import { findUniq } from './findUniqueString';

describe('findUniqueString test suite', () => {
  it('Should find the string with unique char', () => {
    // assert.strictEqual(
    //   findUniq(['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a']),
    //   'BbBb'
    // );
    // assert.strictEqual(
    //   findUniq(['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba']),
    //   'foo'
    // );
    // assert.strictEqual(findUniq(['silvia', 'vasili', 'victor']), 'victor');
    // assert.strictEqual(
    //   findUniq(['Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter']),
    //   'Harry Potter'
    // );
    assert.strictEqual(findUniq(['    ', 'a', ' ']), 'a');
  });
});
