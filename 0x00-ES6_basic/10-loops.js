export default function appendToEachArrayValue(array, appendString) {
  const newarr = [];
  for (const idx of array) {
    // const newarr = [];
    // const value = newarr[idx];
    newarr.push(`${appendString}${idx}`);
  }

  return newarr;
}
