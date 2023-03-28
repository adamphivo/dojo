import { nthfibo } from './fibo';

describe('Nth fibo', () => {
  it('should return the correct number in fibo sequence', () => {
    expect(nthfibo(1)).toBe(0);
    expect(nthfibo(2)).toBe(1);
    expect(nthfibo(3)).toBe(1);
    expect(nthfibo(4)).toBe(2);
  });
});
