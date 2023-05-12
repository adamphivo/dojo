// https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/typescript
export function order(words: string): string {
  let sorted: string[] = [];

  words.split(' ').map((word) => {
    const number = +word[word.search(/\d+/)];
    sorted[number] = word;
  });

  return sorted.join(' ').trim();
}
