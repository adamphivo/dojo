export function parseInt(input: string): number {
  const splited = splitInput(input);

  let acc = 0;
  let accTemp = 0;

  for (let i = 0; i < splited.length; i++) {
    if (splited[i] === 'thousand' || splited[i] === 'million') {
      accTemp *= stringToNumber(splited[i]);
      acc += accTemp;
      accTemp = 0;
    } else if (splited[i] === 'hundred') {
      accTemp *= 100;
    } else {
      if (splited[i].includes('-')) {
        const sub = splited[i].split('-');
        accTemp += stringToNumber(sub[0]) + stringToNumber(sub[1]);
      } else {
        accTemp += stringToNumber(splited[i]);
      }
    }

    if (i === splited.length - 1) {
      acc += accTemp;
    }
  }

  return acc;
}

function splitInput(input: string): string[] {
  return input.replaceAll(' and ', ' ').split(' ');
}

function stringToNumber(input: string): number {
  if (input === 'zero') return 0;
  if (input === 'one') return 1;
  if (input === 'two') return 2;
  if (input === 'three') return 3;
  if (input === 'four') return 4;
  if (input === 'five') return 5;
  if (input === 'six') return 6;
  if (input === 'seven') return 7;
  if (input === 'eight') return 8;
  if (input === 'nine') return 9;
  if (input === 'ten') return 10;
  if (input === 'eleven') return 11;
  if (input === 'twelve') return 12;
  if (input === 'thirteen') return 13;
  if (input === 'fourteen') return 14;
  if (input === 'fifteen') return 15;
  if (input === 'sixteen') return 16;
  if (input === 'seventeen') return 17;
  if (input === 'eighteen') return 18;
  if (input === 'nineteen') return 19;
  if (input === 'twenty') return 20;
  if (input === 'thirty') return 30;
  if (input === 'forty') return 40;
  if (input === 'fifty') return 50;
  if (input === 'sixty') return 60;
  if (input === 'seventy') return 70;
  if (input === 'eighty') return 80;
  if (input === 'ninety') return 90;
  if (input === 'hundred') return 100;
  if (input === 'thousand') return 1000;
  if (input === 'million') return 1000000;
  return 0;
}
