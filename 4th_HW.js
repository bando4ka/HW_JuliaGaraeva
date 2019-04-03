//1
/* Создать функцию multiply, которая будет принимать любое количество чисел и возвращать
их произведение: multiply(1,2,3) = 6 (1*2*3) */
function multiply() {
    var m = 1;
    if(arguments.length === 0) return 0;
    for(var i=0; i<arguments.length; i++)
        m *= arguments[i];
    return m;

}
console.log(multiply(3, 4, 5, 6));

//2
/* Создать функцию, которая принимает строку и возвращает строку-перевертыш:
reverseString(‘test’) // “tset”. */

let string = 'test';
let arr = string.split('');
let reverseString = "";
//console.log(r)
function reverse() {
    for (let i=arr.length-1; i>=0; i--)
        reverseString += arr[i];
    return reverseString;
}
console.log(reverse());

//3
/* Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку,
где каждый символ разделен пробелом и заменен на юникод-значение символа:
getCodeStringFromText(‘hello’) // “104 101 108 108 111”
подсказка: для получения кода используйте специальный метод */

function getCodeStringFromText(someString) {
    let newString = "";
    let splits = someString.split('');

    for( let i = 0; i<someString.length; i++)

        newString += splits[i].charCodeAt(i.length) + " ";
    return newString;
}
console.log(getCodeStringFromText('mama'));

//4
/*Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что
число не больше 10 и не меньше 0). Генерирует рандомное число от 1-10 и сравнивает с
переданным числом если они совпали то возвращает “Вы выиграли” если нет то “Вы не угадали
ваше число 8 а выпало число 5”. Числа в строке указаны как пример вы подставляете реальные
числа.*/

function lottery(myNumber) {

    if ((myNumber >= 0) && (myNumber <= 10)) {
        let lot = Math.floor(Math.random() * 11);

        if (myNumber === lot) {
            return 'Вы выиграли!';
        }
        else
        {
            return `Вы не угадали. Ваше число ${myNumber} а выпало число ${lot}`;
        }
    }
}

console.log(lottery(7));

//5
/* Создать функцию, которая принимает число n и возвращает массив, заполненный числами от 1 до
n: getArray(10); // [1,2,3,4,5,6,7,8,9,10] */

function getArray(par) {

    let newArray = [];
    for (let i = 1; i <= par; i++) {
        newArray.push(i);
    }
    return newArray;
}
console.log(getArray(10));

//6
/*Создать функцию, которая принимает массив, а возвращает новый массив с дублированными
элементами входного массива:
    doubleArray([1,2,3]) // [1,2,3,1,2,3]*/

function doubleArray(firstArray) {

    return firstArray.concat(firstArray);
}
console.log(doubleArray([3, 6, 9]));

//7//
/* Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого
массива первый элемент, а возвращает массив из оставшихся значений:
changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д. */

// function changeCollection(aFewArrays) {
//     let newArrayFromFewArrays = [];
//     //for(let i = 0; i<aFewArrays.length; i++)

// //console.log(changeCollection([3, 6, 9], ['a', 'b', 'c']));


//8
/* Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и
значение на которое хочу проверять. Проверять что все аргументы переданы. Возвращать новый
массив с пользователями соответсвующие указанным параметрам.
funcGetUsers(users, “gender”, “male”); // [ {name: “Denis”, age: “29”, gender: “male”} , {name: “Ivan”, age: “20”, gender: “male”} ] */

//function funcGetUsers(users, 'gender', 'male') {
//     let users = [];
//
// for (var item in users) {
//     return `${item}: ${users[item]}`;
//        }
// }

    //console.log(funcGetUsers([{name: 'Denis', age: '29', gender: 'male'} , {name: 'Ivan', age: '20', gender: 'male'}]));