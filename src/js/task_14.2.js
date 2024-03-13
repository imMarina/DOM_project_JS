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
// console.log(page); // <div class="page"></div>


// Создание контейнера MAIN, куда входят HEADER и MAIN(sections) 
const wrapperMain = document.createElement('div');
wrapperMain.classList = 'wrapper-main';
// console.log(wrapperMain); // <div class="wrapper-main"></div>



//=======================================================================

// Создаем и Работаем с HEADER
const header = document.createElement('header');

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
divChildren[0].classList.add('header-menu__logo');
divChildren[1].classList.add('header-menu__list');
divChildren[2].classList.add('header-menu__buttons');
// console.log(divChildren);
// output
// HTMLCollection(3) [div.header-menu__logo, div.header-menu__list, div.header-menu__buttons]
// 0: div.header-menu__logo
// 1: div.header-menu__list
// 2: div.header-menu__buttons
// length: 3[[Prototype]]: HTMLCollection


// Через шаблоны вставляем основной контент в HEADER DIV
// 0: div.header-menu__logo
const headerLogoTPL = `
    <div class="logo-top">
        <div class="logo-1"></div>
        <div class="logo-2"></div>
    </div>

    <div class="logo-bottom logo-3"></div>
`;
divChildren[0].insertAdjacentHTML('beforeend', headerLogoTPL);

// 1: div.header-menu__list
const headerMenuTPL = `
    <a class="selected" href="!#">Home</a>
    <a href="!#">Project</a>
    <a href="!#">About</a>
    <a href="!#">Blog</a>
    <a href="!#">Contact</a>
`;
divChildren[1].insertAdjacentHTML('beforeend', headerMenuTPL);

// 2: div.header-menu__buttons
const headerBtnTPL = `
    <button class="button-1">Sign in</button>
    <button class="button-2">Sign up</button>
`;
divChildren[2].insertAdjacentHTML('beforeend', headerBtnTPL);

// HEADER is ready, Добавляем HEADER в wrapperMain
header.append(headerMenu);
wrapperMain.append(header);



//=======================================================================

// Создаем и Работаем с MAIN
const main = document.createElement('main');

// Создаем контейнер для MAIN
const mainContainer = document.createElement('div');
mainContainer.classList.add('main-container'); // <div class="main-container"></div>

// Создаем 2 элемента DIV для наполнения контентом
for (let i = 0; i < 2; i++) {
    const div = document.createElement('div');
    mainContainer.append(div);
}

// Добавляем class для DIV 
mainContainer.children[0].classList.add('main-container__top');
mainContainer.children[1].classList.add('main-container__bottom');


// <div class="main-container__top">
// Создаем NAV боковое меню
const navMenu = document.createElement('nav');
navMenu.classList.add('main__nav-menu');
// console.log(navMenu); // <nav class="main__nav-menu"></nav>

const navMenuTPL = `
    <ul class="main__nav-menu__list-items">
        <li>
            <a class="selected" href="#!">Home</a>
        </li>
        <li>
            <a href="#!">Project</a>
        </li>
        <li>
            <a href="#!">About</a>
        </li>
        <li>
            <a href="#!">Blog</a>
        </li>
        <li>
            <a href="#!">Contact</a>
        </li>
    </ul>
`;
navMenu.insertAdjacentHTML('beforeend', navMenuTPL);

// Добавляем боковое меню NAV в DOM в <div class="main-container__top">
mainContainer.children[0].append(navMenu);


// Создаем SECTION IMG
const sectionIMG = document.createElement('section');
sectionIMG.classList.add('sections-images'); // <section class="sections-images">

const sectionImgTPL = `
    <div class="container-section-img1">
        <div class="container-section-img2"></div>
    </div>    
`;
sectionIMG.insertAdjacentHTML('beforeend', sectionImgTPL);

// Добавляем SECTION IMG в DOM в <div class="main-container__top">
mainContainer.children[0].append(sectionIMG);


// Создаем SECTION TEXT
const sectionText = document.createElement('section');
sectionText.classList.add('main__sections-text'); // <section class="main__sections-text">

// Создаем 3 элемента DIV контейнера
for (let i = 0; i < 3; i++) {
    const div = document.createElement('div');
    sectionText.append(div);
}

// добавляем class для DIV 
sectionText.children[0].classList.add('container__section-text'); // <div class="container__section-text">
sectionText.children[1].classList.add('container__section-buttons'); // <div class="container__section-buttons">
sectionText.children[2].classList.add('container__section-statistics'); // <div class="container__section-statistics">
// console.log(sectionText);


// Наполняем контентом <div class="container__section-text">
const sectionTextTPL = `
    <h1>We’re a Creative Design Agency</h1>
    <p>We are delivering top level digital services best experlenced team, just get stared</p>  
`;
sectionText.children[0].insertAdjacentHTML('beforeend', sectionTextTPL);


// Наполняем контентом <div class="container__section-buttons">
const sectionBtnTPL = `
    <a href="!#" class="container__section-btn-1">
        <span>Get started</span>
        <span class="container__section-btn-1__img"></span>
    </a>

    <a href="!#" class="container__section-btn-2">
        <span class="container__section-btn-2__img"></span>
        <span>How it works</span>
    </a> 
`;
sectionText.children[1].insertAdjacentHTML('beforeend', sectionBtnTPL);


