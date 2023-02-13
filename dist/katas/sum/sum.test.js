"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sum_1 = require("./sum");
it("Should add two number", () => {
    expect((0, sum_1.sum)(1, 4)).toBe(5);
});
