// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/solutions/typescript
export function accum(s: string): string {
  return s
    .split('')
    .map((item, index) => {
      return `${item.toUpperCase()}${item.repeat(index).toLowerCase()}`;
    })
    .join('-');
}
