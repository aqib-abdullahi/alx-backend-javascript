export default function hasValuesFromArray(set, array) {
  for (const content of array) {
    if (!set.has(content)) return false;
  }
  return true;
}
