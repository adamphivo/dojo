// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/typescript
export function multiplicationTable(size: number): number[][] {
  const container = [];

  for (let i = 1; i <= size; i++) {
    let subTable = [];
    for (let u = 1; u <= size; u++) {
      subTable.push(i * u);
    }
    container.push(subTable);
  }

  return container;
}
