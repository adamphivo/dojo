type Result = (string | number | string[])[];
// https://www.codewars.com/kata/59f70440bee845599c000085/train/javascript
export function findHack(results: Array<Result>): string[] {
  const petitsMalins = [];
  for (let result of results) {
    if (result[1] > 200) {
      petitsMalins.push(result[0]);
      continue;
    }

    const totalPoints = getTotalPoints(result[2]);

    if (totalPoints !== result[1]) {
      petitsMalins.push(result[0]);
    }
  }

  return petitsMalins;
}

function getTotalPoints(notes: string[]): number {
  let count = 0;
  for (let note of notes) {
    switch (note) {
      case 'A': {
        count += 30;
        break;
      }
      case 'B': {
        count += 20;
        break;
      }
      case 'C': {
        count += 10;
        break;
      }
      case 'D': {
        count += 5;
        break;
      }
      default: {
        break;
      }
    }
  }

  if (hasBonusPoints(notes)) {
    count += 20;
  }

  return count;
}

function hasBonusPoints(notes: string[]): boolean {
  if (!notes.includes('C') && !notes.includes('D') && notes.length >= 5) {
    return true;
  } else {
    return false;
  }
}
