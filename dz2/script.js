// Задание 1
// Необходимо создать переменную в которой будет храниться температура в градусах Цельсия, преобразовать значение в температуру по фаренгейту.
// Формула перевода градусов Цельсия в градусы Фаренгейта: градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32
// Вывести в консоль температуру в Цельсиях и Фаренгейтах.

const temperatureInDegreesCelsius = 10;
const temperatureInDegreesFahrenheit = (9 / 5) * temperatureInDegreesCelsius + 32;
console.log(`Температура в Цельсиях = ${temperatureInDegreesCelsius}`);
console.log(`Температура в Фаренгейтах = ${temperatureInDegreesFahrenheit}`);

// Задание 2
// Необходимо создать переменную name, записать в эту переменную свое имя. Необходимо также создать переменную admin и присвоить этой переменной значение из переменной name. Вывести значение переменной admin в консоль.

const userName = "Vera";
const admin = userName;
console.log(`Admin = ${admin}`);