const { expect } = require("chai");
const calculator = require("../src/calculator");

describe("Calculator - add function", () => {
  it("should return 5 for 2 + 3", () => {
    expect(calculator.add(2, 3)).to.equal(5);
  });

  it("should return 0 for -2 + 2", () => {
    expect(calculator.add(-2, 2)).to.equal(0);
  });

  it("should return 100 for 40 + 60", () => {
    expect(calculator.add(40, 60)).to.equal(100);
  });

  it("should return a float for decimal inputs", () => {
    expect(calculator.add(1.5, 2.5)).to.equal(4.0);
  });
});
