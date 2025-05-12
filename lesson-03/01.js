// Напишите функцию calculateAverage, которая принимает 2 числа и возвращает их среднее арифметическое

function calculateAverage() {
    let a = +prompt("What is the first number?");
    let b = +prompt("What is the second number?");
    let c = (a + b)/2;
    return c;
}
console.log(calculateAverage());