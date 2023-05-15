export function dirReduc(arr: string[]): string[] {
  const opposites = {
    NORTH: 'SOUTH',
    SOUTH: 'NORTH',
    EAST: 'WEST',
    WEST: 'EAST'
  };

  const map = new Map(Object.entries(opposites));

  for (let i = 0; i < arr.length; i++) {
    if (map.get(arr[i]) === arr[i + 1]) {
      arr.splice(i, 2);
      return dirReduc(arr);
    }
  }

  return arr;
}
