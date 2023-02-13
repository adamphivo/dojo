"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sub_1 = require("./sub");
it("Should substract two numbers", () => {
    expect((0, sub_1.sub)(10, 4)).toBe(6);
});
