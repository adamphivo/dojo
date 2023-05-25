export function SeriesSum(n: number): string {
  if (!n) return '0.00';
  let sum = 1;
  let divider = 4;
  for (let i = 1; i < n; i++) {
    sum += 1 / divider;
    divider += 3;
  }
  return sum.toFixed(2);
}
