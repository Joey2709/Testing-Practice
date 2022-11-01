import { capitalize } from "./capitalize";

test("capitalize of string", () => {
  const result = capitalize("hello");
  expect(result).toBe("Hello");
});

test("capitalize of string", () => {
  const result = capitalize(" hello ");
  expect(result).toBe("Hello");
});

test("capitalize of string", () => {
  const result = capitalize("HELLO");
  expect(result).toBe("Hello");
});

test("capitalize of string", () => {
  const result = capitalize("hELLO");
  expect(result).toBe("Hello");
});

test("capitalize of string", () => {
  const result = capitalize();
  expect(result).toBe();
});
