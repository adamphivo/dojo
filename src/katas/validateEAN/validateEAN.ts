export function validateEAN(ean: string): boolean {
  return Boolean(
    ean.split('').reduce((acc, item, index) => {
      if (index === 12) {
        console.log(acc);
        const checksum = acc % 10 === 0 ? 0 : 10 - (acc % 10);
        return checksum === +item ? 1 : 0;
      } else {
        return index % 2 === 0 ? (acc += +item) : (acc += +item * 3);
      }
    }, 0)
  );
}
