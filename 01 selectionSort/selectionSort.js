
function selectionSort(arrayObject, key) {
  const sortedArray = [...arrayObject];
  sortedArray.forEach((object, index, sortedArray) => {
    const indexLower = getLowerValue(sortedArray, index, key);
    const lowerValueItem = sortedArray[indexLower];
    sortedArray[index] = lowerValueItem;
    sortedArray[indexLower] = object;
  })
  return sortedArray;
}

function getLowerValue(arrayObject, startPosition, key) {
  let lower = startPosition;
  for (let index = startPosition; index < arrayObject.length; index++) {
    if (arrayObject[index][key] < arrayObject[lower][key]) {
      lower = index;
    }
  }
  return lower;
}


// myArray = array you want to sort
// sortParameter = array parameter that will be used for sorting
console.log(selectionSort(myArray, 'sortParameter'));

