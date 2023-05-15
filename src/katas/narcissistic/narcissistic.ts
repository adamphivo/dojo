export function narcissistic(value: number): boolean {
  const numbers = value.toString().split('');
  return (
    value ===
    numbers.reduce((accumulate, number) => {
      return accumulate + (+number) ** numbers.length;
    }, 0)
  );
}
