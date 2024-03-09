export default function appendToEachArrayValue(array, appendString) {
  const newArray = array;
  for (const element of array) {
    const idx = array.indexOf(element);
    array[idx] = appendString + element;
  }

  return array;
}
