export function isValidWalk(directions: string[]): boolean {
  if (directions.length != 10) return false;
  let position = { x: 0, y: 0 };

  for (let direction of directions) {
    switch (direction) {
      case 'n':
        position.y += 1;
        break;
      case 's':
        position.y -= 1;
        break;
      case 'w':
        position.x -= 1;
        break;
      case 'e':
        position.x += 1;
    }
  }

  return position.x === 0 && position.y === 0;
}
