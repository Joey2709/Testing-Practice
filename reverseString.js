const reverseString = (str) => {
  if (str == null) {
    return;
  }
  let auxString = "";
  let clearStr = str.trim();
  for (let i = clearStr.length - 1; i >= 0; i--) {
    auxString += clearStr[i];
  }
  return auxString;
};

export { reverseString };
