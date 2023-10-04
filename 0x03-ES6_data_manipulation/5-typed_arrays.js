export default function createInt8TypedArray(length, position, value) {
  if (position >= length) throw Error('Position outside range');
  const buffer = new ArrayBuffer(length);
  const IntView = new DataView(buffer, 0, length);
  const Arr = new Int8Array(buffer);
  Arr[0] = value;
  return IntView;
}
