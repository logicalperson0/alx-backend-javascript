export default function hasValuesFromArray(sets, arr) {
  const chk = arr.every((val) => sets.has(val));

  return chk;
}
