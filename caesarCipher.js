const caesarCipher = (str, b) => {
  if (typeof str !== "string" || typeof b !== "number") {
    return;
  }
  let clearStr = str.trim();
  let resultStr = [];
  for (let i = 0; i < clearStr.length; i++) {
    if (clearStr.charCodeAt(i) === 32 || clearStr.charCodeAt(i) === 46) {
      resultStr.push(clearStr.charCodeAt(i));
    } else {
      resultStr.push(clearStr.charCodeAt(i) + b);
    }
  }
  return resultStr
    .map((e) =>
      e > 122 ? String.fromCharCode(e - 26) : String.fromCharCode(e)
    )
    .join("");
};

export { caesarCipher };
