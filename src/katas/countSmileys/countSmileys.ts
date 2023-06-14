export function countSmileys(input: string[]): number {
  const possibleSmileys = [
    ':)',
    ':D',
    ':-)',
    ':~)',
    ':~D',
    ':-D',
    ';)',
    ';-)',
    ';~)',
    ';D',
    ';-D',
    ';~D'
  ];

  return input.reduce((acc, item) => {
    return possibleSmileys.includes(item) ? acc + 1 : acc;
  }, 0);
}
