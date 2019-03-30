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