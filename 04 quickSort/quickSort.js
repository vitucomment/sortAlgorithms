function quickSort(array, key, left = 0, right = array.length - 1) {
    const sortedArray = [...array]
    if (array.length > 1) {
        let currentIndex = getPartition(array, key, left, right);
        if (left < currentIndex - 1) {
            quickSort(array, key, left, currentIndex - 1)
        }
        if (currentIndex < right) {
            quickSort(array, key, currentIndex, right)
        }
    }
    return array
}

function getPartition(array, key, left, right) {
    let pivot = array[Math.floor((left + right) / 2)]
    let currentSmallest = left
    let currentBiggest = right
    while (currentSmallest <= currentBiggest) {
        while (array[currentSmallest][key] < pivot[key]) {
            currentSmallest++
        }
        while (array[currentBiggest][key] > pivot[key]) {
            currentBiggest--
        }
        if (currentSmallest <= currentBiggest) {
            changeIndex(array, currentSmallest, currentBiggest);
            currentSmallest++;
            currentBiggest--;
        }
    }
    return currentSmallest
}

function changeIndex(array, from, to) {
    const itemOne = array[from]
    const itemTwo = array[to]
    array[to] = itemOne
    array[from] = itemTwo
}



// myArray = array you want to sort
// sortParameter = array parameter that will be used for sorting
console.log(quickSort(myArray, 'sortParameter'));

