export function findUniq(arr: number[]): number {
  arr.sort();
  return arr[0] === arr[1] ? arr[arr.length - 1] : arr[0];
}
