//=======================================================================

// Создаем и Работаем с HEADER

export const header = document.createElement('header');

// Создаем контейнер для HEADER 
const headerMenu = document.createElement('div');
headerMenu.classList = 'header-menu';
// console.log(headerMenu); // <div class="header-menu"></div>

// Создаем 3 элемента DIV для наполнения контентом
for (let i = 0; i < 3; i++) {
    const div = document.createElement('div');
    headerMenu.append(div);
}

// Находим дочерние элементы headerMenu
const divChildren = headerMenu.children;
// console.log(divChildren);
// output
// HTMLCollection(3) [div, div, div]
// 0: div
// 1: div
// 2: div
// length: 3
// [[Prototype]]: HTMLCollection

// добавляем class для DIV 
divChildren[0].classList.add('logo');
divChildren[1].classList.add('list');
divChildren[2].classList.add('buttons');
// console.log(divChildren);
// output
// HTMLCollection(3) [div.logo, div.list, div.buttons]
// 0: div.logo
// 1: div.list
// 2: div.buttons
// length: 3[[Prototype]]: HTMLCollection


// Через шаблоны вставляем основной контент в HEADER DIV
// 0: div.header-menu__logo
const headerLogoTPL = `
    <div class="top-part">
        <div class="logo-1"></div>
        <div class="logo-2"></div>
    </div>

    <div class="bottom-part logo-3"></div>
`;
divChildren[0].insertAdjacentHTML('beforeend', headerLogoTPL);

// 1: div.list
const headerMenuTPL = `
    <a class="selected" href="!#">Home</a>
    <a href="!#">Project</a>
    <a href="!#">About</a>
    <a href="!#">Blog</a>
    <a href="!#">Contact</a>
`;
divChildren[1].insertAdjacentHTML('beforeend', headerMenuTPL);

// 2: div.buttons
const headerBtnTPL = `
    <a href="!#" class="button-1">
        <span>Sign in</span>
    </a>
    <a href="!#" class="button-2">
        <span>Sign up</span>
    </a>
`;
divChildren[2].insertAdjacentHTML('beforeend', headerBtnTPL);

// HEADER is ready, Добавляем HEADER в wrapperMain
header.append(headerMenu);