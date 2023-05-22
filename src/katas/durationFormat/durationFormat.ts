export function formatDuration(seconds: number): string {
  const units = splitSecondsIntoUnits(seconds);
  const output = buildDispayString(units);
  return output;
}

function splitSecondsIntoUnits(seconds: number): number[] {
  const nbYear = Math.floor(seconds / (60 * 60 * 24 * 365));
  seconds = seconds % (60 * 60 * 24 * 365);

  // Get number of days
  const nbDays = Math.floor(seconds / (60 * 60 * 24));
  seconds = seconds % (60 * 60 * 24);

  // Get number of hours
  const nbHours = Math.floor(seconds / (60 * 60));
  seconds = seconds % (60 * 60);

  // Get number of minutes
  const nbMinutes = Math.floor(seconds / 60);
  seconds = seconds % 60;

  // Get number of seconds
  const nbSeconds = seconds;

  return [nbYear, nbDays, nbHours, nbMinutes, nbSeconds];
}

function buildDispayString(input: number[]): string {
  if (!input.filter(Boolean).length) return 'now';
  let humanReadableString = '';
  const units = ['year', 'day', 'hour', 'minute', 'second'];
  let arr: string[] = [];
  for (let i = 0; i <= input.length; i++) {
    if (input[i] > 0) {
      input[i] === 1
        ? arr.push(`${input[i]} ${units[i]}`)
        : arr.push(`${input[i]} ${units[i]}s`);
    }
  }

  if (arr.length === 1) return arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      humanReadableString += ' and ';
    } else if (i != 0) {
      humanReadableString += ', ';
    }
    humanReadableString += arr[i];
  }

  return humanReadableString;
}
