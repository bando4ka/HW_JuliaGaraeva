//Part 1.
console.log('---------- Part 1, Slide 6 ----------');

//1. Найти параграф и получить его текстовое содержимое (только текст!)
console.log('---------- 1 ----------');

let elParagraph = document.querySelector('p');
let findParagraph = elParagraph.textContent;

console.log(findParagraph);

/*2. Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию
(в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0).*/
console.log('---------- 2 ----------');

function domInf(element) {

    let typeOfNode = element.nodeType;
// if(typeOfNode === 1) typeOfNode = "element";
// else if(typeOfNode === 3) typeOfNode = "text node";
// else if (typeOfNode === 8) typeOfNode = "comment node";
    let nameOfNode = element.nodeName;
    let numberOfChildren = element.children.length;

    let propertiesOfNode = {};

    return propertiesOfNode =

    {
        nodeType : typeOfNode,
        nodeName : nameOfNode,
        childrenNumber : numberOfChildren
    }
}
console.log(domInf(document.querySelector('ul')));

/*3. Получить массив, который состоит из текстового содержимого ссылок внутри списка:
getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"]*/
console.log('---------- 3/1 ----------');
const listOfLi = document.querySelectorAll('ul li');
let arr = [];
function getTextFromUl(li){

    for(let el of li){
        arr.push(el.textContent);
    }
    return arr;
}
console.log(getTextFromUl(document.querySelectorAll('ul li')));


console.log('---------- 3/2 ----------');
//const listOfLi = document.querySelectorAll('ul li');
const getTextFromUl2 = Array.from(listOfLi, el => el.textContent);
console.log(getTextFromUl2);


console.log('---------- 3/3 not resolved ----------');
//Прошу объснить, почему не работает
// debugger;
let getTextFromUl3 = Array.prototype.forEach.call(listOfLi, element => element.textContent);
console.log(getTextFromUl3);

/*4. В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны
остаться). Конечный результат:
-text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text-
*/
console.log('---------- 4 ----------');

let parChildren = elParagraph.children;
let arr1 = [];
for(let child of parChildren){
    arr1.push('-text-' + child.outerHTML)
}
let changedChildrenArr = arr1.join('');
console.log(changedChildrenArr);
