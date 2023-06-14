export function lowestProduct(input: string): number | string {
  const ERROR_MESSAGE = 'Number is too small';

  if (input.length < 4) {
    return ERROR_MESSAGE;
  }

  let max = Infinity;

  for (let i = 0; i < input.length - 3; i++) {
    const current = +input[i] * +input[i + 1] * +input[i + 2] * +input[i + 3];
    max = current < max ? current : max;
  }

  return max;
}
