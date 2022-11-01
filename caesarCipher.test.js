import { caesarCipher } from "./caesarCipher";

test("caesar cipher", () => {
  const result = caesarCipher("abcde", 1);
  expect(result).toBe("bcdef");
});

test("caesar cipher", () => {
  const result = caesarCipher("abcde", 2);
  expect(result).toBe("cdefg");
});

test("caesar cipher", () => {
  const result = caesarCipher("abc de", 2);
  expect(result).toBe("cde fg");
});

test("caesar cipher", () => {
  const result = caesarCipher("abc de.", 2);
  expect(result).toBe("cde fg.");
});

test("caesar cipher", () => {
  const result = caesarCipher(4, 2);
  expect(result).toBe();
});

test("caesar cipher", () => {
  const result = caesarCipher(2);
  expect(result).toBe();
});
