console.log('=========== Slide 15 ===========');
/*
6. Реализовать примитивный дропдаун. Изначально все dropdown-menu скрыты через класс .d-none.
При клике на dropdown-item должен отображаться блок dropdown-menu который вложен именно в
тот dropdown-item на котором произошел клик. При повторном клике на этот же dropdown-item блок
dropdown-menu должен закрыться. При клике на любой другой dropdown-item уже открытый
dropdown-menu должен закрываться а на тот который кликнули открываться.
 */
console.log('---------- 6/1 ----------');

// let dropDownMenu = document.querySelectorAll('.dropdown-menu');
//
// document.body.addEventListener('click', ({target}) => {
//     if(event.target.innerText === 'Dropdown menu item'){
//         let drownDownItem = this.querySelector('.dropdown-item');
//         //let thisDropDownMenu1 = this.querySelector('.dropdown-menu');
//         //thisDropDownMenu1.classList.toggle('d-none');
//     }
//     if(event.target.innerText === 'Dropdown menu item 2'){
//         let drownDownItem2 = this.querySelector('.dropdown-item');
//
//     }
//     let thisDropDownMenu = this.querySelector('.dropdown-menu');
//     thisDropDownMenu.classList.toggle('d-none');
//     //let controlIfMenuClosed = thisDropDownMenu.classList.contains("d-none");
// });

console.log('---------- 6/2 ----------');
let dropDownItems = document.querySelectorAll('.dropdown-item');
Array.from(dropDownItems, el =>
    el.addEventListener('click', openCloseList));

function openCloseList() {
    const thisDropDownMenu = this.querySelector('.dropdown-menu');
    const controlIfMenuClosed = thisDropDownMenu.classList.contains('d-none');

    const allOpenedMenu = document.querySelectorAll(
        '.dropdown-menu:not(.d-none)'
    );
    Array.from(allOpenedMenu, el =>
        el.classList.add('d-none')
    );

    if (controlIfMenuClosed) {
        thisDropDownMenu.classList.remove('d-none');
    }
}