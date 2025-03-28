
document.addEventListener('DOMContentLoaded', function() {
    const arrayInput = document.getElementById('array'); // Changed from 'csvInput'
    const randomArray = Array.from({ length: 25000 }, () => Math.floor(Math.random() * 100) + 1);
    arrayInput.value = randomArray.join(',');

    document.getElementById('sortButton').addEventListener('click', function() { // ID for button added in index.html
        const dataArray = arrayInput.value.split(',').map(Number);
        const startTime = performance.now();

        bubbleSort(dataArray);

        const endTime = performance.now();
        const timeTaken = endTime - startTime;
        document.getElementById('timer').innerText = `Time: ${timeTaken.toFixed(10)}ms`;
        document.getElementById('output').value = dataArray.join(','); // Changed from 'sortedOutput'
    });
});