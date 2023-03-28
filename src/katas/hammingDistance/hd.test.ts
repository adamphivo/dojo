import { hd } from './hd';

it('should compare two strings', () => {
  expect(hd('', '')).toBe(0);
  expect(hd('I like turtles', 'I like turkeys')).toBe(3);
  expect(hd('Hello World', 'Hello World')).toBe(0);
  expect(hd('old father, old artificer', 'of my soul the uncreated ')).toBe(24);
});
