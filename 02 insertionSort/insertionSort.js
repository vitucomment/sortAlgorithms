
function insertionSort(arrayObject, key) {
    const sortedArray = [...arrayObject]
    for (let index = 0; index < sortedArray.length; index++) {
        let analyzing = index;
        while (analyzing > 0 && sortedArray[analyzing][key] < sortedArray[analyzing - 1][key]) {
            let currentItem = sortedArray[analyzing];
            let lastItem = sortedArray[analyzing - 1]
            sortedArray[analyzing] = lastItem
            sortedArray[analyzing - 1] = currentItem
            analyzing--
        }
    }
    return sortedArray
}



// myArray = array you want to sort
// sortParameter = array parameter that will be used for sorting
console.log(insertionSort(myArray, 'sortParameter'))