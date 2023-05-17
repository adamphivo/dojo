// https://www.codewars.com/kata/581bc0629ad9ff9873000316/train/typescript
export function calculate(sum: string): number | string {
  const ERROR_MESSAGE = '400: Bad request';
  const allowedChars = /^[0-9$+\-*.]+$/;

  // First check if input is wrong
  if (!allowedChars.test(sum)) return ERROR_MESSAGE;

  // Translate string to operations
  const splitPattern = /([$+\-*])/;
  const arr = sum.split(splitPattern).filter(Boolean);

  // Case if only single input number
  if (arr.length === 1) return +arr[0];

  while (arr.length > 1) {
    // We clear the top-level operation "*" and "/"
    while (arr.includes('*') || arr.includes('$')) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '*') {
          arr[i] = (+arr[i - 1] * +arr[i + 1]).toString();
          arr.splice(i + 1, 1);
          arr.splice(i - 1, 1);
          break;
        }
        if (arr[i] === '$') {
          arr[i] = (+arr[i - 1] / +arr[i + 1]).toString();
          arr.splice(i + 1, 1);
          arr.splice(i - 1, 1);
          break;
        }
      }
    }
    // We clear the bottom-level operations "+" and "-";
    while (arr.includes('-') || arr.includes('+')) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '+') {
          arr[i] = (+arr[i - 1] + +arr[i + 1]).toString();
          arr.splice(i + 1, 1);
          arr.splice(i - 1, 1);
          break;
        }
        if (arr[i] === '-') {
          arr[i] = (+arr[i - 1] - +arr[i + 1]).toString();
          arr.splice(i + 1, 1);
          arr.splice(i - 1, 1);
          break;
        }
      }
    }
  }

  return +arr[0];
}
