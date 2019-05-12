//
/*
1.По нажатию на кнопку "btn-msg" должен появиться алерт с тем текстом который находится в
атрибуте data-text у кнопки.*/
console.log('---------- 1 ----------');

let btnMsg = document.getElementById('btn-msg');
let dataText = btnMsg.dataset.text;

btnMsg.addEventListener('click', (event) => {
    alert(dataText);
});

/* 2. При наведении указателя мыши на "btn-msg", кнопка становится красной; когда указатель мыши
покидает кнопку, она становится прежнего цвета. Цвет менять можно через добавление класса.*/
console.log('---------- 2 ----------');

btnMsg.addEventListener('mouseover', (event) => {
    btnMsg.classList.add('btn-color');
});
btnMsg.addEventListener('mouseout', (event) => {
    btnMsg.classList.remove('btn-color');
});

//3. При нажатии на любой узел документа показать в элементе с id=tag имя тега нажатого элемента.
console.log('---------- 3 ----------');

let elementWithIdTag = document.getElementById('tag');

document.body.addEventListener('click', ({target}) => {
    elementWithIdTag.textContent = 'Tag: '+ event.target.tagName;
});

/*4. При нажатии на кнопку btn-generate добавлять в список ul элемент списка Li с текстом Item +
порядковый номер Li по списку, т.е Item 3, Item 4 и т.д*/
console.log('---------- 4 ----------');

let btnGenerate = document.getElementById('btn-generate');
let ulSelected = document.querySelector('ul');
btnGenerate.addEventListener('click', (event) => {
    let fragment = document.createDocumentFragment();
    let arrayLi = ['li'];

    arrayLi.forEach(function(oneLi, index) {

        let li = document.createElement('li');

        let allLiSelected = document.querySelectorAll('ul li');

        let count = 0;

        if(li){

            for(let element of allLiSelected);
            count += allLiSelected.length;
            //console.log(count);
        }

        li.textContent = `Item ${index+1 +count}`;
        fragment.appendChild(li);
    });

    ulSelected.appendChild(fragment);
});

//5. Из проекта todo реализовать редактирование задачи.
console.log('---------- 5 ----------');
//ToDo отправлю позднее