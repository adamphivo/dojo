import assert from 'assert';
import { sortInner } from './sortInnter';

describe('Kata tests', function () {
  it('Example tests', function () {
    assert.deepEqual(
      sortInner('sort the inner content in descending order'),
      'srot the inner ctonnet in dsnnieedcg oredr'
    );
    assert.deepEqual(sortInner('wait for me'), 'wiat for me');
    assert.deepEqual(sortInner('this kata is easy'), 'tihs ktaa is esay');
  });
});
