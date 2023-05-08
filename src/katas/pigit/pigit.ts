// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/typescript
export function pigIt(a: string): string {
  const punctuationMarks = ['.', '?', '!'];
  const words = a.split(' ');
  const modifiedWords = words
    .map((word) => {
      // Case : space
      if (!word.length) return '';
      // Case : punctuation
      if (punctuationMarks.includes(word)) return word;

      // Actual string modification
      let letters = word.split('');
      letters.push(letters[0]);
      letters.shift();
      letters.push('ay');
      return letters.join('');
    })
    .join(' ');
  return modifiedWords;
}
