//Part 2
console.log('---------- Part 2, Slide 11 ----------');

//1. Найти в коде список ul и добавить класс “list”
console.log('---------- 1 ----------');

const listUl = document.querySelector('ul');
const listUlPlusClassList = listUl.classList.add('list');

//2. Найти в коде ссылку, находящуюся после списка ul, и добавить id=link
console.log('---------- 2 ----------');
//решение исходя из объяснения Алины в ходе урока, corrected
const linkA = document.querySelector('ul ~ a');
linkA.setAttribute('id', 'link');

console.log('---------- 2/1 ----------');
//Если имелась в виду первая ссылка после всего списка UL, changed after explaining homework
let lastLink = document.querySelector('ul').nextElementSibling;
while (lastLink) {
    if (lastLink.tagName === 'A') {
        lastLink.setAttribute('id', 'link1');
        break
    }
    lastLink = lastLink.nextElementSibling
}







//3.На li через один (начиная с самого первого) установить класс “item”
console.log('---------- 3/1 ----------');//34

let allLiItems = document.querySelectorAll('li');
let arrayOfLi = [];

for(let i = 0; i < allLiItems.length; i += 2) {
    const el = allLiItems[i].classList.add("item");
    arrayOfLi.push(el);
}
console.log(arrayOfLi);

console.log('---------- 3/2 ----------');

//let allLiItems = document.querySelectorAll('li');
Array.prototype.filter.call(allLiItems, (el, index) => index % 2 === 0? el.classList.add("item"): false);
console.log(allLiItems);

//4. На все ссылки в примере установить класс “custom-link”
console.log('---------- 4/1 ----------');
let allLinks = document.querySelectorAll('a');
let arrayAllLinks = [];

for(let i = 0; i < allLinks.length; i++) {
    const el = allLinks[i].classList.add("custom-link");
    arrayAllLinks.push(el);
}


console.log('---------- 4/2 ----------');

const toAddClassesToAllLinks= Array.from(allLinks, el => el.classList.add("custom-link"));
console.log(toAddClassesToAllLinks);

console.log('---------- 4/3 ----------');
let toAddClassesToAllLinks2 = Array.prototype.forEach.call(allLinks, (el) => el.classList.add("custom-link"));
console.log(toAddClassesToAllLinks2);