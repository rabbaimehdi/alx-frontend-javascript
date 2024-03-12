export default function hasValuesFromArray(set_, arr) {
  for (const char of arr) {
    if (!set_.has(char)) {
      return false;
    }
  }
  return true;
}
