export function duplicateCount(text: string): number {
  //...
  let count = 0;
  let arr = text.toLowerCase().split('').sort();
  while (arr.length) {
    const isUnique = arr.indexOf(arr[0]) === arr.lastIndexOf(arr[0] || '');
    if (isUnique) {
      arr.splice(0, 1);
    } else {
      arr = arr.splice(0, arr.lastIndexOf(arr[0]));
      count++;
    }
  }
  return count;
}
