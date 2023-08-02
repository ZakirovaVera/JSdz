// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки

const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

function createCounter(value) {
    let count = value;
    return {
        increment() { count += 1 },
        decrement() { count -= 1 },
        getValue() { return count },
    }
}
const counter = createCounter(15);
counter.increment(); //16
counter.decrement(); //15
counter.decrement(); //14
counter.decrement(); //13
console.log(counter.getValue()); //13

// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement)

function findElementByClass(rootElement, className) {
    if (rootElement.className === className) {
        return rootElement;
    }

    for (const element of rootElement.children) {
        let findElement = findElementByClass(element, className);
        if (findElement !== null) {
            return findElement;
        }
    }

    return null;
}

const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);
