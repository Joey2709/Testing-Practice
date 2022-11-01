import { analyzeArray } from "./analyzeArray";

test("analyzeArray", () => {
  const result = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(result).toEqual({ average: 24, min: 1, max: 8, length: 6 });
});

test("analyzeArray", () => {
  const result = analyzeArray();
  expect(result).toBe();
});

test("analyzeArray", () => {
  const result = analyzeArray("[0,1,2,3,4]");
  expect(result).toBe();
});

test("analyzeArray", () => {
  const result = analyzeArray(5);
  expect(result).toBe();
});

test("analyzeArray", () => {
  const result = analyzeArray(false);
  expect(result).toBe();
});
