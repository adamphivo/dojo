// https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/typescript
export function buildTower(nFloors: number): string[] {
  let pyramid: string[] = [];
  let spaces = nFloors;
  let stars = 1;

  for (let i = 0; i < nFloors; i++) {
    pyramid.push(
      `${' '.repeat(spaces - 1)}${'*'.repeat(stars)}${' '.repeat(spaces - 1)}`
    );
    spaces--;
    stars += 2;
  }

  return pyramid;
}
