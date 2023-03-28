// https://www.codewars.com/kata/522551eee9abb932420004a0/train/typescript
export function nthfibo(n: number): number {
  // Initial sequence
  let f = [0, 1];
  if (n === 1 || n === 2) return f[n - 1];
  for (let i = 0; i < n; i++) {
    f.push(f[f.length - 1] + f[f.length - 2]);
  }
  return f[n - 1];
}
