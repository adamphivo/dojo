export function isPangram(phrase: string): boolean {
  // Treat phrase (remove everything but letters)
  const arr = phrase
    .toLowerCase()
    .replace(/[^a-z]/gi, '')
    .split('');
  // Convert into a Set to remove duplicates
  const set = new Set([...arr]);
  // Check if set length is 26
  return set.size === 26;
}
