export function sumOfIntervals(intervals: [number, number][]) {
  const numbers: number[] = [];

  for (const interval of intervals) {
    for (let i = interval[0] + 1; i <= interval[1]; i++) {
      numbers.push(i);
    }
  }

  return new Set([...numbers]).size;
}
