// https://www.codewars.com/kata/526571aae218b8ee490006f4/
export function countBits(n: number): number {
  return n
    .toString(2)
    .split("")
    .filter((item) => item === "1").length;
}

// Another solution would have been to remove all "0" occurences from the string
export function countBitsSolution(n: number): number {
  return n.toString(2).replace(/0/g, "").length;
}
