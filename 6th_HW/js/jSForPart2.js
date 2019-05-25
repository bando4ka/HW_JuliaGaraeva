// art 2. DOM. Разметка для задач.
/*
1. Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый
элемент родителем для второго:
isParent(parent, child);
isParent(document.body.children[0], document.querySelector('mark'));
// true так как первый див является родительским элементом для mark
isParent(document.querySelector('ul'), document.querySelector('mark'));
// false так ul НЕ является родительским элементом для mark*/
console.log('---------- 1----------');
function isParent(parent, child) {

    return parent.contains(child);
    //parent.contains(child) ? true : false

    //Version 2
    // if (parent.contains(child)) {
    //     return true;
    // } else {
    //     return false;
    // }
}
console.log(isParent(document.body.children[0], document.querySelector('mark')));
console.log(isParent(document.querySelector('ul'), document.querySelector('mark')));

//2. Получить список всех ссылок, которые не находятся внутри списка ul
console.log('---------- 2----------');
let allLinks = document.links;
let arrOfLinks = [];
for(let link of allLinks) {
    if(!link.closest('ul')) {
        arrOfLinks.push(link);
        //console.log(link);
    }
}
console.log(arrOfLinks);
//3. Найти элемент, который находится перед и после списка ul
console.log('---------- 3----------');
let element = document.querySelector('ul');
let prevElement = element.previousElementSibling;
let nextElement = element.nextElementSibling;
console.log(prevElement);
console.log(nextElement);



//4. Посчитать количество элементов li в списке
console.log('---------- 4 ----------');
let selectedLiElements = document.querySelectorAll('ul li');
let numberOfLi = selectedLiElements.length;
console.log(numberOfLi);

/*
5. В коде с занятия написать функцию по редактированию задачи.
6. Подумать и улучшить функцию generateId();
 */