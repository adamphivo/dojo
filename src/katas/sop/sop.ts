// https://www.codewars.com/kata/54d81488b981293527000c8f/train/typescript
export function sop(ints: number[], s: number): [number, number] | void {
  let solution: [[number, number], number] = [[0, 0], 0];
  let alreadyChecked: Array<number> = [];
  for (let i = 0; i < ints.length; i++) {
    if (i >= solution[1] && solution[1] != 0) break;
    if (alreadyChecked.indexOf(ints[i]) != -1) continue;
    console.log(i);
    const target = s - ints[i];
    const targetIndex = ints.indexOf(target, i + 1);
    if (targetIndex != -1 && solution[1] == 0) {
      solution = [[ints[i], target], targetIndex];
    }
    if (targetIndex != -1 && targetIndex < solution[1]) {
      solution = [[ints[i], target], targetIndex];
    }
    alreadyChecked.push(ints[i]);
  }
  return solution[1] != 0 ? solution[0] : undefined;
}

// Testing long array
let testArray = [];
let randomSum = Math.floor(Math.random() * 1000);

for (let i = 0; i < 10000000; i++) {
  const positive = Math.random() > 0.5;
  let number = Math.floor(Math.random() * 100);
  positive ? undefined : (number = number * -1);
  testArray.push(number);
}

console.time('sop');
const tutu = sop(testArray, randomSum);
console.timeEnd('sop');
