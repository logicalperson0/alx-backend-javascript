export default function cleanSet(set, startString) {
  const str = [];

  if (startString === '') {
    return '';
  }

  for (const val of set) {
    if (val.startsWith(startString)) {
      const stri = val.slice(startString.length);
      str.push(stri);
    }
  }
  return str.join('-');
}
