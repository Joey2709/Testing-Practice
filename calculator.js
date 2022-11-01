const calculator = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    return;
  }
  return `add: ${a + b}, subtract: ${a - b}, divide: ${a / b}, multiply: ${
    a * b
  }`;
};
export { calculator };
