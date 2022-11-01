import { calculator } from "./calculator";

test("calculator", () => {
  const result = calculator(5, 4);
  expect(result).toBe("add: 9, subtract: 1, divide: 1.25, multiply: 20");
});

test("calculator", () => {
  const result = calculator(5);
  expect(result).toBe();
});

test("calculator", () => {
  const result = calculator(4);
  expect(result).toBe();
});

test("calculator", () => {
  const result = calculator(-1, 5);
  expect(result).toBe("add: 4, subtract: -6, divide: -0.2, multiply: -5");
});

test("calculator", () => {
  const result = calculator("5", "4");
  expect(result).toBe();
});
