document.addEventListener('DOMContentLoaded', function() {
    const arrayInput = document.getElementById('array'); // Changed from 'csvInput'
    const randomArray = Array.from({ length: 25000 }, () => Math.floor(Math.random() * 100) + 1);
    arrayInput.value = randomArray.join(',');

    document.getElementById('sortButton').addEventListener('click', function() { 
        const dataArray = arrayInput.value.split(',').map(Number);
        const startTime = performance.now();

        quickSort(dataArray, 0, dataArray.length - 1);

        const endTime = performance.now();
        const timeTaken = endTime - startTime;
        document.getElementById('timer').innerText = `Time: ${timeTaken.toFixed(10)}ms`;
        document.getElementById('output').value = dataArray.join(','); 
    });
});

// Quick Sort Algorithm
function quickSort(arr, left, right) {
    let len = arr.length,
    pivot,
    partitionIndex;

    if (left < right) {
        pivot = right;
        partitionIndex = partition(arr, pivot, left, right);

        //sort left and right
        quickSort(arr, left, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, right);
    }
    return arr;
}

function partition(arr, pivot, left, right){
    let pivotValue = arr[pivot],
    partitionIndex = left;

    for(let i = left; i < right; i++) {
        if(arr[i] < pivotValue){
            swap(arr, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(arr, right, partitionIndex);
    return partitionIndex;
}

function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
