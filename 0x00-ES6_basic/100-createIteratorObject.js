export default function createIteratorObject(report) {
  const arr = [];

  const keys = Object.values(report.allEmployees);

  keys.forEach((key) => arr.push(...key));

  return arr;
}
