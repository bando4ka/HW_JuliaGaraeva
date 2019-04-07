//5th Home Work
//Part 1. Функции высшего порядка. Задачи.
/* 1. Создать две функции и дать им осмысленные названия:
- первая функция принимает массив и колбэк (одна для всех вызовов)
- вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой
callback)
Первая функция возвращает строку “New value: ” и результат обработки:
firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”
firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”
firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) →
“New value: Jhon is 45, Aaron is 20,”
firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются
Подсказка: secondFunc должна быть представлена функцией, которая принимает
один аргумент (каждый элемент массива) и возвращает результат его обработки */

let handler1 = ['my', 'name', 'is', 'Trinity'];
let handler2 = [10, 20, 30];
let handler3 = [{age: 45, name: 'John'}, {age: 20, name: 'Aaron'}];
let handler4 = ['abc', '123'];

function firstFunc() {
    //return `New value: ${result1}`;
    console.log(`New value: ${result2}`);
    console.log(`New value: ${result3}`);
    console.log(`New value: ${result4}`);
}

// let result1 = handler1.map(function(itm){
//
//         let splits = itm.split("");
//         let firstLetter = itm.substring(0, 1).toUpperCase();
//         let wordWithoutFirstLetter = itm.slice(1);
//         return bothParts = firstLetter.concat(wordWithoutFirstLetter);
// });
//     let arrBoth = result1.split(' ');
//     let newString = "";
// for (let i; i<arrBoth.length-1; i++){
//     newString += i;
// }
// //console.log(newString);

let result2 = handler2.map(function (item) {
    return item *10;
});

let result3 = handler3.map(function(currEl){
    return `${currEl.name} is ${currEl.age}`;
});

let result4 = handler4.map(function(curEl){

    let splits1 = curEl.split("");
    let firstArray = splits1.reverse();
    return firstArray.join('');
});
console.log(result1);
firstFunc();
// function secondFunc() {
//     for (let i = 0; i < handler1[i].length; i++) {
//         let word = handler1[i];
//         // let firstLetter = word.substring(0, 1).toUpperCase();
//         // let wordWithoutFirstLetter = word.slice(1);
//         // return sentence += firstLetter + wordWithoutFirstLetter;
//     }
// }


    // let newString = "";
    //
    // for (let i = 0; i<arr2.length; i++){
    //     let wordArr = arr2[i];
    //     let firstLet = wordArr.substring(0, 1).toUpperCase();
    //     let restOf = wordArr.substring(1, wordArr.length);
    //     newString += firstLet + restOf;
    // }
    // console.log(newString);



//2.
/* Написать аналог метода every. Создайте функцию every, она должна принимать первым
аргументом массив чисел (обязательно проверьте что передан массив) вторым аргументом
callback
функция должна возвращать true или false в зависимости от результата вызова callback (проверить
число больше 5). Callback должен принимать один элемент массива, его индекс в массиве и весь
массив. */




//Part 2. Перебирающие методы. Задачи.
//1
/*На основе массива [1,2,3,5,8,9,10] сформировать новый массив,
    каждый элемент которого будет хранить информацию о числе и его четности:
    [{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]*/


// let arrNumbers = [1,2,3,5,8,9,10];
// let someObj = {};
// // someObj.digit = 20;
// // someObj.odd = true;
// // console.log(someObj);
// let someObj. digit = arrNumbers.map(function(digit){
//     someObj.digit += currentValue;
// return someObj.digit;
// someObj.odd;
// let arrNumbersWithProperties = arrNumbers.map(function(currentValue){
//     someObj.digit += currentValue;
//     return someObj.digit;
//     currentValue %2 !== 0) ? someObj.odd = true : someObj.odd = false;
//     //return someObj.odd;
// })
// console.log(arrNumbersWithProperties);


//2
/* Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да -
вернуть false.*/

//let arr2 = [12, 4, 55, 1, 2, 18, 44];
let arrNumbers = [12, 4, 50, 1, 0, 18, 40];
    let checkNull = arrNumbers.every(function(currEl){
        return currEl > 0;
});
console.log('Are there elements that include 0?', checkNull);

//3.
/*Проверить, содержит ли массив ['yes', 'hello', 'no', 'easycode', 'what'] хотя бы одно слово длиной
больше 3х букв. Если да - вернуть true */

let arrWords = ['yes', 'hello', 'no', 'easycode', 'what'];
//let arr3 = ['yes', 'hel', 'no', 'ea', 'wha'];

let checkLength = arrWords.some(function(item){
    return item.length > 3;
});
console.log('Was checked according to the array length', checkLength);

//4.
/*Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения
в строке {буква: “a”, позиция_в_предложении: 1}:
[{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
{char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
{char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]
Напишите функцию, которая из элементов массива соберет и вернёт
строку, основываясь на index каждой буквы. Например:
[{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!”
Подсказка: вначале отсортируйте массив по index, затем используйте reduce() для построения
строки */

let arrUnsorted = [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2}, {char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0}, {char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}];

let arrOrdered = arrUnsorted.sort(function(a, b){
    if (a.index > b.index){
        return 1;
    }
    if (a.index < b.index){
        return -1;
    }
    return 0;
});

let arrOrderedAsString = arrUnsorted.reduce(function(accumulator, currentValue, index, array){
    return accumulator + currentValue.char;
}, "");

console.log('Sentence is', arrOrderedAsString);

//Part 3. Метод Sort. Задачи.
//1.

/*Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы
(размер массива определяется его длиной): [ [14, 45], [1], ['a', 'c', 'd'] ] → [ [1], [14, 45], ['a', 'c', 'd']
] */

let someData = [ [14, 45], [1], ['a', 'c', 'd'] ]

let someDataSorted = someData.sort(function(a, b){
    return a.length - b.length;
});

console.log('someDataSorted is', someDataSorted);
//2.
/* Есть массив объектов:
    [
        {cpu: 'intel', info: {cores:2, сache: 3}},
        {cpu: 'intel', info: {cores:4, сache: 4}},
        {cpu: 'amd', info: {cores:1, сache: 1}},
        {cpu: 'intel', info: {cores:3, сache: 2}},
        {cpu: 'amd', info: {cores:4, сache: 2}}
    ]
Отсортировать их по возрастающему количеству ядер (cores)*/

let personalComputerInf = [
    {cpu: 'intel', info: {cores:2, сache: 3}},
    {cpu: 'intel', info: {cores:4, сache: 4}},
    {cpu: 'amd', info: {cores:1, сache: 1}},
    {cpu: 'intel', info: {cores:3, сache: 2}},
    {cpu: 'amd', info: {cores:4, сache: 2}}
];

let sortedAccordingToCoreNumber = personalComputerInf.sort(function (a, b) {
    return a.info.cores - b.info.cores;
});
console.log('Was sorted according to QTY of cores',sortedAccordingToCoreNumber);

//3
/*Создать функцию, которая будет принимать массив продуктов и две цены. Функция должна
вернуть все продукты, цена которых находится в указанном диапазоне, и сортировать от дешевых к
дорогим:
let products = [
{title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
{title: 'prod3', price: 15}, {title: 'prod4', price: 25},
{title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
{title: 'prod7', price: 19}, {title: 'prod8', price: 63}
];
filterCollection(products, 15, 30) → [{...price: 15}, {...price: 18.9}, {...price: 19}, {...price: 25}]*/

let products = [
    {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
    {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
    {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
    {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
];

let productsFiltered = products.filter(function({price}){

    return price >= 15 && price <= 30;
});
console.log('The list of products, prices are between 15 and 30', productsFiltered);