export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);

  const z = new Int8Array(buffer);

  if (position > z.length) {
    throw new Error('Position outside range');
  }
  z[position] = value;

  return new DataView(buffer);
}
