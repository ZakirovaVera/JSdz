// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

for (let i = 0; i <= 10; i++) {
    if (i === 0) {
        console.log(`${i} - это ноль`);
    }
    else if (i % 2 === 0) {
        console.log(`${i} - четное число`);
    } else {
        console.log(`${i} - нечетное число`);
    }
}

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const arrayTwo = [1, 2, 3, 4, 5, 6, 7];
console.log(`Массив до ${arrayTwo}`);
arrayTwo.splice(3, 2);
console.log(`Массив после ${arrayTwo}`);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

const arrayThree = [];
for (let i = 0; i <= 5; i++) {
    arrayThree[i] = getRandomArbitrary(0, 9 + 1)
}
console.log(arrayThree);
console.log(`Сумму элементов этого массива = ${summaNumberArray(arrayThree)}`);
console.log(`Минимальное число этого массива = ${minNumberArray(arrayThree)}`);
const searcNumber = 3;

// if (numberSearch(arrayThree, searcNumber)) {
//     console.log(`В этом массиве число ${searcNumber} - есть`);
// } else console.log(`В этом массиве число ${searcNumber} - нет`);

(numberSearch(arrayThree, searcNumber)) ? console.log(`В этом массиве число ${searcNumber} - есть`) : console.log(`В этом массиве число ${searcNumber} - нет`)

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function summaNumberArray(array) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result += array[i];
    }
    return result;
}

function minNumberArray(array) {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}
function numberSearch(array, num) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === num) {
            return true;
        }
    }
    return false;
}

// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx

const arrFour = [];
let count = '';
let row = 1;

for (let i = 0; i < 25; i++) {
    count += 'x';
    arrFour[i] = count;
    console.log(`${arrFour[i]} - ${row}`); 
    row++;
}
