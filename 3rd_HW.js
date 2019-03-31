//Part 1. Тернарный оператор. Switch case. Задачи.
//1 
/* Записать в виде switch case следующее условие:
if (a === ‘block’) {
console.log(‘block’)
} else if (a === ‘none’) {
console.log(‘none’)
} else if (a === ‘inline’) {
console.log(‘inline’)
} else {
console.log(‘other’)
}
Записать условие, используя конструктор switch. В консоли должно отразиться только одно
значение. */

let a = 1;
switch (a){
    case 'block': console.log('block');
        break;
    case 'none': console.log('none');
        break;
    case 'inline': console.log('inline');
        break;
    default: console.log('other');
};

//2
/* Из задач по условному оператору if else выполнить задачи 1, 2 и 3 в виде тернарного
оператора. */
//2.1 Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”
var aa = 'hidden' ? 'visible' : 'hidden';
console.log(aa);

//2.2
/* Используя if, записать условие:
a. если переменная равна нулю, присвоить ей 1;
b. если меньше нуля - строку “less then zero”;
c. если больше нуля - используя оператор “присвоение”, переменную умножить на 10
(использовать краткую запись). */

let b = 0;

b === 0 ? console.log(b = 1) /*или b === 0 ? console.log(b =+ 1)*/
    : b < 0 ? console.log(b = 'less then zero')
    : console.log(b *= 10);

//2.3
/* Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.
Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need
Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false. */

let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }

car.age > 5 ? (car.needRepair = true) && (console.log('Need Repair'))
    : car.needRepair = false;
console.log(car);

//Part 2. Циклы. Задачи.
//1 
/* На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова
будут в верхнем регистре. Использовать for или while. */

let studyPlace = 'i am in the easycode';

  let arr = studyPlace.split(' ');
  let strTotal = "";

for (let i = 0; i<arr.length; i++){
    let word = arr[i];
    let firstLetter = word.substring(0, 1).toUpperCase();
    let restOfTheWord = word.substring(1, word.length);
    strTotal += firstLetter + restOfTheWord + " ";
}
console.log(strTotal);

//2
/* Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква
становится первой, предпоследняя - второй итд). */

let string = 'tseb eht ma i';
let letters = string.split('');
let newString = "";

for (let i = letters.length-1; i>=0; i--){
  newString += letters[i];
}
console.log (newString);

//3
/* Факториал числа - произведение всех натуральных чисел от 1 до n
включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10.
Использовать for. */

let num1 = 1;
let num2 = 10;

for(let i = num1; i<=num2; i++){
	num1 *= i;
}
console.log(num1);

//4
/* На основе строки “JavaScript is a pretty good language” сделать новую строку,
где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for */
let stringJS = 'JavaScript is a pretty good language';

let arr2 = stringJS.split(' ');

let newString = "";

for (let i = 0; i<arr2.length; i++){
  let wordArr = arr2[i];
    let firstLet = wordArr.substring(0, 1).toUpperCase();
    let restOf = wordArr.substring(1, wordArr.length);
    newString += firstLet + restOf;
}
console.log(newString);

//5
/* Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of. */

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

//for (let i = 0; i < arr3.length; i++){
  for (let value of myArray) {
    if (value %2 === 1){
      console.log(value);
    }
};

