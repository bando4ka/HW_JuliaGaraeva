//Home work 3. Продолжение.
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
    if (value % 2 === 1){
      console.log(value);
    }
};

//6
/* 6. Дан объект:
let list = {
name: ‘denis’,
work: ‘easycode’,
age: 29
}
Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре.
Использовать for in. */

let list = {
name: 'denis',
work: 'easycode',
age: 29
}

for (var item in list) {
  if (typeof(list[item]) == 'string')
  list[item] = list[item].toUpperCase();
  console.log(`${item}: ${list[item]}`);
};