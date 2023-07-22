export function separateStr_1ByStr_2(str_1, str_2) {
  const splittedStr_1 = str_1.toLowerCase().split(str_2.toLowerCase());
  const start = splittedStr_1[0].length - 1;
  const end = start + str_2.length + 1;
  const str_2Original = str_1.substring(start, end); //str_1 in str_2 original
  return [...splittedStr_1, str_2Original];
}

export function sort(sortValue, list, order) {
  switch (sortValue) {
    case order.ASCENDING_ORDER:
      list.sort((a, b) => a.rating - b.rating);
      break;
    case order.DESCENDING_ORDER:
      list.sort((a, b) => b.rating - a.rating);
      break;

    default:
      break;
  }
}

export function isOnlySpaces(str) {
  const strippedStr = str.replace(/\s/g, ''); 
  return strippedStr.length === 0;
}

