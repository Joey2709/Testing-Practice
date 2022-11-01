const analyzeArray = (arr) => {
  if (typeof arr !== "object") {
    return;
  }
  let average = arr.reduce((a, b) => a + b, 0);
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let length = arr.length;
  return {
    average,
    min,
    max,
    length,
  };
};

export { analyzeArray };
