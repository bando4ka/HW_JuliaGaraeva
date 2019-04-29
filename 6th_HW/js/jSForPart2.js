// art 2. DOM. Разметка для задач.
/*
1. Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый
элемент родителем для второго:
isParent(parent, child);
isParent(document.body.children[0], document.querySelector('mark'));
// true так как первый див является родительским элементом для mark
isParent(document.querySelector('ul'), document.querySelector('mark'));
// false так ul НЕ является родительским элементом для mark*/
function isParent(parent, child) {
    //parent.contains(child) ? true : false
    if (parent.contains(child)) {
        return true;
    } else {
        return false;
    }
}
console.log(isParent(document.body.children[0], document.querySelector('mark')));
console.log(isParent(document.querySelector('ul'), document.querySelector('mark')));
/*
2. Получить список всех ссылок, которые не находятся внутри списка ul
3. Найти элемент, который находится перед и после списка ul
4. Посчитать количество элементов li в списке
5. В коде с занятия написать функцию по редактированию задачи.
6. Подумать и улучшить функцию generateId();
 */