// Дан массив целых чисел произвольной длины.Написать функцию которая будет выводить 
// максимальную сумму неразрывной последовательности элементов в массиве.
// Суммировать элементы можно только последовательно.
// Пример: [-1, 10, -9, 5, 6, -10]
// Вывод: 11

function getMaxSubSum(arr) {
    let maxSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let sumFixedStart = 0;
        for (let j = i; j < arr.length; j++) {
            sumFixedStart += arr[j];
            maxSum = Math.max(maxSum, sumFixedStart);
        }
    }

    return maxSum;
}

alert(getMaxSubSum([-1, 2, 3, -9])); // 5
alert(getMaxSubSum([-1, 2, 3, -9, 11])); // 11