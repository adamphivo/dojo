"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const countbits_1 = require("./countbits");
it("Should return the number of bits equal to one", () => {
    expect((0, countbits_1.countBits)(1234)).toBe(5);
    expect((0, countbits_1.countBits)(0)).toBe(0);
    expect((0, countbits_1.countBits)(7)).toBe(3);
});