// Наполняем контентом <div class="container__section-statistics">
const sectionStatisticsTPL = `
    <div class="container__section-statistics__items">
        <span class="item-1__number">20+</span>
        <span class="item-1__text">Years of  Excellent</span>
    </div>
    <div class="container__section-statistics__items">
        <span class="item-2__number">90%</span>
        <span class="item-2__text">Happy  Client</span>
    </div>
    <div class="container__section-statistics__items">
        <span class="item-3__number">80%</span>
        <span class="item-3__text">Project  Succes</span>
    </div>
`;
sectionText.children[2].insertAdjacentHTML('beforeend', sectionStatisticsTPL);


// Добавляем весь контейнер SECTION TEXT в DOM в <div class="main-container__top">
mainContainer.children[0].append(sectionText);


// <div class="main-container__bottom">
// Создаем SECTION
const sectionClientsList = document.createElement('section');
sectionClientsList.classList.add('container-section__clients-list');
// console.log(sectionClientsList); // <section class="container-section__clients-list"></section>

const sectionClientsListTPL = `
    <a class="clients-list__item-1" href="!#"></a>

    <a class="clients-list__item-2" href="!#"></a>
    <a class="clients-list__item-3" href="!#"></a>
    <a class="clients-list__item-4" href="!#"></a>
    <a class="clients-list__item-5" href="!#"></a>
`;
sectionClientsList.insertAdjacentHTML('beforeend', sectionClientsListTPL);


// Добавляем SECTION в DOM в <div class="main-container__bottom">
mainContainer.children[1].append(sectionClientsList);


// MAIN is ready, Добавляем mainContainer в MAIN 
main.append(mainContainer);
// А main добавляем в wrapperMain
wrapperMain.append(main);


// Добавляем готовый wrapperMain в главный контейнер страницы PAGE
page.append(wrapperMain);




//=======================================================================

// Создаем и Работаем с SECTION with CARDS
// Создаем контейнер для SECTION-CARDS
const sectionCardsContainer = document.createElement('div');
sectionCardsContainer.classList.add('container__section-cards'); // <div class="container__section-cards"></div>

const sectionCards = document.createElement('section');
sectionCards.classList.add('section-cards'); // <section class="section-cards"></section>

// Создаем 2 элемента DIV для наполнения контентом
for (let i = 0; i < 2; i++) {
    const div = document.createElement('div');
    sectionCards.append(div);
}

// Добавляем class для DIV 
sectionCards.children[0].classList.add('container-text'); // <div class="container-text"></div>
sectionCards.children[1].classList.add('container-cards'); // <div class="container-cards"></div>


// Через шаблоны вставляем основной контент в HEADER DIV
// 0: div.header-menu__logo
const containerTextTPL = `
    <a href="!#" class="container-text__button">
        <span>Our services</span>
    </a>
    <h2>What Creative Design We Offer</h2>
    <p>Business owners and managers lead by example. The values and work ethic displayed by a company's decision makers have a direct ...</p>
`;
sectionCards.children[0].insertAdjacentHTML('beforeend', containerTextTPL);



// cards images
import cardImg1 from '../static/images/Frame1.png'
import cardImg2 from '../static/images/Frame2.png'
import cardImg3 from '../static/images/Frame3.png'
import cardImg4 from '../static/images/Frame4.png'
import cardImg5 from '../static/images/Frame5.png'
import cardImg6 from '../static/images/Frame6.png'
import cardImg7 from '../static/images/Frame7.png'
import cardImg8 from '../static/images/Frame8.png'


// const containerCards = sectionCards.children[1].classList.add('container-cards'); // <div class="container-cards"></div>


const cards = [
    {
        id: 1,
        title: 'Product management',
        img: `url('${cardImg1}')`,
    },
    {
        id: 2,
        title: 'Web & Mobile Development',
        img: `url('${cardImg2}')`,
    },
    {
        id: 3,
        title: 'Brochures & Flyers',
        img: `url('${cardImg3}')`,
    },
    {
        id: 4,
        title: 'Logo & name cards',
        img: `url('${cardImg4}')`,
    },
    {
        id: 5,
        title: 'Marketing & Commuication',
        img: `url('${cardImg5}')`,
    },
    {
        id: 6,
        title: 'Business Development',
        img: `url('${cardImg6}')`,
    },
    {
        id: 7,
        title: 'Human Resources',
        img: `url('${cardImg7}')`,
    },
    {
        id: 8,
        title: 'Infographics & Illustrations',
        img: `url('${cardImg8}')`,
    },
];


cards.forEach( (card) => {

    const divContainer = document.createElement('div'); 
    divContainer.classList.add('container-card'); // <div class="container-card"></div>
        
    const cardTPL = `
        <div class="card card-${card.id}">
            <div class="card__image" style="background-image: ${card.img}"></div>
            <a href="!#" class="card__title">${card.title}</a>
            <button type="button" class="card-btn">Learn more ></button>
        </div>
    `;

    divContainer.insertAdjacentHTML('beforeend', cardTPL);

    // Добавляем divContainer в sectionCards 
    sectionCards.children[1].append(divContainer);
    
});


// Добавляем sectionCards в sectionCardsContainer
sectionCardsContainer.append(sectionCards); 

// Добавляем sectionCardsContainer в MAIN 
main.append(sectionCardsContainer);
