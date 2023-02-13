import { countBits } from "./countbits";

it("Should return the number of bits equal to one", () => {
  expect(countBits(1234)).toBe(5);
  expect(countBits(0)).toBe(0);
  expect(countBits(7)).toBe(3);
});
