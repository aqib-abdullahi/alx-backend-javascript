export default function appendToEachArrayValue(array, appendString) {
  const retArray = [];
  for (let value of array) {
    value = appendString + value;
    retArray.push(value);
  }

  return retArray;
}
