import assert from 'assert';
import { multiplicationTable } from './multiplicationTable';

describe('Multiplication table maker test suite', () => {
  it('Should return n number of multiplication to n', () => {
    assert.deepStrictEqual(multiplicationTable(1), [[1]]);
    assert.deepStrictEqual(multiplicationTable(2), [
      [1, 2],
      [2, 4]
    ]);
    assert.deepStrictEqual(multiplicationTable(3), [
      [1, 2, 3],
      [2, 4, 6],
      [3, 6, 9]
    ]);
  });
});
