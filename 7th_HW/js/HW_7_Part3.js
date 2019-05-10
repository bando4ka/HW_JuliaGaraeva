console.log('---------- Part3, Slides 17-18 ----------');
/*
1. Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ +
номер li:
<ul>
<li><a href="#">Link1</a></li>
...
<li class=”new-item”>item 5</li>
<li class=”new-item”>item 6</li>
</ul>
Вручную номер li не ставить оно должно подставляться в зависимости от кол-ва лишек в списке.
Код для задач брать со слайда 5.
 */
console.log('---------- 1 ----------');

let selectedUl  = document.querySelector('ul');
let fragment = document.createDocumentFragment();
let arrLi = ['li', 'li', 'li'];

arrLi.forEach(function(oneLi, index) {
    let li = document.createElement('li');
    li.textContent = `item${index+5}`;
    li.classList.add('new-item');

    fragment.appendChild(li);
});

selectedUl.appendChild(fragment);

/*2. В каждую ссылку, которая находятся внутри списка ul добавить по тегу strong (в каждую ссылку
один - strong).*/
console.log('---------- 2 ----------');


let selectedA = document.querySelectorAll('ul li a');

for( let el of selectedA){
    let strong = document.createElement('strong');
    el.appendChild(strong);
}

/*3. В начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте
сами). В src добавьте реальный url к картинке. Для создания элемента используйте метод
createElement.*/
console.log('---------- 3 ----------');

let img = document.createElement('img');
img.src = 'https://bestofjs.org/logos/js.svg';
img.alt = 'JS';
document.body.insertBefore(img, document.body.firstChild);

/*4. Найти на странице элемент mark, добавить в конец содержимого текст “green” и на элемент
установить класс green*/
console.log('---------- 4 ----------');

let elMark = document.querySelector('mark');
elMark.classList.add('green');
elMark.insertAdjacentHTML('beforeend', 'green');


//5. Отсортировать li внутри списка в обратном порядке (по тексту внутри)

console.log('---------- 5/1 ----------');
debugger;
let selectedLi2 = document.querySelectorAll('li');

const sortedLiAccordingToText = Array.from(selectedLi2, el => el.textContent).sort();
console.log(sortedLiAccordingToText);

console.log('---------- 5/2 ----------');

let arrForSorting = [];

for (let el of selectedLi2){
    arrForSorting.push(el.textContent);

}
let sortedArray = arrForSorting.sort(function(a, b) {
    return a - b;
});
console.log(sortedArray);



