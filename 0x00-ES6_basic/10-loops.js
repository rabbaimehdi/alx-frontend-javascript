export default function appendToEachArrayValue(array, appendString) {
  const newArray = array;
  for (const element of array) {
    const idx = newArray.indexOf(element);
    newArray[idx] = appendString + element;
  }

  return newArray;
}
