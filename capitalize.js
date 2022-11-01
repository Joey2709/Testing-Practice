const capitalize = (str) => {
  if (str == null) {
    return;
  }
  let clearString = str.trim();
  return (
    clearString.slice(0, 1).toUpperCase() + clearString.slice(1).toLowerCase()
  );
};

export { capitalize };
