/* Part 1. DOM. Задачи.
Зная структуру html, с помощью изученных
методов получить (в консоль):*/

//1. head
let headDocument = document.head;
console.log(headDocument);

//2. body
let bodyDocument = document.body;
console.log(bodyDocument);

//3. все дочерние элементы body и вывести их в консоль.
let bodyChildren = document.body.children;
console.log(bodyChildren);

//4. первый div и все его дочерние узлы
let firstDivWithChildren = document.querySelector('div');
let allDivChildren = firstDivWithChildren.children;
console.log(firstDivWithChildren);
console.log(allDivChildren);

//а) вывести все дочерние узлы в консоль
let allDivWithChildren = document.querySelectorAll('div');
console.log(allDivWithChildren);
//б) вывести в консоль все дочерние узлы, кроме первого и последнего

//Для навигации по DOM использовать методы, которые возвращают только элементы

// art 2. DOM. Разметка для задач.