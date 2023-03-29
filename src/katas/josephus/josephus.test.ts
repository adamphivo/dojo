import { josephus } from './josephus';

describe('josephus', () => {
  expect(josephus(7, 3)).toBe(4);
  expect(josephus(11, 19)).toBe(10);
  expect(josephus(40, 3)).toBe(28);
  expect(josephus(100, 1)).toBe(100);
  expect(josephus(1, 300)).toBe(1);
  expect(josephus(2, 300)).toBe(1);
  expect(josephus(5, 300)).toBe(1);
  expect(josephus(7, 300)).toBe(7);
  expect(josephus(300, 300)).toBe(265);
});
