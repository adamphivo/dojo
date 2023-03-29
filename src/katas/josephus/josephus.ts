// www.codewars.com/kata/555624b601231dc7a400017a/train/typescript
export function josephus(n: number, k: number): number {
  let survivors = buildSurvivors(n);
  let i = 0;
  let steps = 1;
  while (survivors.length != 1) {
    if (steps === k) {
      survivors.splice(i, 1);
      i--;
    }
    if (steps == k) {
      steps = 1;
    } else {
      steps++;
    }
    if (i == survivors.length - 1) {
      i = 0;
    } else {
      i++;
    }
  }
  return survivors[0];
}

function buildSurvivors(n: number): Array<number> {
  let survivors = [];
  for (let i = 1; i <= n; i++) {
    survivors.push(i);
  }
  return survivors;
}

console.log(josephus(7, 3));
