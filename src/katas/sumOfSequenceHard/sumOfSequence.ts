export function sequenceSum(b: number, e: number, s: number) {
  let n = Math.floor((e - b) / s) + 1;
  if (n <= 0) return 0;
  return ((2 * b + s * (n - 1)) * n) / 2;
}
