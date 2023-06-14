// https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript
export function getSum(input: number): number {
  let sum = 0;
  for (let i = 0; i < input; i++) {
    !(i % 3) || !(i % 5) ? (sum += i) : undefined;
  }
  return sum;
}
