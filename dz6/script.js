// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

// const cubing = (num) => num ** 3;
// console.log(cubing(3) + cubing(3));

// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"


// const thirteenPercentTaxDeduction = (wage) => wage * 0.87;

// const numberFromUser = prompt('Введите число');

// if (Number(numberFromUser)) {
//     console.log(`Размер заработной платы за вычетом налогов равен ${thirteenPercentTaxDeduction(Number(numberFromUser))}`);
// } else {
//     console.log('Значение задано неверно');
// }


// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

// let number1 = Number(prompt("Введите первое число"));
// let number2 = Number(prompt("Введите второе число"));
// let number3 = Number(prompt("Введите третье число"));

// alert(`${maxNumber(number1, number2, number3)} максимальное значение`);

// function maxNumber(num1, num2, num3) {
//     let maxNum = num1;
//     if (num2 >= maxNum) {
//         maxNum = num2;
//     }
//     if (num3 >= maxNum) {
//         maxNum = num3;
//     }
//     return maxNum;
// }

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

const sumNumber = (num1, num2) => num1 + num2;
const differenceNumber = (num1, num2) => num1 - num2;
const multiplicationNumber = (num1, num2) => num1 * num2;
const divisionNumber = (num1, num2) => num1 / num2;

console.log(sumNumber(2, 2));
console.log(differenceNumber(2, 2));
console.log(multiplicationNumber(2, 2));
console.log(divisionNumber(2, 2));
