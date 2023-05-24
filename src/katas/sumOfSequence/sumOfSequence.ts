export function sequenceSum(begin: number, end: number, step: number): number {
  let count = 0;
  for (let i = begin; i <= end; i += step) {
    count += i;
  }
  return count;
}
