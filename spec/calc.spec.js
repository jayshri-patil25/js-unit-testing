describe("Testing Calculator", () => {
  // Add
  it("should return addition of two positive numbers ---ToBe", () => {
    // toBe()
    expect(add(2, 3)).toBe(5);
  });

  it("should not return the addition of two positive numbers", () => {
    expect(add(2, 3)).not.toBe(6);
  });

  // Sub
  it("should return subtraction  of two positive numbers", () => {
    expect(sub(10, 6)).toBe(4);
  });
  it("should not return subtraction  of two positive numbers", () => {
    expect(sub(10, 6)).not.toBe(7);
    // toBeNull()
    var y = null;
    expect(y).toBeNull();
  });

  //   Mul
  it("should return multiplication of two positive numbers", () => {
    expect(mul(2, 3)).toBe(6);
  });
  it("should not return multiplication of two positive numbers", () => {
    expect(mul(2, 3)).not.toBe(8);
  });

  // Div
  it("should return dividion of two positive numbers", () => {
    expect(div(3, 3)).toBe(1);
  });

  it("should not return dividion of two positive numbers", () => {
    expect(div(3, 3)).not.toBe(7);
  });
});

describe("Calculator function ", () => {
  beforeAll(() => {
    calc = new Calculator();
  });

  it("should return addition of two positive numbers", () => {
    expect(calc.addNum(2, 3)).toBe(5);
  });

  it("should return multiplication of two positive numbers", () => {
    expect(calc.mulNum(2, 3)).toBe(6);
  });

  //toHaveBeenCalled()
  it("should call add number function", () => {
    spyOn(calc, "addNum");
    calc.input(2, 3);
    expect(calc.addNum).toHaveBeenCalled();
  });

  //toHaveBeenCalledWith()
  it("should call add number function with input values ", () => {
    spyOn(calc, "addNum");
    calc.input(2, 3);
    expect(calc.addNum).toHaveBeenCalledWith(2, 3);
  });

  afterAll(() => {
    calc = undefined;
  });
});
