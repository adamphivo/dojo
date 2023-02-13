"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countBitsSolution = exports.countBits = void 0;
// https://www.codewars.com/kata/526571aae218b8ee490006f4/
function countBits(n) {
    return n
        .toString(2)
        .split("")
        .filter((item) => item === "1").length;
}
exports.countBits = countBits;
// Another solution would have been to remove all "0" occurences from the string
function countBitsSolution(n) {
    return n.toString(2).replace(/0/g, "").length;
}
exports.countBitsSolution = countBitsSolution;
