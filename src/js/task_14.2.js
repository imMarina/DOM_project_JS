// Задача 14.2
// С помощью `innerHTML` создать и добавить на страницу браузера DOM-структуру, 
// состоящую из элементов: `header`, `nav`, `seaction`, `article`,  `aside`, и `footer`. 
// Каждый элемент должен содержать дочерние элементы согласно их семантике (см. https://msiter.ru/tutorials/html5/semantic_elements). 
// Например, `nav` должен содержать набор/список навигационных ссылок (тег `<a>`).


// Создание основного контейнера страницы <div class="page"></div>
// const page = document.createElement('div');
// page.classList.add('page');

// Поиск основного контейнера страницы
const page = document.querySelector('.page');
console.log(page); // <div class="page"></div>


// Создание контейнера MAIN, куда входят HEADER и MAIN(sections) 
// <div class="wrapper-main">
const wrapperMain = document.createElement('div');
wrapperMain.classList = 'wrapper-main';
console.log(wrapperMain); // <div class="wrapper-main"></div>

// Создаем и добавляем HEADER и MAIN
const header = document.createElement('header');
const main = document.createElement('main');

wrapperMain.append(header);
wrapperMain.append(main);

// Работаем с HEADER
// Создаем контейнер для HEADER 
const headerMenu = document.createElement('div');
header.append(headerMenu);
headerMenu.classList = 'header-menu';
console.log(headerMenu); // <div class="header-menu"></div>


// Создаем 3 элемента DIV для наполнения контентом
for (let i = 0; i < 3; i++) {
    const div = document.createElement('div');
    headerMenu.append(div);
    div.classList.add('header-menu__div'); 
}

// const divElems = document.querySelectorAll('.header-menu.header-menu__div');
// console.log(divElems);
// 4. Поиск по тегу первого уровня вложенности
// const elemsFour = document.querySelectorAll('.classParent>tegChild');
// console.log(elemsFour);


const divChildren = headerMenu.children;
console.log(divChildren);
// output
// HTMLCollection(3) [div.header-menu__div, div.header-menu__div, div.header-menu__div]
// 0: div.header-menu__div
// 1: div.header-menu__div
// 2: div.header-menu__div
// length: 3
// [[Prototype]]: HTMLCollection

divChildren[0].classList = 'header-menu__logo';
divChildren[1].classList = 'header-menu__list';
divChildren[2].classList = 'header-menu__buttons';
console.log(divChildren);
// output
// HTMLCollection(3) [div.header-menu__logo, div.header-menu__list, div.header-menu__buttons]
// 0: div.header-menu__logo
// 1: div.header-menu__list
// 2: div.header-menu__buttons
// length: 3[[Prototype]]: HTMLCollection
