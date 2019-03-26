//Строки. Задачи.

let string = 'some test string';

//1 Получить первую и последнюю буквы строки
console.log(`${string.substr(0,1)}, ${string.slice(-1)}`);

//2 Сделать первую и последнюю буквы в верхнем регистре
console.log(`${string.substr(0,1)}, ${string.slice(-1)}`.toUpperCase());
//or
console.log(string[0].toUpperCase() + ", " + string [15].toUpperCase());

//3 Найти положение слова ‘string’ в строке
console.log(string.indexOf('string'));

//4 Найти положение второго пробела (“вручную” ничего не считать)
console.log(string.indexOf(' ', 1 + string.indexOf(' ')));

//5 Получить строку с 5-го символа длиной 4 буквы
console.log(string.substr(4,4));

//6 Получить строку с 5-го по 9-й символы
console.log(string.substring(4,9));

//7 Получить новую строку из исходной путем удаления последних 6-и символов (то есть исходная строка без последних 6и символов)
console.log(string.substr(0, string.length -6));
//or
console.log(string.slice(0,-6));

//8 Из двух переменных a=20 и b=16 получить переменную string, в которой будет
//содержаться текст “2016
var a = 20;
var b = 16;
var aa = a+""
var c = aa + b;
console.log(c);

//or

console.log(""+a+b);

//or

var a = 20;
var b = 16;
var aa = a.toString();
var c = aa+b;
console.log(c);

//Числа. Задачи.

//1 Получить число pi из Math и округлить его до 2-х знаков после точки
var somePI = Math.PI.toFixed(2);
console.log(somePI);

//2 Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12,
51, 12, 13, 51
var max = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
var min = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
// console.log(max);
// console.log(min);
console.log(`Максимальное значение из представленного ряда цифр - это число ${max}`);
console.log(`Минимальное значение из представленного ряда цифр - это число ${min}`);

//3 Работа с Math.random:
//a. Получить случайное число и округлить его до двух цифр после запятой
var someNumber = Math.random().toFixed(2);
console.log(someNumber);

//b. Получить случайное целое число от 0 до X. X - любое произвольное число

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomNumber(0, 1000000));
//or
function randomInteger(min, max) {
    var randInt = min - 0.5 + Math.random() * (max - min + 1)
    randInt = Math.round(randInt);
    return randInt;
  }
console.log(randomInteger(0, 100000));

//4. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?
var some1 = 0.6;
var some2 = 0.7;
var sum = Number((some1 + some2).toFixed(1));
console.log(sum); 

//5. Получить число из строки ‘100$’
var a = '100$';
var result = parseInt(a);
console.log(result);