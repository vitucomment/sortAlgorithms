function mergeSort(objectArray, key) {
  if (objectArray.length > 1) {
    const half = Math.floor(objectArray.length / 2);
    const halfOne = mergeSort(objectArray.slice(0, half), key);
    const halfTwo = mergeSort(objectArray.slice(half, objectArray.length), key);
    objectArray = orderingArrays(halfOne, halfTwo, key);
  }
  return objectArray;
}

function orderingArrays(halfOne, halfTwo, key) {
  let indexHalfOne = 0;
  let indexHalfTwo = 0;
  const orderedArray = []
  while (indexHalfOne < halfOne.length && indexHalfTwo < halfTwo.length) {
    let itemOfOne = halfOne[indexHalfOne];
    let itemOfTwo = halfTwo[indexHalfTwo];
    if (itemOfOne[key] < itemOfTwo[key]) {
      orderedArray.push(itemOfOne);
      indexHalfOne++
    }
    else {
      orderedArray.push(itemOfTwo);
      indexHalfTwo++
    }
  }
  return orderedArray.concat(indexHalfOne < halfOne.length
    ? halfOne.slice(indexHalfOne)
    : halfTwo.slice(indexHalfTwo))
}


// myArray = array you want to sort
// sortParameter = array parameter that will be used for sorting
console.log(mergeSort(myArray, 'sortParameter'));