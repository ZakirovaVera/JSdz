// Задание 1
// Дан объект numbers.Необходимо в консоль вывести все значения больше или равные 3.

console.log('Задача 1:');

const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7
}

for (const key in numbers) {
    if (numbers[key] >= 3) {
        console.log(numbers[key]);
    }
}

// Задание 2
// Необходимо из объекта, который лежит в константе post вывести значения, к которым приписан комментарий, в консоль.

console.log('Задача 2:');

const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2, // вывести это число
            },
        },
        {
            userId: 5, // вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", // вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1,
            },
        },
    ],
};

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);


// Задание 3
// Дан массив products, необходимо цену каждого продукта уменьшить на 15 % используя метод forEach.

console.log('Задача 3:');

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

// console.log(products); //выводит в консоль уже изменненный массив

function nameAr(arr) {
    arr.forEach(element => {
        element.price -= element.price * 0.15;
    });
}
nameAr(products);
console.log(products);

// Задание 4
// 1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter.Исходные данные - массив products.

console.log('Задача 4_1:');

const productsTaskFour = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg",
        ],
    },
    {
        id: 8,
        price: 78,
    },
];

function lengthArr(arr) {
    if (arr.length >= 1) {
        return true
    }
    return false
}

const productsWithPhoto = productsTaskFour.filter((product) => {
    if (product.photos) {
        if (lengthArr(product.photos)) {
            return true
        }
    }
    return false

});
console.log(productsWithPhoto);

// 2. Необходимо отсортировать массив products используя метод sort по цене, начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.

console.log('Задача 4_2:');

productsTaskFour.sort((a, b) => a.price - b.price);
console.log(productsTaskFour);

// **Задание 5**
// Дано 2 массива

console.log('Задача 5, вариант 1:');

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

if (en.length !== ru.length) {
    console.log("Длины массивов не совпадают");
} else {
    const result = {};
    for (let i = 0; i < en.length; i++) {
        result[en[i]] = ru[i];
    }
    console.log(result);
}

console.log('Задача 5, вариант 2:');

function createObject(keys, values) {
    let result = {};
    let length = Math.min(keys.length, values.length);
    for (let i = 0; i < length; i++) {
        result[keys[i]] = values[i];
    }
    return result;
}

let result2 = createObject(en, ru);
console.log(result2);

// Вам необходимо объединить 2 этих массива, чтобы значения первого массива были ключами, а значения второго массива — значениями.
