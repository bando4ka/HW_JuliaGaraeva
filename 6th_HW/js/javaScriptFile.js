/* Part 1. DOM. Задачи.
Зная структуру html, с помощью изученных
методов получить (в консоль):*/

//1. head
console.log('---------- 1----------');
let headDocument = document.head;
console.log(headDocument);

//2. body
console.log('---------- 2 ----------');
let bodyDocument = document.body;
console.log(bodyDocument);

//3. все дочерние элементы body и вывести их в консоль.
console.log('---------- 3 ----------');
//let bodyChildren = document.body.children;
let bodyChildren = bodyDocument.children;
console.log(bodyChildren);

//4. первый div и все его дочерние узлы
console.log('---------- 4 ----------');
let firstDivWithChildren = document.querySelector('div');
let allDivChildren = firstDivWithChildren.children;
console.log(firstDivWithChildren);
console.log(allDivChildren);

//а) вывести все дочерние узлы в консоль
console.log('---------- 4a ----------');
let allDivWithChildren = firstDivWithChildren.children;
console.log(allDivWithChildren);

//б) вывести в консоль все дочерние узлы, кроме первого и последнего
console.log('---------- 4b ----------');
for(let i = 1; i<allDivWithChildren.length-1; i++){
    console.log(allDivWithChildren[i])
}
//Для навигации по DOM использовать методы, которые возвращают только элементы

