// https://www.codewars.com/kata/51e056fe544cf36c410000fb
export function topThreeWords(text: string): string[] {
  const results = new Map();
  // Replace unwanted chars with whitespace & lowercase
  const clean = text
    .toLowerCase()
    .replace(/[^a-zA-Z\s']/g, ' ')
    .replace(/\n/g, '');
  // Split text into words & filter out empty items due to multiple whitespaces
  const words = clean.split(' ').filter(Boolean).sort();

  // Proceed to count occurences
  for (let word of words) {
    results.get(word)
      ? results.set(word, results.get(word) + 1)
      : results.set(word, 1);
  }

  // Remove solo '
  results.delete("'");

  return [...results]
    .sort((a, b) => b[1] - a[1])
    .map((a) => a[0])
    .slice(0, 3);
}
