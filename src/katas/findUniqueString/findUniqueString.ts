export function findUniq(arr: string[]): string {
  let uniqueIndex = 0;
  const treated = arr.map((item) => {
    const set = new Set(item.toLowerCase().replace(/\s/g, '').split('').sort());
    return [...set].join('');
  });

  console.log(treated);

  for (let i = 0; i < treated.length; i++) {
    if (treated.indexOf(treated[i]) === treated.lastIndexOf(treated[i])) {
      uniqueIndex = i;
    }
  }

  return arr[uniqueIndex];
}
