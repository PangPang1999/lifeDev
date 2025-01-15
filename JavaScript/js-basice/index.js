function countOccurrences(array, searchElement) {
  if (!Array.isArray(array)) {
    throw new Error("Invalid array");
  }

  return array.reduce((accu, curr) => {
    return curr === searchElement ? accu + 1 : accu;
  }, 0);
}

try {
  const numbers = [1, 2, 3, 4];
  const count = countOccurrences(null, 1);
  console.log(count);
} catch (e) {
  console.log(e.message);
}
