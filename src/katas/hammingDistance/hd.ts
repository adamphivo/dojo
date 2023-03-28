export function hd(a: string, b: string): number {
  // Init count
  let count = 0;

  for (let i = 0; i < a.length; i++) {
    a[i] === b[i] ? null : count++;
  }

  return count;
}
