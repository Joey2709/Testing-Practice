import { reverseString } from "./reverseString";

test("reverse of string", () => {
  const result = reverseString("hello");
  expect(result).toBe("olleh");
});

test("reverse of string", () => {
  const result = reverseString(" hello ");
  expect(result).toBe("olleh");
});

test("reverse of string", () => {
  const result = reverseString("HELLO");
  expect(result).toBe("OLLEH");
});

test("reverse of string", () => {
  const result = reverseString("hELLO");
  expect(result).toBe("OLLEh");
});

test("reverse of string", () => {
  const result = reverseString();
  expect(result).toBe();
});
