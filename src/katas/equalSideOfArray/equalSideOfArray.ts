// https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/typescript
export function findEvenIndex(input: number[]): number {
  for (let i = 0; i < input.length; i++) {
    const leftSum = input.slice(0, i).reduce((acc, item) => (acc += item), 0);
    const rightSum = input.slice(i + 1).reduce((acc, item) => (acc += item), 0);

    if (rightSum === leftSum) {
      return i;
    }
  }

  return -1;
}
