// https://www.codewars.com/kata/5898b4b71d298e51b600014b/train/javascript
export function sortInner(input: string): string {
  return input
    .split(' ')
    .map((word) => {
      if (word.length === 1) return word;
      const firstLetter = word.at(0);
      const lastLetter = word.at(-1);
      const innerContent = word
        .slice(1, word.length - 1)
        .split('')
        .sort()
        .reverse()
        .join('');
      return firstLetter + innerContent + lastLetter;
    })
    .join(' ');
}
