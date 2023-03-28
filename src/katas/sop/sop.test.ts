import { sop } from './sop';

const l1: number[] = [1, 4, 8, 7, 3, 15],
  l2: number[] = [1, -2, 3, 0, -6, 1],
  l3: number[] = [20, -13, 40],
  l4: number[] = [1, 2, 3, 4, 1, 0],
  l5: number[] = [10, 5, 2, 3, 7, 5],
  l6: number[] = [4, -2, 3, 3, 4],
  l7: number[] = [0, 2, 0],
  l8: number[] = [5, 9, 13, -3];

describe('example', function () {
  expect(sop(l1, 8)).toBe([1, 7]);
  expect(sop(l2, -6)).toBe([0, -6]);
  expect(sop(l3, -7)).toBe(undefined);
  expect(sop(l4, 2)).toBe([1, 1]);
  expect(sop(l5, 10)).toBe([3, 7]);
  expect(sop(l6, 8)).toBe([4, 4]);
  expect(sop(l7, 0)).toBe([0, 0]);
  expect(sop(l8, 10)).toBe([13, -3]);
});
