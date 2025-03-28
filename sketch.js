document.addEventListener('DOMContentLoaded', function() {
    const csvInput = document.getElementById('csvInput');
    const randomArray = Array.from({ length: 25000 }, () => Math.floor(Math.random() * 100) + 1);
    csvInput.value = randomArray.join(',');

    document.getElementById('sortButton').addEventListener('click', function() {
        const dataArray = csvInput.value.split(',').map(Number);
        const startTime = performance.now();
        
        bubbleSort(dataArray);
        
        const endTime = performance.now();
        const timeTaken = endTime - startTime;
        document.getElementById('timer').innerText = `Time: ${timeTaken.toFixed(10)}ms`;
        document.getElementById('sortedOutput').value = dataArray.join(',');
    });
});