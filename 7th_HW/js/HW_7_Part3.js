console.log('---------- Part3 Slides 17-18 ----------');
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
//переделала, так номер item будет по-порядку при любом количестве добавленных лишек
let selectedUl  = document.querySelector('ul');
let fragment = document.createDocumentFragment();
let arrLi = ['li', 'li', 'li'];

arrLi.forEach(function(oneLi, index) {
    let li = document.createElement('li');
    li.classList.add('new-item');

    let liSel = document.querySelectorAll('ul li');
    let count = 0;
    if(li){

        for(let element of liSel);
        count += liSel.length;
    }
    li.textContent = `Item ${index+1 +count}`;
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
//решила с reverse, так запись короче и тоже работает
let arrOfLi = Array.prototype.slice.call(document.querySelectorAll('ul li'), 0);
arrOfLi
    .reverse()
    .forEach(el => selectedUl.append(el));

console.log('---------- 5/2 ----------');
//corrected after Alina's explaining
// let arrOfLi2 = Array.prototype.slice.call(document.querySelectorAll('ul li'), 0);
// arrOfLi2
//     .sort((prev, next) => prev.innerText > next.innerText ? -1 : 1)
//     .forEach(el => selectedUl.append(el));


