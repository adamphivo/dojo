// https://www.codewars.com/kata/51e04f6b544cf3f6550000c1/train/typescript
export function beeramid(bonus: number, price: number): number {
  let level: number = 0;
  let n: number = 1;
  let i: number = 1;
  while (n <= Math.floor(bonus / price)) {
    i++;
    n += i ** 2;
    level++;
  }
  return level;
}
