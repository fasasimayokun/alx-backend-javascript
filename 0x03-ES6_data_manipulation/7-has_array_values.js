export default function hasValuesFromArray(set, array) {
  return array.every((ar) => set.has(ar));
}
